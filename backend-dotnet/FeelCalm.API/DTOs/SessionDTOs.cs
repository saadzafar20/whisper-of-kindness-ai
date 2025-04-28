
namespace FeelCalm.API.DTOs
{
    public class SessionDto
    {
        public required string SessionId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime? EndTime { get; set; }
        public int? DurationInSeconds { get; set; }
        public bool IsTrial { get; set; }
    }

    public class TrialTimeDto
    {
        public bool IsPremium { get; set; }
        public int? TotalTrialSeconds { get; set; }
        public int? UsedSeconds { get; set; }
        public int? RemainingSeconds { get; set; }
        public double? PercentageRemaining { get; set; }
        public string? Message { get; set; }
    }
}
