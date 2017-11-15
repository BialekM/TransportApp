using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
    }
}
