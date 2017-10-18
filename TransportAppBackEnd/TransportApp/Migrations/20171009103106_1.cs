﻿using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TransportApp.Migrations
{
    public partial class _1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tachografs",
                columns: table => new
                {
                    TachografId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ReviewFrom = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ReviewWhen = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tachografs", x => x.TachografId);
                });

            migrationBuilder.CreateTable(
                name: "UdtElevators",
                columns: table => new
                {
                    UdtElevatorId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ReviewFrom = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ReviewWhen = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UdtElevators", x => x.UdtElevatorId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Pesel = table.Column<double>(type: "float", nullable: false),
                    Login = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserType = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Pesel);
                });

            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    RegistrationNumber = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CarReviewDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Factory = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Insurer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Model = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OcEndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Owner = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Power = table.Column<int>(type: "int", nullable: false),
                    TachografId = table.Column<int>(type: "int", nullable: true),
                    TypeOfCar = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UdtElevatorId = table.Column<int>(type: "int", nullable: true),
                    YearOfProduction = table.Column<int>(type: "int", nullable: false),
                    vinNumber = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.RegistrationNumber);
                    table.ForeignKey(
                        name: "FK_Cars_Tachografs_TachografId",
                        column: x => x.TachografId,
                        principalTable: "Tachografs",
                        principalColumn: "TachografId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Cars_UdtElevators_UdtElevatorId",
                        column: x => x.UdtElevatorId,
                        principalTable: "UdtElevators",
                        principalColumn: "UdtElevatorId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Fuels",
                columns: table => new
                {
                    FuelId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DateOfFuel = table.Column<DateTime>(type: "datetime2", nullable: false),
                    NumberOfLitres = table.Column<double>(type: "float", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    UserPesel = table.Column<double>(type: "float", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fuels", x => x.FuelId);
                    table.ForeignKey(
                        name: "FK_Fuels_Users_UserPesel",
                        column: x => x.UserPesel,
                        principalTable: "Users",
                        principalColumn: "Pesel",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Surveys",
                columns: table => new
                {
                    SurveyId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ReviewFrom = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ReviewWhen = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SurveyDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserPesel = table.Column<double>(type: "float", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Surveys", x => x.SurveyId);
                    table.ForeignKey(
                        name: "FK_Surveys_Users_UserPesel",
                        column: x => x.UserPesel,
                        principalTable: "Users",
                        principalColumn: "Pesel",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Faults",
                columns: table => new
                {
                    FaultId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CarRegistrationNumber = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    ConfirmDone = table.Column<bool>(type: "bit", nullable: false),
                    FaultInformation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MechanicDone = table.Column<bool>(type: "bit", nullable: false),
                    Priority = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Faults", x => x.FaultId);
                    table.ForeignKey(
                        name: "FK_Faults_Cars_CarRegistrationNumber",
                        column: x => x.CarRegistrationNumber,
                        principalTable: "Cars",
                        principalColumn: "RegistrationNumber",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cars_TachografId",
                table: "Cars",
                column: "TachografId");

            migrationBuilder.CreateIndex(
                name: "IX_Cars_UdtElevatorId",
                table: "Cars",
                column: "UdtElevatorId");

            migrationBuilder.CreateIndex(
                name: "IX_Faults_CarRegistrationNumber",
                table: "Faults",
                column: "CarRegistrationNumber");

            migrationBuilder.CreateIndex(
                name: "IX_Fuels_UserPesel",
                table: "Fuels",
                column: "UserPesel");

            migrationBuilder.CreateIndex(
                name: "IX_Surveys_UserPesel",
                table: "Surveys",
                column: "UserPesel");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Faults");

            migrationBuilder.DropTable(
                name: "Fuels");

            migrationBuilder.DropTable(
                name: "Surveys");

            migrationBuilder.DropTable(
                name: "Cars");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Tachografs");

            migrationBuilder.DropTable(
                name: "UdtElevators");
        }
    }
}