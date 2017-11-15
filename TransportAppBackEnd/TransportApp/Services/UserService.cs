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
                _context.Users.Update(user);
                _context.SaveChangesAsync();
                userStatus.Message = "Pomyślnie zaktualizowano użytkownika";
                userStatus.Status = "ok";
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

        public User GetUser(int id)
        {
            User user = _context.Users.FirstOrDefault(u => u.id == id);
            return user;
        }

    }
    
}
