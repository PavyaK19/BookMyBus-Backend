const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const authenticate = require("../middleware/authenticate"); // Middleware for authentication

// ✅ Apply authentication middleware
router.get("/history", authenticate, async (req, res) => {
  try {
    const userId = req.user.id;
    const bookings = await Booking.find({ userId });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
