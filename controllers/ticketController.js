exports.generateAndDownloadTicket = async (req, res) => {
    try {
        console.log("Generating ticket..."); // Debugging
        // Your ticket generation logic here
    } catch (error) {
        console.error("Error in generateAndDownloadTicket:", error);
        res.status(500).json({ error: "Server error" });
    }
};
