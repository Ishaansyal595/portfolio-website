import { ArrowBigUp, ArrowUp } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border mt-12 flex flex-wrap justify-between">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Ishaan Syal
      </p>
      <a
        href="#hero"
        className="rounded-full hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowBigUp />
      </a>
    </footer>
  );
};

export default Footer;
