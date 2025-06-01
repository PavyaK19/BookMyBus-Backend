const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  busName: { type: String, required: true },
  fromLocation: { type: String, required: true },
  toLocation: { type: String, required: true },
  travelDate: { type: String, required: true },
  departureTime: { type: String, required: true },
  arrivalTime: { type: String, required: true },
  selectedSeats: { type: [String], required: true },
  totalPrice: { type: Number, required: true },
  email: { type: String, required: true },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
