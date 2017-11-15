using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TransportApp.Models
{
    public enum UserType{
        Boss,Mechanic,Worker
    }
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public double Pesel { get; set; }
        public string UserName { get; set; }
        public UserType UserType { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Surname { get; set; }
        public List<Survey> ListofSurvey { get; set; }
    }
}
