const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://Pavya:pavi@cluster0.jfvkx.mongodb.net/BookMyBusDB?retryWrites=true&w=majority";

// Connect to MongoDB (without deprecated options)
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));
