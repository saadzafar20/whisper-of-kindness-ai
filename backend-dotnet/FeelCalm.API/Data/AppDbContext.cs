
using FeelCalm.API.Models;
using Microsoft.EntityFrameworkCore;

namespace FeelCalm.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        { }

        public DbSet<User> Users { get; set; } = null!;
        public DbSet<UserSession> UserSessions { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure User entity
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.UserId);
                entity.Property(e => e.UserId).ValueGeneratedNever();
                entity.HasIndex(e => e.Email).IsUnique();
            });

            // Configure UserSession entity
            modelBuilder.Entity<UserSession>(entity =>
            {
                entity.HasKey(e => e.SessionId);
                entity.Property(e => e.SessionId).ValueGeneratedNever();

                entity.HasOne(e => e.User)
                      .WithMany(u => u.Sessions)
                      .HasForeignKey(e => e.UserId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
        }
    }
}
