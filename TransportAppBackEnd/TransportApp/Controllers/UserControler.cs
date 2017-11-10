using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using TransportApp.Models;
using TransportApp.Services;

namespace TransportApp.Controllers
{
    [EnableCors("AllowSpecificOrigin")]
    public class UserControler : Controller
    {
        private readonly IUserService _userService;
        public UserControler(IUserService userService)
        {
            _userService = userService;
        }

        [Route("AddUser"), HttpPost]
        [EnableCors("AllowSpecificOrigin")]
        public UserStatus AddUser([FromBody]User user)
        {
            return _userService.AddUser(user);
        }

        [Route("GetUsers"), HttpGet]
        public List<User> GetUsers()
        {
            return _userService.GetUsers();
        }
        [Route("GetUser"), HttpGet]
        public User GetUser(int pesel)
        {
            return _userService.GetUserByPesel(pesel);
        }
    }
}