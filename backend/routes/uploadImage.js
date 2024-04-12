const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const cloudinary = require("../cloudinary");
const multer = require("multer");
const upload = multer();
const fs = require("fs");

router.put("/edit-profile", upload.single("image"), async (req, res) => {
  const { buffer } = req.file;
  try {
    const tempFilePath = `/tmp/${req.file.originalname}`;

    fs.writeFileSync(tempFilePath, buffer);

    const cloudinaryUpload = await cloudinary.uploader.upload(tempFilePath, {
      folder: "profile",
      width: 300,
      crop: "scale",
    });

    // Delete the temporary file
    fs.unlinkSync(tempFilePath);

    const response = await userModel.findByIdAndUpdate(
      req.user.id,
      {
        imageName: cloudinaryUpload.public_id,
        imagePath: cloudinaryUpload.secure_url,
      },
      { new: true }
    );

    return res
      .status(200)
      .json({ success: "Profile picture updated", response });
  } catch (error) {
    console.error("Error saving image to MongoDB:", error.message);
    return res.status(500).json({ error: "Error saving image" });
  }
});

module.exports = router;