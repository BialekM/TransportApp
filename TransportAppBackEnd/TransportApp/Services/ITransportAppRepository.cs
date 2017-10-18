﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportApp.Models;

namespace TransportApp.Services
{
    public interface ITransportAppRepository
    {
        List<Car> GetCars();

        Car GetCarById(string carId);

        Tachograf GetTachograf();
    }
}
