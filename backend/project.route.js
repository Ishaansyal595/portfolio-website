// routes/projectRoutes.js
import express from "express";
import multer from "multer";
import {
  addProjectImages,
  addProjects,
  getProject,
  getProjectDetails,
  updateProjectData,
} from "./addProjects.controller.js";
import { storage } from "./cloudinary.js"; // ✅ import custom cloudinary storage

const projectRouter = express.Router();

// ✅ Multer uses Cloudinary now
const upload = multer({ storage });

projectRouter.post("/add-project", upload.array("images", 10), addProjects);
projectRouter.get("/get-project", getProject);
projectRouter.get("/project/:id", getProjectDetails);
projectRouter.put("/project/:id", updateProjectData);
projectRouter.patch(
  "/project/:id/add-images",
  upload.array("images", 5),
  addProjectImages
);

export default projectRouter;
