using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace TransportApp.Models
{
    public class Survey
    {
        [Key]
        public int SurveyId { get; set; }
        public string SurveyDescription { get; set; }
        public DateTime ReviewWhen { get; set; }
        public DateTime ReviewFrom { get; set; }
    }
}
