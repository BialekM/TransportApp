using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TransportApp.Models;

namespace TransportApp.Services
{
    public interface IUserService
    {
        Task<UserStatus> AddUser(User model);
        List<User> GetUsers();
        User GetUser(string id);
        Task<Boolean> DeleteUser(User model);
        Task<UserStatus> AddSurvey(Survey survey);
        List<Survey> GetSurveys(string id);
        List<Survey> GetSurveys();
        Survey GetSurveys(string id, int surveyId);
    }
}