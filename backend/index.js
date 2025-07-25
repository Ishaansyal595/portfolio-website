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
    origin: [
      "https://portfolio-website-orcin-psi-12.vercel.app",
      "http://localhost:3000"
    ],
    methods: ["GET", "POST"],
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
