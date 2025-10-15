const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = 8081;

// MongoDB Connection
// const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://AkhilaP:Akhila1316@cluster0.mvva0vw.mongodb.net/RestaurantApp?retryWrites=true&w=majority";

const db =
  "mongodb://localhost:27017/FoodAppDB?retryWrites=true&w=majority"

// const db = "mongodb+srv://pakhila544:y29zHKEVWeY1nncj@cluster0.asrht2p.mongodb.net/RestaurantApp?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(db)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/menu", require("./routes/menuRoutes"));
