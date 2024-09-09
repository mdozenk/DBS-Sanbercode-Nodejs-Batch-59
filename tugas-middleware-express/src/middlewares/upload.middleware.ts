import multer from "multer";
import { Request, Response, NextFunction } from "express";
import { handleUpload } from "../utils/cloudinary";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5, 
  },
});

export const single = upload.single("file");
export const multiple = upload.array("files", 10);

export const uploadToCloudinary = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const files = req.files as Express.Multer.File[];
    const cloudinaryUrls: string[] = [];

    if (Array.isArray(files)) {
      for (const file of files) {
        const result: any = await handleUpload(file.buffer.toString("base64"));
        cloudinaryUrls.push(result.secure_url);
      }
    } else if (req.file) {
      const result: any = await handleUpload(req.file.buffer.toString("base64"));
      cloudinaryUrls.push(result.secure_url);
    }

    req.body.cloudinaryUrls = cloudinaryUrls;
    next();
  } catch (error) {
    return res.status(500).json({ message: "File upload failed", error });
  }
};

export default {
  single,
  multiple,
  uploadToCloudinary,
};
