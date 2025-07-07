import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `https://food-delivery-app-qczs.onrender.com/portfolio/project/${id}`
        );
        const data = await res.json();

        if (data.success) {
          setProject(data.project);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching project:", err);
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-medium">Loading...</div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-20 text-red-600">Project not found</div>
    );
  }

  return (
    <div className="mx-auto px-10 py-10">
      <Link
        to="/"
        className="flex items-center text-blue-600 hover:underline mb-6"
      >
        <ArrowLeft className="mr-2" size={18} />
        Back to Projects
      </Link>

      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-muted-foreground text-lg mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-16">
        {project.images.map((img, i) => {
          console.log("project detail images", img);
          return (
            <img
              key={i}
              src={img}
              alt={`Project Screenshot ${i + 1}`}
              onClick={() => setSelectedImage(img)}
              className=" h-34 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
          );
        })}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)} // click to close
          >
            <img
              src={selectedImage}
              alt="Full preview"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
            />
          </div>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
        <ul className="list-inside space-y-1 list-decimal flex items-center justify-center gap-3">
          {project.features.map((f, i) => (
            <li
              key={i}
              className="bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full shadow-sm"
            >
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
        <div className="flex flex-wrap justify-center items-center gap-2">
          {project.technology.map((tech, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
