const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const bookingRoutes = require("./routes/bookings");
const bookingHistoryRoutes = require("./routes/bookingHistory");
const authRoutes = require("./routes/auth");
const busRoutes = require("./routes/buss"); // new bus routes import
const passengerRoutes = require("./routes/passengerRoute");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/booking-history", bookingHistoryRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/buses", busRoutes); // new bus routes usage
app.use("/api/passenger", passengerRoutes);
// Environment variables and defaults
const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://Pavya:pavi@cluster0.jfvkx.mongodb.net/BookMyBusDB?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
