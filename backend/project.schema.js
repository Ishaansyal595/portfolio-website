import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: [String], required: true },
  technology: { type: [String], required: true },
  images: { type: [String], required: true },
  github: { type: String }, // ✅ New field
  live: { type: String },
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
