
using FeelCalm.API.Models;
using FeelCalm.API.DTOs;

namespace FeelCalm.API.Services
{
    public interface IUserService
    {
        Task<UserProfileDto> GetUserProfileAsync(string userId);
        Task<bool> UpdateProfileAsync(string userId, UpdateProfileDto updateProfileDto);
    }
}
