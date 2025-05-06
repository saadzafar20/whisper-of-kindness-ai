
using System.Text.Json.Serialization;

namespace FeelCalm.API.Models
{
    public class User
    {
        public string UserId { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        
        [JsonIgnore]
        public string Password { get; set; } = string.Empty;
        
        public string FullName { get; set; } = string.Empty;
        public string? ProfilePicture { get; set; }
        public string? Gender { get; set; }
        public string? PricingPlan { get; set; }
        public bool IsPremium { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? LastLogin { get; set; }
        public string? GoogleId { get; set; }

        [JsonIgnore]
        public ICollection<UserSession> Sessions { get; set; } = new List<UserSession>();
    }
}
