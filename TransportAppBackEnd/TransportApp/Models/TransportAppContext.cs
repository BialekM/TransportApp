using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure.KeyVault.Models;
using Microsoft.EntityFrameworkCore;

namespace TransportApp.Models
{
    public class TransportAppContext : DbContext
    {
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Car>()
                .HasIndex(u => u.RegistrationNumber)
                .IsUnique();
            builder.Entity<Car>()
                .HasIndex(u => u.VinNumber)
                .IsUnique();
            builder.Entity<User>()
                .HasIndex(u => u.Login)
                .IsUnique();
            builder.Entity<User>()
                .HasIndex(u => u.Pesel)
                .IsUnique();
        }
        public TransportAppContext(DbContextOptions<TransportAppContext> options) : base(options)
        {
           Database.EnsureCreated();
        }
        public DbSet<Car> Cars { get; set; }
        public DbSet<Fault> Faults { get; set; }
        public DbSet<Fuel> Fuels { get; set; }
        public DbSet<Survey> Surveys { get; set; }
        public DbSet<User> Users { get; set; }
    }

}
