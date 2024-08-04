// server/routes/myRoutes.js
const express = require("express");
const router = express.Router();
const Item = require("../models/Item"); // Change 'Item' and the path to your model
const multer = require("multer"); // Add this line
const upload = multer({ dest: "uploads/" }); // Add this line

router.post("/items", upload.single("image"), async (req, res) => {
  // Update this line
  const newItem = new Item({
    name: req.body.name,
    sellerName: req.body.sellerName,
    description: req.body.description,
    image: req.file ? req.file.path : null,
    price: req.body.price,
    keywords: req.body.keywords,
    phoneNumber: req.body.phoneNumber,
  });

  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add this route
router.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
