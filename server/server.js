// server/server.js
const nodemailer = require("nodemailer");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");
dotenv.config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use("/uploads", express.static("uploads")); // Add this line

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// MongoDB connection
mongoose.connect(
  "mongodb+srv://vivekGarg:7gvRw5G5WTfSz0N3@connectingtest.xvvf0hw.mongodb.net/",
  {
    // Change 'mydatabase' to your database name
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
app.use("/email", emailRoutes);

// Routes
const myRoutes = require("./routes/myRoutes");
app.use("/api", myRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
