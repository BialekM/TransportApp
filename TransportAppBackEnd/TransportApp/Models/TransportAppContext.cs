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
        public TransportAppContext(DbContextOptions<TransportAppContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>()
                .Property<DateTime>("LastUpdated");
        }
        public DbSet<Car> Cars { get; set; }
        public DbSet<Fault> Faults { get; set; }
        public DbSet<Fuel> Fuels { get; set; }
        public DbSet<Survey> Surveys { get; set; }
        public DbSet<Tachograf> Tachografs { get; set; }
        public DbSet<UdtElevator> UdtElevators { get; set; }
        public DbSet<User> Users { get; set; }
    }

}
