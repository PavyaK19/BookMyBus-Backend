const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");

const createTestUser = async () => {
  const password = await bcrypt.hash("pavi", 10); // Hash the password before saving

  const user = new User({
    email: "717823p139@kce.ac.in",
    password,
  });

  await user.save();
  console.log("✅ Test user created!");
};

mongoose
  .connect("mongodb+srv://Pavya:pavi@cluster0.jfvkx.mongodb.net/bookmybus")
  .then(() => {
    console.log("✅ MongoDB Connected");
    createTestUser();
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
