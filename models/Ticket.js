const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
    bus: { type: Object, required: true },
    fromLocation: { type: String, required: true },
    toLocation: { type: String, required: true },
    travelDate: { type: String, required: true },
    selectedSeats: { type: [String], required: true },
    totalPrice: { type: Number, required: true },
    pdfData: { type: Buffer, required: true }, // Stores the ticket PDF as binary data
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Ticket", TicketSchema);
