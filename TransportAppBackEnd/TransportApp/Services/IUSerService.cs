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
    }
}