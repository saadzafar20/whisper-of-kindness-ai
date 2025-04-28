
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using FeelCalm.API.Services;
using FeelCalm.API.DTOs;

namespace FeelCalm.API.Controllers
{
    [Authorize]
    [Route("api/sessions")]
    [ApiController]
    public class SessionsController : ControllerBase
    {
        private readonly ISessionService _sessionService;

        public SessionsController(ISessionService sessionService)
        {
            _sessionService = sessionService;
        }

        private string GetUserId()
        {
            return User.FindFirst("id")?.Value ?? 
                throw new UnauthorizedAccessException("User ID not found in token");
        }

        // POST: api/sessions/start
        [HttpPost("start")]
        public async Task<ActionResult<SessionDto>> StartSession()
        {
            try
            {
                var userId = GetUserId();
                var result = await _sessionService.StartSessionAsync(userId);
                return Ok(result);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { msg = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { msg = "Server error" });
            }
        }

        // PUT: api/sessions/end/{sessionId}
        [HttpPut("end/{sessionId}")]
        public async Task<ActionResult<SessionDto>> EndSession(string sessionId)
        {
            try
            {
                var userId = GetUserId();
                var result = await _sessionService.EndSessionAsync(userId, sessionId);
                return Ok(result);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { msg = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { msg = "Server error" });
            }
        }

        // GET: api/sessions
        [HttpGet]
        public async Task<ActionResult<List<SessionDto>>> GetUserSessions()
        {
            try
            {
                var userId = GetUserId();
                var result = await _sessionService.GetUserSessionsAsync(userId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { msg = "Server error" });
            }
        }

        // GET: api/sessions/trial-time-remaining
        [HttpGet("trial-time-remaining")]
        public async Task<ActionResult<TrialTimeDto>> GetTrialTimeRemaining()
        {
            try
            {
                var userId = GetUserId();
                var result = await _sessionService.GetTrialTimeRemainingAsync(userId);
                return Ok(result);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { msg = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { msg = "Server error" });
            }
        }
    }
}
