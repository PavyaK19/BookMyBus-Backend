const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  name: String,
  from: String,
  to: String,
  time: String,
});

const Bus = mongoose.model("Bus", busSchema);

// Add new bus
router.post("/", async (req, res) => {
  try {
    const { name, from, to, time } = req.body;
    const newBus = new Bus({ name, from, to, time });
    const savedBus = await newBus.save();
    res.status(201).json(savedBus);
  } catch (err) {
    console.error("Error saving bus:", err);
    res.status(500).json({ message: "Could not save bus" });
  }
});

// Get all buses
router.get("/", async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (err) {
    console.error("Error fetching buses:", err);
    res.status(500).json({ message: "Could not fetch buses" });
  }
});

module.exports = router;
