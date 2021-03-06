﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TransportApp.Models
{
    public class Car
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string RegistrationNumber { get; set; }
        public string TypeOfCar { get; set; }
        public string Model { get; set; }
        public int YearOfProduction { get; set; }
        public int Power { get; set; }
        public string VinNumber { get; set; }
        public string Factory { get; set; }
        public DateTime CarReviewDate { get; set; }
        public DateTime OcEndDate { get; set; }
        public string Insurer { get; set; }
        public DateTime? UdtElevatorReviewWhen { get; set; }
        public DateTime? UdtElevatorReviewFrom { get; set; }
        public DateTime? TachografReviewWhen { get; set; }
        public DateTime? TachografReviewFrom { get; set; }
        public string Owner { get; set; }

    }
}
