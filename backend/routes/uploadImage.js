const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const userModel = require("../models/userModel");

const storage = multer.diskStorage({
    destination: "../frontend/public/uploads",


  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.put("/edit-profile", upload.single("imagee"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file provided" });
    }

    const previousImage = await userModel.findById(req.user.id, "imagePath");
    const imagePath = req.file.path;
    const response = await userModel.findByIdAndUpdate(
      req.user.id,
      {
        imageName: Date.now() + "-" + req.file.originalname,
        imagePath: imagePath,
      },
      { new: true }
    );

    // Delete the previous image file
    if (previousImage && previousImage.imagePath) {
      fs.unlink(previousImage.imagePath, (err) => {
        if (err) {
          console.error("Error deleting previous image:", err);
        }
      });
    }

    return res.status(200).json({ success: 'profile picture updated',response });
  } catch (error) {
    console.error("Error saving image to MongoDB:", error);
    return res.status(500).json({ error: "Error saving image" });
  }
});

module.exports = router;