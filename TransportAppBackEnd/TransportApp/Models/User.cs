using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;

namespace TransportApp.Models
{
    public enum UserType{
        Boss,Mechanic,Worker
    }
    public class User
    {
        [Key]
        public double Pesel { get; set; }
        public string UserName { get; set; }
        public UserType UserType { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Surname { get; set; }
        public List<Survey> ListofSurvey { get; set; }
    }
}
