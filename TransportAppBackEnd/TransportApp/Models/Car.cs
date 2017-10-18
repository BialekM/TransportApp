using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace TransportApp.Models
{
    public class Car
    {
        [Key]
        public string RegistrationNumber { get; set; }
        public string TypeOfCar { get; set; }
        public string Model { get; set; }
        public int YearOfProduction { get; set; }
        public int Power { get; set; }
        public string vinNumber { get; set; }
        public string Factory { get; set; }
        public DateTime CarReviewDate { get; set; }
        public DateTime OcEndDate { get; set; }
        public string Insurer { get; set; }
        [Optional]
        public UdtElevator UdtElevator { get; set; }
        [Optional]
        public Tachograf Tachograf { get; set; }
        public List<Fault> FaultList { get; set; }
        public string Owner { get; set; }

    }
}
