using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.KeyVault.Models;
using Microsoft.EntityFrameworkCore;
using Remotion.Linq.Parsing.Structure.IntermediateModel;
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
        public async Task<CarStatus> AddCar([FromBody]Car car)
        {
            return _carService.AddCar(car);
        }

        [Route("GetCars"), HttpGet]
        public List<Car> ListOfCars()
        {
            return _carService.GetCars();
        }

        [Route("GetCar"), HttpGet]
        public Car GetCar()
        {
            return _carService.GetCar();
        }



    }
}