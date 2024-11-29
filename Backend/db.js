const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};