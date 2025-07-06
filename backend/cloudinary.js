import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// 1. Configure your cloudinary credentials
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 2. Storage engine for multer
export const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: "portfolio_projects", // 📁 folder in your Cloudinary dashboard
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

export default cloudinary.v2;
