
using FeelCalm.API.Data;
using FeelCalm.API.Models;
using FeelCalm.API.DTOs;
using Microsoft.EntityFrameworkCore;

namespace FeelCalm.API.Services
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _context;

        public UserService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<UserProfileDto> GetUserProfileAsync(string userId)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.UserId == userId);
                
            if (user == null)
            {
                throw new KeyNotFoundException("User not found");
            }

            return new UserProfileDto
            {
                UserId = user.UserId,
                Email = user.Email,
                FullName = user.FullName,
                ProfilePicture = user.ProfilePicture,
                CreatedAt = user.CreatedAt,
                LastLogin = user.LastLogin,
                IsPremium = user.IsPremium,
                Gender = user.Gender,
                PricingPlan = user.PricingPlan
            };
        }

        public async Task<bool> UpdateProfileAsync(string userId, UpdateProfileDto updateProfileDto)
        {
            var user = await _context.Users.FindAsync(userId);
                
            if (user == null)
            {
                throw new KeyNotFoundException("User not found");
            }

            user.FullName = updateProfileDto.FullName ?? user.FullName;
            user.ProfilePicture = updateProfileDto.ProfilePicture ?? user.ProfilePicture;

            await _context.SaveChangesAsync();
            return true;
        }
    }
}
