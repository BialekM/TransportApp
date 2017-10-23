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
        Car GetCar();
    }
}
