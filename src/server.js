import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Multer setup (to handle file uploads)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Cloudinary setup
cloudinary.config({
  cloud_name: process.env.dox2mt2zs,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.Gx6MchGnwgWBj8rmn076WHQfKPg,
});

// Upload route
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload_stream(
      { folder: "products" },
      (error, uploaded) => {
        if (error) return res.status(500).json({ error });

        // This uploaded.url is your permanent image link
        res.json({ imageUrl: uploaded.secure_url });
      }
    );

    req.file.stream.pipe(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
