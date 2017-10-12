using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TransportApp.Models
{
    public class UdtElevator
    {
        [Key]
        public int UdtElevatorId { get; set; }
        public DateTime ReviewWhen { get; set; }
        public DateTime ReviewFrom { get; set; }
    }
}
