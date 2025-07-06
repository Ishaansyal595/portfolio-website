import Project from "./project.schema.js";

export const addProjects = async (req, res) => {
  try {
    console.log("🔥 Controller hit");

    const { title, description, features, technology, github, live } = req.body;
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    const imagePaths = req.files.map((file) => file.path);

    if (
      !title ||
      !description ||
      !features ||
      !technology ||
      !github ||
      !live ||
      imagePaths.length === 0
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required!" });
    }

    // Try parsing safely
    let parsedFeatures = [];
    let parsedTechnology = [];

    try {
      parsedFeatures =
        typeof features === "string" ? JSON.parse(features) : features;
      parsedTechnology =
        typeof technology === "string" ? JSON.parse(technology) : technology;
    } catch (parseError) {
      console.error("❌ JSON parse error:", parseError.message);
      return res.status(400).json({
        success: false,
        message: "Invalid features or technology format",
      });
    }

    const newProject = new Project({
      title,
      description,
      features: parsedFeatures,
      technology: parsedTechnology,
      github,
      live,
      images: imagePaths,
    });

    const saved = await newProject.save();
    console.log("✅ Saved project:", saved);

    res.status(200).json({
      success: true,
      message: "Project added successfully",
      project: saved,
    });
  } catch (error) {
    console.error("🔥 Server Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

export const getProject = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 }); // latest first

    res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      projects,
    });
  } catch (error) {
    console.error("🔥 Error fetching projects:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

export const getProjectDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project fetched successfully",
      project,
    });
  } catch (error) {
    console.error("🔥 Error fetching project details:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

export const addProjectImages = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if project exists
    const project = await Project.findById(id);

    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }

    // Extract uploaded file paths
    const newImages = req.files.map((file) => file.path);

    // Merge new images with existing ones
    project.images.push(...newImages);

    await project.save();

    res.status(200).json({
      success: true,
      message: "Images added successfully",
      project,
    });
  } catch (error) {
    console.error("❌ Error adding images:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const updateProjectData = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      project: updated,
    });
  } catch (error) {
    console.error("❌ Error updating project:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
