using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using TransportApp.Models;
using TransportApp.Services;

namespace TransportApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(o => o.AddPolicy("AllowSpecificOrigin", builder =>
            {
                builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            }));
            services.AddMvc();
            var connectionString = Configuration["ConnectionStrings:DefaultConnection"];

            services.AddDbContext<TransportAppContext>(o => o.UseSqlServer(connectionString));
            services.AddTransient<ICarService, CarService>();
            services.AddTransient<IUserService, UserService>();
            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<TransportAppContext>()
                .AddDefaultTokenProviders();
//            services.AddAuthentication()
//                .AddCookie(cfg => cfg.SlidingExpiration = true);
            services.AddAuthentication()
                .AddJwtBearer(cfg =>
                {
                    cfg.RequireHttpsMetadata = false;
                    cfg.SaveToken = true;

                    cfg.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidIssuer = "http://localhost:54117",
                        ValidAudience = "http://localhost:54117",
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("TUBEDZIEJAKISDLUGIKLUCZNIEWIEMPOCO"))
                    };

                });
            //            services.AddIdentity<User, IdentityRole>().AddEntityFrameworkStores<TransportAppContext>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("AllowSpecificOrigin");
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
