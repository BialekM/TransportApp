using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TransportApp.Models
{
    public class Fuel
    {
        [Key]
        public int FuelId { get; set; }
        public DateTime DateOfFuel { get; set; }
        
        public User User { get; set; }
        public double NumberOfLitres { get; set; }
        public double Price { get; set; }
    }
}
