const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  res.send("Shalini Tattoos Backend is Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
