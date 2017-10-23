using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportApp.Models;

namespace TransportApp.Services
{
    public class CarService : ICarService
    {
        private TransportAppContext _context;

        public CarService(TransportAppContext context)
        {
            _context = context;
        }

        public CarStatus AddCar(Car car)
        {
            CarStatus carStatus = new CarStatus();
            carStatus.RegistrationNumber = car.RegistrationNumber;
            if (_context.Cars.Count(c => c.RegistrationNumber.Equals(car.RegistrationNumber)) > 0)
            {
                carStatus.Message = "Samochód o podanej rejestracji już istnieje";
                carStatus.Status = "Failed";
            }
            else
            {
                try
                {
                    _context.Cars.Add(car);
                    carStatus.Message = "Samochód dodany pomyślnie";
                    carStatus.Status = "ok";
                    return carStatus;

                }
                catch (Exception e)
                {
                    carStatus.Message = e.Message;
                    carStatus.Status = "Failed";
                    return carStatus;
                }
            }
            return carStatus;
        }

        public Car GetCar()
        {
            return _context.Cars.Where(car => car.RegistrationNumber == "1").FirstOrDefault();
        }
        public List<Car> GetCars()
        {
            return _context.Cars.ToList();
        }
    }
}
       
