import React, { useEffect, useState } from "react";

const EditProject = ({ projectId }) => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    github: "",
    live: "",
  });

  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [updating, setUpdating] = useState(false);

  // Fetch project details on load
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`https://portfolio-website-u1hq.onrender.com/${projectId}`);
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error("Failed to fetch project", err);
      }
    };
    fetchProject();
  }, [projectId]);

  const handleInputChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleDataSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    try {
      const res = await fetch(`https://portfolio-website-u1hq.onrender.com//pportfolio/project/${projectId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });
      const data = await res.json();
      if (data.success) {
        alert("✅ Project updated successfully!");
      } else {
        alert("❌ Failed to update project");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error updating project");
    }
    setUpdating(false);
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();

    if (!images.length) {
      alert("Please select images");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    setUploading(true);
    try {
      const res = await fetch(
        `https://portfolio-website-u1hq.onrender.com/portfolio/project/${projectId}/add-images`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("✅ Images uploaded successfully!");
        setImages([]);
      } else {
        alert("❌ Failed to upload images");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Upload failed");
    }
    setUploading(false);
  };

  return (
    <div className="p-6 rounded-xl border border-gray-300 shadow-md">
      <h2 className="text-2xl font-bold mb-4">🛠️ Edit Project</h2>

      {/* Edit Project Info */}
      <form onSubmit={handleDataSubmit} className="mb-6">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={project.title}
          onChange={handleInputChange}
          className="block w-full mb-3 border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={project.description}
          onChange={handleInputChange}
          className="block w-full mb-3 border p-2 rounded"
        />
        <input
          type="text"
          name="github"
          placeholder="GitHub URL"
          value={project.github}
          onChange={handleInputChange}
          className="block w-full mb-3 border p-2 rounded"
        />
        <input
          type="text"
          name="live"
          placeholder="Live URL"
          value={project.live}
          onChange={handleInputChange}
          className="block w-full mb-3 border p-2 rounded"
        />

        <button
          type="submit"
          disabled={updating}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
        >
          {updating ? "Updating..." : "Update Project"}
        </button>
      </form>

      {/* Upload Images */}
      <form onSubmit={handleImageSubmit} encType="multipart/form-data">
        <h3 className="text-xl font-semibold mb-2">📸 Add More Images</h3>
        <input
          type="file"
          name="images"
          multiple
          onChange={handleFileChange}
          accept="image/*"
          className="mb-3"
        />
        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          {uploading ? "Uploading..." : "Upload Images"}
        </button>
      </form>
    </div>
  );
};

export default EditProject;
