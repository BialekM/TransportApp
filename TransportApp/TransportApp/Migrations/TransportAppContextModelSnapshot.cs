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
                    b.Property<string>("RegistrationNumber")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CarReviewDate");

                    b.Property<string>("Factory");

                    b.Property<string>("Insurer");

                    b.Property<string>("Model");

                    b.Property<DateTime>("OcEndDate");

                    b.Property<string>("Owner");

                    b.Property<int>("Power");

                    b.Property<int?>("TachografId");

                    b.Property<string>("TypeOfCar");

                    b.Property<int?>("UdtElevatorId");

                    b.Property<int>("YearOfProduction");

                    b.Property<string>("vinNumber");

                    b.HasKey("RegistrationNumber");

                    b.HasIndex("TachografId");

                    b.HasIndex("UdtElevatorId");

                    b.ToTable("Cars");
                });

            modelBuilder.Entity("TransportApp.Models.Fault", b =>
                {
                    b.Property<int>("FaultId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CarRegistrationNumber");

                    b.Property<bool>("ConfirmDone");

                    b.Property<string>("FaultInformation");

                    b.Property<bool>("MechanicDone");

                    b.Property<int>("Priority");

                    b.HasKey("FaultId");

                    b.HasIndex("CarRegistrationNumber");

                    b.ToTable("Faults");
                });

            modelBuilder.Entity("TransportApp.Models.Fuel", b =>
                {
                    b.Property<int>("FuelId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateOfFuel");

                    b.Property<double>("NumberOfLitres");

                    b.Property<double>("Price");

                    b.Property<double?>("UserPesel");

                    b.HasKey("FuelId");

                    b.HasIndex("UserPesel");

                    b.ToTable("Fuels");
                });

            modelBuilder.Entity("TransportApp.Models.Survey", b =>
                {
                    b.Property<int>("SurveyId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("ReviewFrom");

                    b.Property<DateTime>("ReviewWhen");

                    b.Property<string>("SurveyDescription");

                    b.Property<double?>("UserPesel");

                    b.HasKey("SurveyId");

                    b.HasIndex("UserPesel");

                    b.ToTable("Surveys");
                });

            modelBuilder.Entity("TransportApp.Models.Tachograf", b =>
                {
                    b.Property<int>("TachografId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("ReviewFrom");

                    b.Property<DateTime>("ReviewWhen");

                    b.HasKey("TachografId");

                    b.ToTable("Tachografs");
                });

            modelBuilder.Entity("TransportApp.Models.UdtElevator", b =>
                {
                    b.Property<int>("UdtElevatorId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("ReviewFrom");

                    b.Property<DateTime>("ReviewWhen");

                    b.HasKey("UdtElevatorId");

                    b.ToTable("UdtElevators");
                });

            modelBuilder.Entity("TransportApp.Models.User", b =>
                {
                    b.Property<double>("Pesel");

                    b.Property<string>("Login");

                    b.Property<string>("Password");

                    b.Property<string>("UserName");

                    b.Property<int>("UserType");

                    b.HasKey("Pesel");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("TransportApp.Models.Car", b =>
                {
                    b.HasOne("TransportApp.Models.Tachograf", "Tachograf")
                        .WithMany()
                        .HasForeignKey("TachografId");

                    b.HasOne("TransportApp.Models.UdtElevator", "UdtElevator")
                        .WithMany()
                        .HasForeignKey("UdtElevatorId");
                });

            modelBuilder.Entity("TransportApp.Models.Fault", b =>
                {
                    b.HasOne("TransportApp.Models.Car")
                        .WithMany("FaultList")
                        .HasForeignKey("CarRegistrationNumber");
                });

            modelBuilder.Entity("TransportApp.Models.Fuel", b =>
                {
                    b.HasOne("TransportApp.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserPesel");
                });

            modelBuilder.Entity("TransportApp.Models.Survey", b =>
                {
                    b.HasOne("TransportApp.Models.User")
                        .WithMany("ListofSurvey")
                        .HasForeignKey("UserPesel");
                });
#pragma warning restore 612, 618
        }
    }
}
