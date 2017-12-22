using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TransportApp.Models
{
    public class Fuel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int FuelId { get; set; }
        public DateTime DateOfFuel { get; set; }
        public int CarId { get; set; } 
        public int UserId { get; set; }
        public double NumberOfLitres { get; set; }
        public double Price { get; set; }
        public string UserName { get; set; }
        public string Surname { get; set; }
    }
}
