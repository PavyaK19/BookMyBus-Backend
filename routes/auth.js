const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST /api/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Compare plain text password (NOT secure, but as per your request)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Login successful, return user info (omit password)
    res.json({
      message: "Login successful",
      user: {
        email: user.email,
        role: user.role,
        name: user.name,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;