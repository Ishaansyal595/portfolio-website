import express from "express";
import { connectDB } from "./connectDb.js";
import projectRouter from "./project.route.js";
import cors from "cors";
import dotenv from "dotenv";
import MailRouter from "./sendMail.routes.js";

const app = express();

dotenv.config();

app.use(express.json());

connectDB();

const port = process.env.PORT;

app.use(
  cors({
    origin: "https://portfolio-website-nine-gray-74.vercel.app",
    credentials: true,
  })
);

app.use("/uploads", express.static("uploads")); // Serve static images

app.use("/portfolio", projectRouter);
app.use("/portfolio/mail", MailRouter);

app.get("/", (req, res) => {
  res.send("🚀 Portfolio API is live");
});
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
