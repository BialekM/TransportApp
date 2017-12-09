using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using TransportApp.Models;
using TransportApp.Services;

namespace TransportApp.Controllers
{
    [EnableCors("AllowSpecificOrigin")]
    public class CarController : Controller
    {
        private readonly ICarService _carService;
        public CarController(ICarService carService)
        {
            _carService = carService;
        }

        [Route("AddCar"), HttpPost]
        [EnableCors("AllowSpecificOrigin")]
        public CarStatus AddCar([FromBody]Car car)
        {
            return _carService.AddCar(car);
        }

        [Route("AddFault"), HttpPost]
        [EnableCors("AllowSpecificOrigin")]
        public CarStatus AddFault([FromBody]Fault fault)
        {
            return _carService.AddFault(fault.CarId,fault);
        }
//        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme,Roles = "Manager")]
        [Route("GetCars"), HttpGet]
        public List<Car> ListOfCars()
        {
//            var user = User.Identity;
//            var name = User.Claims.ToArray();
//            var value = name[1].Value;
            return _carService.GetCars();
        }

        [Route("GetCar/{id}"), HttpGet]
        public Car GetCar(int id)
        {
            return _carService.GetCar(id);
        }

        [Route("GetCarFaultList/{id}"), HttpGet]
        public List<Fault> GetCarFaultList(int id)
        {
            return _carService.GetFaultList(id);
        }

        [Route("GetCarFault/{carId}/Fault/{faultId}"), HttpGet]
        public Fault GetFault(int carId,int faultId)
        {
            return _carService.GetFault(carId,faultId);
        }

        [Route("GetCarFuelList/{carId}"), HttpGet]
        public List<Fuel> GetFuelList(int carId)
        {
            return _carService.GetFuelList(carId);
        }

        [Route("AddFuel"), HttpPost]
        [EnableCors("AllowSpecificOrigin")]
        public CarStatus AddFuel([FromBody]Fuel fuel)
        {
            return _carService.AddFuel(fuel.CarId,fuel);
        }
    }
}