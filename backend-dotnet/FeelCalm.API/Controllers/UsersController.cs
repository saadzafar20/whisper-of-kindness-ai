
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using FeelCalm.API.Services;
using FeelCalm.API.DTOs;
using System.Security.Claims;

namespace FeelCalm.API.Controllers
{
    [Authorize]
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        private string GetUserId()
        {
            return User.FindFirst("id")?.Value ?? 
                throw new UnauthorizedAccessException("User ID not found in token");
        }

        // GET: api/users/me
        [HttpGet("me")]
        public async Task<ActionResult<UserProfileDto>> GetUserProfile()
        {
            try
            {
                var userId = GetUserId();
                var result = await _userService.GetUserProfileAsync(userId);
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

        // PUT: api/users/update-profile
        [HttpPut("update-profile")]
        public async Task<IActionResult> UpdateUserProfile([FromBody] UpdateProfileDto updateProfileDto)
        {
            try
            {
                var userId = GetUserId();
                var result = await _userService.UpdateProfileAsync(userId, updateProfileDto);
                return Ok(new { msg = "Profile updated successfully" });
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
