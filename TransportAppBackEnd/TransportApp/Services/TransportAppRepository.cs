using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;
using TransportApp.Models;

namespace TransportApp.Services
{
    public class TransportAppRepository : ITransportAppRepository
    {
        private TransportAppContext _context;
        public TransportAppRepository(TransportAppContext context)
        {
            _context = context;
        }
        public List<Car> GetCars()
        {
            return _context.Cars.OrderBy(c => c.RegistrationNumber).ToList();
        }

        public Car GetCarById(string carId)
        {
            return _context.Cars.Where(c => c.RegistrationNumber == carId).FirstOrDefault();

        }

        public Tachograf GetTachograf()
        {
            return _context.Tachografs.Where(c => c.TachografId == 1).FirstOrDefault();
        }
    }
}
