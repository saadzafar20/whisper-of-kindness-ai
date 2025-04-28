
using Microsoft.AspNetCore.Mvc;
using FeelCalm.API.Services;
using FeelCalm.API.DTOs;

namespace FeelCalm.API.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        // POST: api/auth/register
        [HttpPost("register")]
        public async Task<ActionResult<AuthResponseDto>> Register([FromBody] RegisterDto registerDto)
        {
            try
            {
                var result = await _authService.RegisterAsync(registerDto);
                return Ok(result);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { msg = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { msg = "Server error" });
            }
        }

        // POST: api/auth/login
        [HttpPost("login")]
        public async Task<ActionResult<AuthResponseDto>> Login([FromBody] LoginDto loginDto)
        {
            try
            {
                var result = await _authService.LoginAsync(loginDto);
                return Ok(result);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { msg = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { msg = "Server error" });
            }
        }
    }
}
