﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;
using TransportApp.Models;

namespace TransportApp.Migrations
{
    [DbContext(typeof(TransportAppContext))]
    partial class TransportAppContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("TransportApp.Models.Car", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CarReviewDate");

                    b.Property<string>("Factory");

                    b.Property<string>("Insurer");

                    b.Property<string>("Model");

                    b.Property<DateTime>("OcEndDate");

                    b.Property<string>("Owner");

                    b.Property<int>("Power");

                    b.Property<string>("RegistrationNumber");

                    b.Property<DateTime?>("TachografReviewFrom");

                    b.Property<DateTime?>("TachografReviewWhen");

                    b.Property<string>("TypeOfCar");

                    b.Property<DateTime?>("UdtElevatorReviewWhen");

                    b.Property<DateTime?>("UdtElewatorReviewFrom");

                    b.Property<string>("VinNumber");

                    b.Property<int>("YearOfProduction");

                    b.HasKey("Id");

                    b.HasIndex("RegistrationNumber")
                        .IsUnique()
                        .HasFilter("[RegistrationNumber] IS NOT NULL");

                    b.HasIndex("VinNumber")
                        .IsUnique()
                        .HasFilter("[VinNumber] IS NOT NULL");

                    b.ToTable("Cars");
                });

            modelBuilder.Entity("TransportApp.Models.Fault", b =>
                {
                    b.Property<int>("FaultId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CarId");

                    b.Property<bool>("ConfirmDone");

                    b.Property<string>("FaultInformation");

                    b.Property<bool>("MechanicDone");

                    b.Property<int>("Priority");

                    b.HasKey("FaultId");

                    b.ToTable("Faults");
                });

            modelBuilder.Entity("TransportApp.Models.Fuel", b =>
                {
                    b.Property<int>("FuelId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CarId");

                    b.Property<DateTime>("DateOfFuel");

                    b.Property<double>("NumberOfLitres");

                    b.Property<double>("Price");

                    b.Property<int>("UserId");

                    b.HasKey("FuelId");

                    b.ToTable("Fuels");
                });

            modelBuilder.Entity("TransportApp.Models.Survey", b =>
                {
                    b.Property<int>("SurveyId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("ReviewFrom");

                    b.Property<DateTime>("ReviewWhen");

                    b.Property<string>("SurveyDescription");

                    b.Property<int?>("Userid");

                    b.HasKey("SurveyId");

                    b.HasIndex("Userid");

                    b.ToTable("Surveys");
                });

            modelBuilder.Entity("TransportApp.Models.User", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Login");

                    b.Property<string>("Password");

                    b.Property<double>("Pesel");

                    b.Property<string>("Surname");

                    b.Property<string>("UserName");

                    b.Property<int>("UserType");

                    b.HasKey("id");

                    b.HasIndex("Login")
                        .IsUnique()
                        .HasFilter("[Login] IS NOT NULL");

                    b.HasIndex("Pesel")
                        .IsUnique();

                    b.ToTable("Users");
                });

            modelBuilder.Entity("TransportApp.Models.Survey", b =>
                {
                    b.HasOne("TransportApp.Models.User")
                        .WithMany("ListofSurvey")
                        .HasForeignKey("Userid");
                });
#pragma warning restore 612, 618
        }
    }
}
