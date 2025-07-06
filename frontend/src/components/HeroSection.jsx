import { ArrowBigDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex flex-col relative min-h-screen items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 ">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in duration-300">
              Hi, I'm
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 duration-300">
              {" "}
              Ishaan
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2 duration-300">
              {" "}
              Syal
            </span>
          </h1>
          <p className="text-lg md-text-xl animate-fade-in-delay-3 text-muted-foreground mx-auto max-w-2xl opacity-0 duration-300">
            I’m passionate about creating websites that are not just
            good-looking but also easy to use and built to help people and
            businesses shine online.
          </p>
          <div className="opacity-0 animate-fade-in-delay-4 duration-300 pt-4">
            <a
              href="#projects"
              className="cosmic-button animate-fade-in-delay-4 duration-300"
            >
              View my projects
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span> Scroll</span>
        <ArrowBigDown className="text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
