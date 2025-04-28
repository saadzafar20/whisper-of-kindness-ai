
using FeelCalm.API.DTOs;

namespace FeelCalm.API.Services
{
    public interface ISessionService
    {
        Task<SessionDto> StartSessionAsync(string userId);
        Task<SessionDto> EndSessionAsync(string userId, string sessionId);
        Task<List<SessionDto>> GetUserSessionsAsync(string userId);
        Task<TrialTimeDto> GetTrialTimeRemainingAsync(string userId);
    }
}
