const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const app = express();

// Database
const Database = require("./Database/db");
Database();

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "*", // Change this in production
    credentials: true,
  })
);

// Routes
const DoctorDetails = require("./Routes/Doctors");
const User = require("./Routes/Customer");
const Appointment = require("./Routes/Appointment");

app.use("/api", DoctorDetails);
app.use("/api", User);
app.use("/api", Appointment);

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running successfully 🚀",
  });
});

module.exports = app;