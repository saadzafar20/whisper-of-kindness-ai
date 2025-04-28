
using FeelCalm.API.Data;
using FeelCalm.API.Models;
using FeelCalm.API.DTOs;
using Microsoft.EntityFrameworkCore;

namespace FeelCalm.API.Services
{
    public class SessionService : ISessionService
    {
        private readonly AppDbContext _context;
        private const int TotalTrialSeconds = 10 * 60; // 10 minutes in seconds

        public SessionService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<SessionDto> StartSessionAsync(string userId)
        {
            // Check if user exists
            var user = await _context.Users.FindAsync(userId);
            if (user == null)
            {
                throw new KeyNotFoundException("User not found");
            }

            // Create session ID
            string sessionId = $"session_{DateTimeOffset.Now.ToUnixTimeMilliseconds()}";
            
            // Create session
            var session = new UserSession
            {
                SessionId = sessionId,
                UserId = userId,
                StartTime = DateTime.UtcNow,
                IsTrial = !user.IsPremium
            };

            _context.UserSessions.Add(session);
            await _context.SaveChangesAsync();

            return new SessionDto
            {
                SessionId = sessionId,
                StartTime = session.StartTime,
                IsTrial = session.IsTrial
            };
        }

        public async Task<SessionDto> EndSessionAsync(string userId, string sessionId)
        {
            var session = await _context.UserSessions
                .FirstOrDefaultAsync(s => s.SessionId == sessionId && s.UserId == userId);
                
            if (session == null)
            {
                throw new KeyNotFoundException("Session not found");
            }

            DateTime endTime = DateTime.UtcNow;
            int durationInSeconds = (int)(endTime - session.StartTime).TotalSeconds;

            session.EndTime = endTime;
            session.SessionDuration = durationInSeconds;

            await _context.SaveChangesAsync();

            return new SessionDto
            {
                SessionId = session.SessionId,
                StartTime = session.StartTime,
                EndTime = session.EndTime,
                DurationInSeconds = session.SessionDuration,
                IsTrial = session.IsTrial
            };
        }

        public async Task<List<SessionDto>> GetUserSessionsAsync(string userId)
        {
            var sessions = await _context.UserSessions
                .Where(s => s.UserId == userId)
                .OrderByDescending(s => s.StartTime)
                .ToListAsync();

            return sessions.Select(s => new SessionDto
            {
                SessionId = s.SessionId,
                StartTime = s.StartTime,
                EndTime = s.EndTime,
                DurationInSeconds = s.SessionDuration,
                IsTrial = s.IsTrial
            }).ToList();
        }

        public async Task<TrialTimeDto> GetTrialTimeRemainingAsync(string userId)
        {
            // Check if user exists
            var user = await _context.Users.FindAsync(userId);
            if (user == null)
            {
                throw new KeyNotFoundException("User not found");
            }

            // If premium, no trial limitations
            if (user.IsPremium)
            {
                return new TrialTimeDto
                {
                    IsPremium = true,
                    RemainingSeconds = null,
                    Message = "Premium user - unlimited access"
                };
            }

            // Calculate total used trial time
            int totalUsedSeconds = await _context.UserSessions
                .Where(s => s.UserId == userId && s.IsTrial && s.SessionDuration.HasValue)
                .SumAsync(s => s.SessionDuration.Value);

            int remainingSeconds = Math.Max(0, TotalTrialSeconds - totalUsedSeconds);

            return new TrialTimeDto
            {
                IsPremium = false,
                TotalTrialSeconds = TotalTrialSeconds,
                UsedSeconds = totalUsedSeconds,
                RemainingSeconds = remainingSeconds,
                PercentageRemaining = (double)remainingSeconds / TotalTrialSeconds * 100
            };
        }
    }
}
