import express from "express";
import { single, multiple, uploadToCloudinary } from "../middlewares/upload.middleware";

const router = express.Router();

router.post("/upload/single", single, uploadToCloudinary, (req, res) => {
  res.json({
    message: "File uploaded successfully",
    urls: req.body.cloudinaryUrls,
  });
});

router.post("/upload/multiple", multiple, uploadToCloudinary, (req, res) => {
  res.json({
    message: "Files uploaded successfully",
    urls: req.body.cloudinaryUrls,
  });
});

export default router;
