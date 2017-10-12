using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TransportApp.Models
{
    public enum Priority
    {
        Hight,Medium,Low
    }
    public class Fault
    {
        [Key]
        public int FaultId { get; set; }
        public string FaultInformation { get; set; }
        public Priority Priority { get; set; }
        public Boolean MechanicDone { get; set; }
        public Boolean ConfirmDone { get; set; }
    }
}
