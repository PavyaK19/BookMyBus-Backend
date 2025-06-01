const express = require("express");
const { generateAndDownloadTicket } = require("../controllers/ticketController");

const router = express.Router();

router.post("/generate-download-ticket", generateAndDownloadTicket);

module.exports = router;
