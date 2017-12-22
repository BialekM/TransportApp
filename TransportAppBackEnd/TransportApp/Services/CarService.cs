using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TransportApp.Models;

namespace TransportApp.Services
{
    public class CarService : ICarService
    {
        private readonly TransportAppContext _context;

        public CarService(TransportAppContext context)
        {
            _context = context;
        }

        public CarStatus DeleteCar(Car car)
        {
            CarStatus carStatus = new CarStatus();

            if (_context.Cars.Count(c => c.RegistrationNumber.Equals(car.RegistrationNumber)) > 0)
            {
                try
                {
                    _context.Cars.Remove(car);
                    _context.SaveChanges();
                    carStatus.Status = "Ok";
                    carStatus.Message = "Pomyślnie usunięto";
                    return carStatus;
                }
                catch
                {
                    carStatus.Status = "Failed";
                    carStatus.Message = "nie udało się usunąć samochodu";
                    return carStatus;
                }
            }
            else
            {
                carStatus.Status = "Failed";
                carStatus.Message = "nie ma takiego samochodu";
                return carStatus;
            }
        }
        public CarStatus AddCar(Car car)
        {
            CarStatus carStatus = new CarStatus();
            try
            {
                carStatus.RegistrationNumber = car.RegistrationNumber;
                if (car.Id == 0)
                {
                    if (_context.Cars.Count(c => c.RegistrationNumber.Equals(car.RegistrationNumber)) > 0)
                    {
                        carStatus.Message = "Samochód o podanej rejestracji już istnieje";
                        carStatus.Status = "Failed";
                    }
                    else
                    {
                        _context.Cars.Add(car);
                        _context.SaveChanges();
                        carStatus.Message = "Samochód dodany pomyślnie";
                        carStatus.Status = "ok";
                        return carStatus;
                    }
                }
                else
                {
                    if (_context.Cars.Count(c => c.RegistrationNumber.Equals(car.RegistrationNumber)) > 0)
                    {
                        _context.Cars.Update(car);
                        _context.SaveChangesAsync();
                        carStatus.Message = "Samochód pomyślnie zaktualizowany";
                        carStatus.Status = "ok";
                    }
                    else
                    {
                        carStatus.Message = "Nie ma takiego samochodu";
                        carStatus.Status = "Failed";
                    }
                }


            }
            catch (Exception e)
            {
                carStatus.Message = e.Message;
                carStatus.Status = "Failed";
                return carStatus;
            }
            return carStatus;
        }

        public Car GetCar(int id)
        {
            return _context.Cars.FirstOrDefault(car => car.Id == id);
        }

        public List<Car> GetCars()
        {
            List<Car> ListOfCars = _context.Cars.ToList();
            return ListOfCars;
        }

        public Boolean DeleteFault(int faultId)
        {
            try
            {
                var faultFromDb = _context.Faults.Single(f => f.FaultId == faultId);

                if (faultFromDb != null)
                {
                    _context.Faults.Remove(faultFromDb);
                    _context.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch
            {
                return false;
            }
        }

        public List<Fault> GetFaultList(int id)
        {
            //            Car car=_context.Cars.FirstOrDefault(e => e.Id == id);
            //            return car.FaultList;
            List<Fault> faultList = _context.Faults.Where(e => e.CarId == id).ToList();
            return faultList;
        }

        public List<Fuel> GetFuelList(int id)
        {
            if (_context.Fuels.Where(e => e.CarId == id) != null)
            {
                List<Fuel> fuelList = _context.Fuels.Where(e => e.CarId == id).ToList();
                return fuelList;
            }
            else { return new List<Fuel>(); }
        }

        public Fault GetFault(int carId, int faultId)
        {
            Fault fault = _context.Faults.FirstOrDefault(e => e.FaultId == faultId);
            return fault;
        }

        public CarStatus AddFault(int carId, Fault fault)
        {
            CarStatus carStatus = new CarStatus();
            if (_context.Faults.Count(c => c.CarId.Equals(carId)) > 0 && _context.Faults.Count(c => c.FaultId.Equals(fault.FaultId)) > 0)
            {
                _context.Faults.Update(fault);
                _context.SaveChanges();
                carStatus.Message = "Naprawa zaktualizowana pomyślnie";
                carStatus.Status = "ok";
            }
            else if (_context.Cars.Count(c => c.Id.Equals(carId)) > 0)
            {
                _context.Faults.Add(fault);
                _context.SaveChanges();
                carStatus.Message = "Naprawa dodana pomyślnie";
                carStatus.Status = "ok";

            }
            else
            {
                carStatus.Message = "Nie udało się dodać naprawy";
                carStatus.Status = "Failed";
            }
            return carStatus;
        }

        public CarStatus AddFuel(int carId, Fuel fuel)
        {
            CarStatus carStatus = new CarStatus();
            if (_context.Faults.Count(c => c.CarId.Equals(carId)) > 0 && _context.Fuels.Count(c => c.FuelId.Equals(fuel.FuelId)) > 0)
            {
                _context.Fuels.Update(fuel);
                _context.SaveChangesAsync();
                carStatus.Message = "Tankowanie zaktualizowane pomyślnie";
                carStatus.Status = "ok";
            }
            else if (_context.Cars.Count(c => c.Id.Equals(carId)) > 0)
            {
                _context.Fuels.Add(fuel);
                _context.SaveChangesAsync();
                carStatus.Message = "Tankowanie dodano pomyślnie";
                carStatus.Status = "ok";

            }
            else
            {
                carStatus.Message = "Nie udało się dodać tankowania";
                carStatus.Status = "Failed";
            }
            return carStatus;
        }
    }
}

