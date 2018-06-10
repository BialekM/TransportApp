using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace TransportApp.Models
{
    public enum UserType{
        Boss,Mechanic,Worker
    }
    public class User : IdentityUser
    {
        public double Pesel { get; set; }
        public UserType UserType { get; set; }
        public string FirstName { get; set; }
        public string Password { get; set; }
        public string Surname { get; set; }
        public List<Survey> ListofSurvey { get; set; }
    }
}
