
namespace FeelCalm.API.DTOs
{
    public class LoginDto
    {
        public required string Email { get; set; }
        public required string Password { get; set; }
    }

    public class RegisterDto
    {
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string FullName { get; set; }
        public string? Gender { get; set; }
        public string? PricingPlan { get; set; }
    }

    public class AuthResponseDto
    {
        public required string Token { get; set; }
    }

    public class GoogleAuthDto
    {
        public required string Credential { get; set; }
    }
}
