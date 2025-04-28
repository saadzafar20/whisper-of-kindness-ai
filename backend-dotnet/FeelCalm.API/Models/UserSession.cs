
namespace FeelCalm.API.Models
{
    public class UserSession
    {
        public string SessionId { get; set; } = string.Empty;
        public string UserId { get; set; } = string.Empty;
        public DateTime StartTime { get; set; }
        public DateTime? EndTime { get; set; }
        public int? SessionDuration { get; set; } // in seconds
        public bool IsTrial { get; set; }
        
        public User User { get; set; } = null!;
    }
}
