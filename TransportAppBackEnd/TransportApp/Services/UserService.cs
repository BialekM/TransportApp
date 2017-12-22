using System;
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
                            Login = model.Login,
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
                    user.Login = model.Login;
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

    public List<User> GetUsers()
        {
            List<User> ListOfUsers = _context.Users.ToList();
            return ListOfUsers;
        }

        public User GetUser(string id)
        {
            User user = _context.Users.FirstOrDefault(u => u.Id == id);
            return user;
        }

    }
    
}
