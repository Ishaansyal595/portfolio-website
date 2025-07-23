import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutMeSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              Hi, I’m Ishaan — an aspiring full-stack web developer with
              hands-on experience from internships for a year. I enjoy building
              complete web solutions and aim to grow into a skilled developer
              creating impactful digital experiences.
            </p>
            <p className="text-muted-foreground">
              I’m always eager to learn new technologies and improve my skills,
              believing that continuous growth is essential for success in tech.
              I enjoy taking on challenges that help me grow both personally and
              professionally.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              {/* <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary transition-colors text-primary hover:bg-primary/10 duration-300"
              >
                Download CV
              </a> */}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive website & web applications with mordern
                    framework.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing user-friendly interfaces with a focus on
                    usability, accessibility, and engaging user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Project Management</h4>
                  <p className="text-muted-foreground">
                    Managing full website projects from planning to deployment,
                    ensuring timely delivery and quality results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
