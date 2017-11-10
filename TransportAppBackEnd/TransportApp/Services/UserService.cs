using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportApp.Models;

namespace TransportApp.Services
{
    public class UserService : IUserService
    {
        private readonly TransportAppContext _context;

        public UserService(TransportAppContext context)
        {
            _context = context;
        }

        public UserStatus AddUser(User user)
        {
            UserStatus userStatus = new UserStatus();
            userStatus.Pesel = user.Pesel;
            if (_context.Users.Count(c => c.Pesel.Equals(user.Pesel)) > 0)
            {
                userStatus.Message = "Użytkownik o podanej rejestracji już istnieje";
                userStatus.Status = "Failed";
            }
            else
            {
                try
                {
                    _context.Users.Add(user);
                    _context.SaveChangesAsync();
                    userStatus.Message = "Użytkownik dodany pomyślnie";
                    userStatus.Status = "ok";
                    return userStatus;

                }
                catch (Exception e)
                {
                    userStatus.Message = e.Message;
                    userStatus.Status = "Failed";
                    return userStatus;
                }
            }
            return userStatus;
        }

        public List<User> GetUsers()
        {
            List<User> ListOfUsers = _context.Users.ToList();
            return ListOfUsers;
        }

        public User GetUserByPesel(int pesel)
        {
            User user = _context.Users.Where(u => u.Pesel == pesel).FirstOrDefault();
            return user;
        }

    }
    
}
