import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://portfolio-website-u1hq.onrender.com/portfolio/get-project"
        );
        const data = await res.json();
        if (data.success) {
          setProjects(data.projects);
        } else {
          console.error("Error:", data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProjects();
  }, []);

  console.log(projects);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-width-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each project was carefully made with
          attention to details, performance, and user experience.
        </p>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            Array.isArray(projects) && projects.length > 2
              ? "lg:grid-cols-3"
              : "lg:grid-cols-2"
          } gap-6`}
        >
          {projects.map((project) => {
            const imagePath = encodeURI(project.images[0].replace(/\\/g, "/"));
            const fullUrl = `https://portfolio-website-u1hq.onrender.com/${imagePath}`;

            return (
              <div
                key={project._id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                {/* 🟢 Internal navigation handled by a button/div */}
                <div
                  onClick={() => navigate(`/project/${project._id}`)}
                  className="cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={fullUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description.slice(0, 100)}...
                    </p>
                  </div>
                </div>

                {/* 🔗 External links — outside the internal navigation area
              <div className="px-6 pb-6 flex justify-between space-x-3">
                <a
                  href={project.github}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                </a>
                <a
                  href={project.live}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink />
                </a>
              </div> */}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Ishaansyal595"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            rel="noreferrer"
          >
            Check My Github <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
