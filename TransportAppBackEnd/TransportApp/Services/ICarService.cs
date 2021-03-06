﻿using System;
using System.Collections.Generic;
using TransportApp.Models;

namespace TransportApp.Services
{
    public interface ICarService
    {
        CarStatus AddCar(Car car);
        List<Car> GetCars();
        Car GetCar(int id);
        List<Fault> GetFaultList(int id);
        Fault GetFault(int carId, int faultId);
        CarStatus AddFault(int carId, Fault fault);
        List<Fuel> GetFuelList(int id);
        CarStatus AddFuel(int carId, Fuel fuel);
        CarStatus DeleteCar(Car car);
        Boolean DeleteFault(int faultId);
        Fuel GetFuel(int carId, int fuelId);
        bool DeleteFuel(int fuelId);
    }
}
