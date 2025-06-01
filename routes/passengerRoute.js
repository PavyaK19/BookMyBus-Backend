const express = require("express");
const router = express.Router();
const Passenger = require("../models/Passenger");
const bcrypt = require("bcryptjs");

// Register
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existing = await Passenger.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists" });

    const newPassenger = new Passenger({ email, password });
    await newPassenger.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Passenger.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful", email: user.email });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
