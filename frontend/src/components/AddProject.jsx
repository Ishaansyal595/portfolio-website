import React, { useState } from "react";
import "./AddProjectForm.css";
import { useNavigate } from "react-router-dom";

const AddProjectForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    features: "",
    technology: "",
    images: [],
  });

  const handleChange = (e) => {
    if (e.target.name === "images") {
      setFormData({ ...formData, images: e.target.files });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("features", JSON.stringify(formData.features.split(",")));
    data.append("technology", JSON.stringify(formData.technology.split(",")));

    for (let i = 0; i < formData.images.length; i++) {
      data.append("images", formData.images[i]); // "images" matches Multer field
    }

    console.log(formData);
    try {
      const res = await fetch("http://localhost:3000/portfolio/add-project", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        alert("✅ Project added successfully!");
      } else {
        alert(result.message || "❌ Failed to add project");
      }

      return navigate("/");
    } catch (err) {
      console.error("❌ Error while submitting:", err);
      alert("❌ Something went wrong: " + err.message);
    }
  };

  return (
    <div className="project-form-container">
      <h2>Add New Project</h2>
      <form
        onSubmit={handleSubmit}
        className="project-form"
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="features"
          placeholder='Features (e.g., "Login,Signup,Chat")'
          value={formData.features}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="technology"
          placeholder='Technologies (e.g., "React,Node,MongoDB")'
          value={formData.technology}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          name="images"
          multiple
          accept="image/*"
          onChange={handleChange}
          required
        />

        <button type="submit">🚀 Submit Project</button>
      </form>
    </div>
  );
};

export default AddProjectForm;
