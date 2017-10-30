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
        public UserStatus AddCar([FromBody]User user)
        {
            return _userService.AddUser(user);
        }
    }
}