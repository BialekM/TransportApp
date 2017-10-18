using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Remotion.Linq.Parsing.Structure.IntermediateModel;
using TransportApp.Models;
using TransportApp.Services;

namespace TransportApp.Controllers
{
    [EnableCors("AllowSpecificOrigin")]
    public class CarController : Controller
    {
        private ITransportAppRepository _transportAppRepository;

        public CarController(ITransportAppRepository transportAppRepository)
        {
            _transportAppRepository = transportAppRepository;
        }
        // GET: Car
        [Route("car")]
        [HttpGet]
        public Tachograf Index()
        {
            return _transportAppRepository.GetTachograf();
        }

        [Route("AddCar")]
        [HttpPost]
        public void AddCar(AnyExpressionNode n)
        {
            
            
        }

//        // GET: Car/Details/5
//        public ActionResult Details(int id)
//        {
//            return View();
//        }
//
//        // GET: Car/Create
//        public ActionResult Create()
//        {
//            return View();
//        }
//
//        // POST: Car/Create
//        [HttpPost]
//        [ValidateAntiForgeryToken]
//        public ActionResult Create(IFormCollection collection)
//        {
//            try
//            {
//                // TODO: Add insert logic here
//
//                return RedirectToAction(nameof(Index));
//            }
//            catch
//            {
//                return View();
//            }
//        }
//
//        // GET: Car/Edit/5
//        public ActionResult Edit(int id)
//        {
////            return View();
//        }
//
//        // POST: Car/Edit/5
//        [HttpPost]
//        [ValidateAntiForgeryToken]
//        public ActionResult Edit(int id, IFormCollection collection)
//        {
//            try
//            {
//                // TODO: Add update logic here
//
//                return RedirectToAction(nameof(Index));
//            }
//            catch
//            {
////                return View();
//            }
//        }
//
//        // GET: Car/Delete/5
//        public ActionResult Delete(int id)
//        {
//            return View();
//        }
//
//        // POST: Car/Delete/5
//        [HttpPost]
//        [ValidateAntiForgeryToken]
//        public ActionResult Delete(int id, IFormCollection collection)
//        {
//            try
//            {
//                // TODO: Add delete logic here
//
//                return RedirectToAction(nameof(Index));
//            }
//            catch
//            {
//                return View();
//            }
//        }
    }
}