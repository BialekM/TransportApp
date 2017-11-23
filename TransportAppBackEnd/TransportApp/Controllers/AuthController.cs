using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
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

        public AuthController(TransportAppContext context,
            SignInManager<User> signInMgr,
            UserManager<User> userManager,
            ILogger<AuthController> logger,
            IPasswordHasher<User> hasher)
        {
            _context = context;
            _signInMgr = signInMgr;
            _logger = logger;
            _userMgr = userManager;
            _hasher = hasher;
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
                        var claims = new[]
                        {
                            new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                            new Claim(JwtRegisteredClaimNames.Acr, user.UserType.ToString()),
                            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                        };

                        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("TOJESTJAKISDZIWNYDLUGIKLUCZ"));
                        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                        var token = new JwtSecurityToken(
                            issuer: "http://localhost:4200",
                            audience: "http://localhost:4200",
                            claims: claims,
                            expires: DateTime.UtcNow.AddMinutes(10),
                            signingCredentials: creds
                            );
                        return Ok(new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(token),
                            expiration = token.ValidTo
                        });
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError("Exception thrown while creating JWT: {ex}");
            }
            return BadRequest("Failed to generate token");
        }
    }
}