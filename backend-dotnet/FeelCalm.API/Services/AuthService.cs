
using FeelCalm.API.Data;
using FeelCalm.API.Models;
using FeelCalm.API.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using BC = BCrypt.Net.BCrypt;
using Google.Apis.Auth;

namespace FeelCalm.API.Services
{
    public class AuthService : IAuthService
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;

        public AuthService(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<AuthResponseDto> RegisterAsync(RegisterDto registerDto)
        {
            // Check if user already exists
            if (await _context.Users.AnyAsync(u => u.Email == registerDto.Email))
            {
                throw new ApplicationException("User already exists");
            }

            // Create user ID
            string userId = $"user_{DateTimeOffset.Now.ToUnixTimeMilliseconds()}";

            // Hash password
            string hashedPassword = BC.HashPassword(registerDto.Password);

            // Create user
            var user = new User
            {
                UserId = userId,
                Email = registerDto.Email,
                Password = hashedPassword,
                FullName = registerDto.FullName,
                Gender = registerDto.Gender,
                PricingPlan = registerDto.PricingPlan,
                IsPremium = registerDto.PricingPlan != "free",
                CreatedAt = DateTime.UtcNow
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            // Generate JWT token
            string token = GenerateJwtToken(user);

            return new AuthResponseDto
            {
                Token = token
            };
        }

        public async Task<AuthResponseDto> LoginAsync(LoginDto loginDto)
        {
            // Find user
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == loginDto.Email);

            if (user == null)
            {
                throw new ApplicationException("Invalid credentials");
            }

            // Verify password
            bool passwordValid = BC.Verify(loginDto.Password, user.Password);

            if (!passwordValid)
            {
                throw new ApplicationException("Invalid credentials");
            }

            // Update last login
            user.LastLogin = DateTime.UtcNow;
            await _context.SaveChangesAsync();

            // Generate JWT token
            string token = GenerateJwtToken(user);

            return new AuthResponseDto
            {
                Token = token
            };
        }

        public async Task<AuthResponseDto> GoogleAuthAsync(string credential)
        {
            try
            {
                var settings = new GoogleJsonWebSignature.ValidationSettings
                {
                    Audience = new[] { _configuration["Authentication:Google:ClientId"] ?? throw new InvalidOperationException("Google ClientId not configured") }
                };

                var payload = await GoogleJsonWebSignature.ValidateAsync(credential, settings);
                
                // Check if user exists
                var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == payload.Email);

                if (user == null)
                {
                    // Create new user
                    string userId = $"google_user_{DateTimeOffset.Now.ToUnixTimeMilliseconds()}";
                    
                    user = new User
                    {
                        UserId = userId,
                        Email = payload.Email,
                        FullName = payload.Name,
                        ProfilePicture = payload.Picture,
                        GoogleId = payload.Subject,
                        CreatedAt = DateTime.UtcNow,
                        LastLogin = DateTime.UtcNow,
                        PricingPlan = "free"
                    };

                    _context.Users.Add(user);
                }
                else
                {
                    // Update existing user with Google info
                    if (string.IsNullOrEmpty(user.GoogleId))
                    {
                        user.GoogleId = payload.Subject;
                        user.ProfilePicture = payload.Picture;
                    }
                    user.LastLogin = DateTime.UtcNow;
                }

                await _context.SaveChangesAsync();

                // Generate JWT token
                string token = GenerateJwtToken(user);

                return new AuthResponseDto
                {
                    Token = token
                };
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Google authentication failed: {ex.Message}");
            }
        }

        public string GenerateJwtToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration["JWT:Secret"] ?? throw new InvalidOperationException("JWT Secret not configured"));
            
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("id", user.UserId)
                }),
                Expires = DateTime.UtcNow.AddDays(int.Parse(_configuration["JWT:ExpiryInDays"] ?? "1")),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
