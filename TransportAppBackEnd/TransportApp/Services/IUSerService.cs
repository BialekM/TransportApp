using TransportApp.Models;

namespace TransportApp.Services
{
    public interface IUserService
    {
        UserStatus AddUser(User user);
    }
}