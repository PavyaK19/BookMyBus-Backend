const express = require("express");
const router = express.Router();
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

// 🎟️ Route to generate and download ticket
router.get("/download-ticket", (req, res) => {
    try {
        // ✅ Hardcoded ticket details (replace with actual booking details)
        const ticketDetails = {
            busName: "ABC Travels",
            date: "12-03-2025",
            seats: ["A1", "A2"],
            passenger: "John Doe",
            email: "johndoe@example.com",
            from: "City A",
            to: "City B",
        };

        // 📄 Set file name & path
        const fileName = `ticket-${Date.now()}.pdf`;
        const filePath = path.join(__dirname, "../tickets", fileName);

        // 📌 Create a PDF document
        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream(filePath)); // Save file

        // 🎟️ Ticket Header
        doc.fontSize(20).text("🎫 Your Ticket", { align: "center" }).moveDown();
        doc.fontSize(16).text(`🚌 Bus: ${ticketDetails.busName}`);
        doc.text(`📅 Date: ${ticketDetails.date}`);
        doc.text(`📍 From: ${ticketDetails.from} → To: ${ticketDetails.to}`);
        doc.text(`💺 Seats: ${ticketDetails.seats.join(", ")}`);
        doc.text(`👤 Passenger: ${ticketDetails.passenger}`);
        doc.text(`📧 Email: ${ticketDetails.email}`);

        doc.end(); // ✅ Finish PDF

        // 🖥️ Send the file for download
        doc.pipe(res);
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
        
    } catch (error) {
        console.error("Error generating ticket:", error);
        res.status(500).json({ message: "Error generating ticket" });
    }
});

module.exports = router;
