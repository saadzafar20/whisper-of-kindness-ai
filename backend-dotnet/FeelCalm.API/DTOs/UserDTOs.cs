
namespace FeelCalm.API.DTOs
{
    public class UserProfileDto
    {
        public required string UserId { get; set; }
        public required string Email { get; set; }
        public required string FullName { get; set; }
        public string? ProfilePicture { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? LastLogin { get; set; }
        public bool IsPremium { get; set; }
        public string? Gender { get; set; }
        public string? PricingPlan { get; set; }
    }

    public class UpdateProfileDto
    {
        public string? FullName { get; set; }
        public string? ProfilePicture { get; set; }
    }
}
