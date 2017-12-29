using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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
        public Task<UserStatus> AddUser([FromBody]User user)
        {
            return _userService.AddUser(user);
        }

        [Route("GetUsers"), HttpGet]
        public List<User> GetUsers()
        {
            return _userService.GetUsers();
        }
        [Route("GetUser/{id}"), HttpGet]
        public User GetUser(string id)
        {
            return _userService.GetUser(id);
        }

        [Route("DeleteUser"), HttpPost]
        [EnableCors("AllowSpecificOrigin")]
        public Task<Boolean> DeleteUser([FromBody]User user)
        {
            return _userService.DeleteUser(user);
        }

        [Route("AddSurvey"), HttpPost]
        [EnableCors("AllowSpecificOrigin")]
        public Task<UserStatus> AddSurvey([FromBody]Survey survey)
        {
            return _userService.AddSurvey(survey);
        }

        [Route("GetSurvey/{id}"), HttpGet]
        public List<Survey> GetSurvey(string id)
        {
            return _userService.GetSurveys(id);
        }

        [Route("GetSurvey/{id}/User/{surveyId}"), HttpGet]
        public Survey GetSurvey(string id, int surveyId)
        {
            return _userService.GetSurveys(id, surveyId);
        }

    }
}