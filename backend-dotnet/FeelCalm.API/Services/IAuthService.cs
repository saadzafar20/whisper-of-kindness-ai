
using FeelCalm.API.Models;
using FeelCalm.API.DTOs;

namespace FeelCalm.API.Services
{
    public interface IAuthService
    {
        Task<AuthResponseDto> RegisterAsync(RegisterDto registerDto);
        Task<AuthResponseDto> LoginAsync(LoginDto loginDto);
        string GenerateJwtToken(User user);
    }
}
