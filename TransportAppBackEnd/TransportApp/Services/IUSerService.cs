using System.Collections.Generic;
using TransportApp.Models;

namespace TransportApp.Services
{
    public interface IUserService
    {
        UserStatus AddUser(User user);
        List<User> GetUsers();
        User GetUserByPesel(int pesel);
    }
}