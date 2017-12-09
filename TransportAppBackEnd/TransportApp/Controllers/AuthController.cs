using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Twitter;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using SQLitePCL;
using TransportApp.Models;

namespace TransportApp.Controllers
{
    public class AuthController : Controller
    {
        private TransportAppContext _context;
        private ILogger<AuthController> _logger;
        private SignInManager<User> _signInMgr;
        private UserManager<User> _userMgr;
        private IPasswordHasher<User> _hasher;
        private readonly IConfiguration _config;

        public AuthController(TransportAppContext context,
            SignInManager<User> signInMgr,
            UserManager<User> userManager,
            ILogger<AuthController> logger,
            IConfiguration config,
            IPasswordHasher<User> hasher)
        {
            _context = context;
            _signInMgr = signInMgr;
            _logger = logger;
            _userMgr = userManager;
            _hasher = hasher;
            _config = config;
        }
        
        [HttpPost("/auth/login")]
        public async Task<IActionResult> CreateToken([FromBody] LoginUser model)
        {
            try
            {
                var user = await _userMgr.FindByNameAsync(model.Login);
                if (user != null)
                {
                    if (_hasher.VerifyHashedPassword(user, user.PasswordHash, model.Password) ==
                        PasswordVerificationResult.Success)
                    {
                        var claims = new List<Claim>();
                        claims.Add(new Claim("roles", "Admin"));
                        claims.Add(new Claim("roles", "Manager"));
                        claims.Add(new Claim("UserName",user.UserName));
                        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("TUBEDZIEJAKISDLUGIKLUCZNIEWIEMPOCO"));
                        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                        var token = new JwtSecurityToken(
                            "http://localhost:54117",
                            "http://localhost:54117",
                            claims,
                            expires: DateTime.UtcNow.AddMinutes(10),
                            signingCredentials: creds
                            );
                        return Ok(new
                        {
                            
                            accestoken = new JwtSecurityTokenHandler().WriteToken(token),
                            message = "pomyslnie zalogowano",
                            operationStatus = "ok"
                        });
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
            }
            return Ok(new
            {
               
               accestoken = "",
               message = "Zly login lub haslo",
               operationStatus = "bad"
            });
        }
    }
}