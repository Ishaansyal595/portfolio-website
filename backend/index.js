import express from "express";
import { connectDB } from "./connectDb.js";
import projectRouter from "./project.route.js";
import cors from "cors";

const app = express();

dotenv.config()

app.use(express.json());

connectDB();

const port = process.env.PORT

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/uploads", express.static("uploads")); // Serve static images

app.use("/portfolio", projectRouter);

app.listen(port, () => {
  console.log("server is running on 3000");
});
