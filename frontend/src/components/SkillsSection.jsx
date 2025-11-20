import React, { useState } from "react";
import utils from "./../lib/utils";

const skills = [
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Next js", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "WordPress", category: "frontend" },
  { name: "Elementor & OceanWP", category: "frontend" },
  { name: "WooCommerce", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "Postgresql", category: "database" },
  // { name: "Git & GitHub" },
  // { name: "Figma", level: 50 },
  // { name: "Prompt Engineering", level: 70 },
  // { name: "ChatGPT & OpenAI API", level: 70 },
  // { name: "SEO (WordPress Plugins)", level: 65, category: "" },
];

const SkillsSection = () => {
  const [activeCategories, setActiveCategories] = useState("all");
  const categories = ["all", "frontend", "backend", "database"];
  const filteredSkills = skills.filter(
    (skill) => activeCategories === "all" || skill.category === activeCategories
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategories(category)}
              className={utils(
                "px-5 py-2 rounded-full transition-colors capitalize duration-300",
                activeCategories === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              {/* <div className="w-full rounded-full bg-secondary/50 h-2 overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />{" "}
              </div> */}
              {/* <div className="text-right">
                <span className="text-sm text-muted-foreground">
                  {skill.level + "%"}
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
