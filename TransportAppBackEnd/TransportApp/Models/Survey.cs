using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace TransportApp.Models
{
    public class Survey
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SurveyId { get; set; }
        public string UserId { get; set; }
        public string SurveyDescription { get; set; }
        public DateTime ReviewWhen { get; set; }
        public DateTime ReviewFrom { get; set; }
    }
}
