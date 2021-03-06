﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using TransportApp.Models;

namespace TransportApp.Services
{
    public class UserService : IUserService
    {
        private readonly TransportAppContext _context;
        private readonly RoleManager<IdentityRole> _roleMgr;
        private readonly UserManager<User> _userMgr;

        public UserService(TransportAppContext context, UserManager<User> userMgr)
        {
            _context = context;
            _userMgr = userMgr;
        }

        public async Task<UserStatus> AddUser(User model)
        {
            try
            {
                if (model.Id == "0")
                {
                    var user = await _userMgr.FindByIdAsync(model.Id);
                    if (user == null)
                    {
                        user = new User
                        {
                            Pesel = model.Pesel,
                            UserName = model.UserName,
                            UserType = model.UserType,
                            Surname = model.Surname,
                            FirstName = model.FirstName,
                        };
                        await _userMgr.CreateAsync(user, model.Password);
                        UserStatus status = new UserStatus()
                        {
                            Pesel = model.Pesel,
                            Message = "Pomyślnie dodano użytkownika",
                            Status = "Ok"

                        };
                        return status;

                    }
                    else
                    {
                        UserStatus badstatus = new UserStatus()
                        {
                            Pesel = model.Pesel,
                            Message = "Nie udało się dodać użytkownika",
                            Status = "Failed"
                        };
                        return badstatus;
                    }
                }
                else
                {
                    var user = await _userMgr.FindByIdAsync(model.Id);
                    user.FirstName = model.FirstName;
                    user.UserName = model.UserName;
                    user.Surname = model.Surname;
                    user.Pesel = model.Pesel;
                    user.UserType = model.UserType;
                    model.Password = user.Password;
                    await _userMgr.UpdateAsync(user);
                    UserStatus status = new UserStatus()
                    {
                        Pesel = model.Pesel,
                        Message = "Pomyślnie zaktualizowano użytkownika",
                        Status = "Ok"
                    };
                    return status;
                }

            }
            catch (Exception e)
            {
                UserStatus badstatus = new UserStatus()
                {
                    Pesel = model.Pesel,
                    Message = e.Message,
                    Status = "Failed"
                };
                return badstatus;
            }


        }

        public async Task<Boolean> DeleteUser(User model)
        {
            var user = await _userMgr.FindByIdAsync(model.Id);
            if (user != null)
            {
                await _userMgr.DeleteAsync(user);
                return true;
            }
            else
            {
                return false;
            }
        }

        public List<User> GetUsers()
        {
            List<User> ListOfUsers = _context.Users.ToList();
            return ListOfUsers;
        }

        public List<Survey> GetSurveys()
        {
            List<Survey> ListOfSurveys = _context.Surveys.ToList();
            return ListOfSurveys;
        }

        public List<Survey> GetSurveys(string id)
        {
            List<Survey> lista = new List<Survey>();
            lista = _context.Surveys.Where(e => e.UserId.Equals(id)).ToList();
            return lista;
        }

        public Survey GetSurveys(string id,int surveyId)
        {
            Survey survey = new Survey();
            survey = _context.Surveys.FirstOrDefault(e => e.UserId.Equals(id) && e.SurveyId == surveyId);
            return survey;
        }

        public User GetUser(string id)
        {
            User user = _context.Users.FirstOrDefault(u => u.Id == id);
            return user;
        }

        public async Task<UserStatus> AddSurvey(Survey survey)
        {
            UserStatus status = new UserStatus();
            var user = await _userMgr.FindByIdAsync(survey.UserId);
            if (user != null)
            {
                if (survey.SurveyId == 0)
                {
                    _context.Surveys.Add(survey);
                    _context.SaveChanges();
                    status.Message = "Pomyślnie dodano badanie";
                    status.Status = "ok";
                }
                else
                {
                    Survey newsurvey = new Survey();
                    _context.Surveys.Update(survey);
                    _context.SaveChanges();
                    status.Message = "Pomyślnie zaktualizowano badanie";
                    status.Status = "ok";
                }
            }
            else
            {
                status.Message = "Nie dodano badania";
                status.Status = "Failed";
            }
            return status;
        }

        public Boolean DeleteSurvey(int surveyId)
        {
            var res = false;
            if (_context.Surveys.Count(s => s.SurveyId == surveyId) != 0)
            {
                Survey surveyToDelete = _context.Surveys.FirstOrDefault(s => s.SurveyId == surveyId);
                if (surveyToDelete != null) _context.Surveys.Remove(surveyToDelete);
                _context.SaveChanges();
                res = true;
            }
            return res;
        }

    }
    
}
