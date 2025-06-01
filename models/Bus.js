const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  name: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  time: { type: String, required: true },
  // Remove busNumber if unused or make it optional
  busNumber: { type: String, default: null } // ✅ Optional and not unique
});

module.exports = mongoose.model("Bus", busSchema);
