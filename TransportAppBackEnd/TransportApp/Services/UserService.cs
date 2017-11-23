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
            var user = await _userMgr.FindByNameAsync(model.UserName);
            if (user == null)
            {
//                if (!await _roleMgr.RoleExistsAsync("Admin"))
//                {
//                    var role = new IdentityRole("Admin");
////                    role. Claims.Add(new IdentityRoleClaim<string> { ClaimType = "IsAdmin", ClaimValue = "True" });
//                    await _roleMgr.CreateAsync(role);
//                }

                user = new User
                {
                    Pesel = model.Pesel,
                    UserName = model.UserName,
                    UserType = model.UserType,
                    Surname = model.Surname,
                    Login = model.Login,
                };
                var userResult = await _userMgr.CreateAsync(user, model.Password);
//                var roleResult = await _userMgr.AddToRoleAsync(user, "Admin");
//                var claimResult = await _userMgr.AddClaimAsync(user, new Claim("SuperUser", "True"));

                //                if (!userResult.Succeeded || !roleResult.Succeeded || !claimResult.Succeeded)
                //                {
                //                    throw new InvalidOperationException("Failed to build user and roles");
                //                }
                UserStatus status = new UserStatus()
                {
                    Pesel = model.Pesel,
                    Message = "Spoko",
                    Status = "ok"

                };
                return status;

            }
            UserStatus badstatus = new UserStatus()
            {
                Pesel = model.Pesel,
                Message = "Spoko",
                Status = "Bad"
            };
            return badstatus;
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
