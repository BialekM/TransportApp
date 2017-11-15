using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TransportApp.Models
{
    public class CarStatus
    {
        public string RegistrationNumber { get; set; }
        public string Status { get; set; }
        public string Message { get; set; }
    }
}
