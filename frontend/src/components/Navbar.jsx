import React from 'react';

import { useEffect, useState } from "react";
import utils from "./../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={utils("fixed w-full z-40 transition-all duration-300 ")}>
      <div className="container flex items-center justify-between ml-0 py-5 backdrop-blur-md shadow-xs">
        <div
          className={`ml-0 flex items-center gap-5 ${
            isMenuOpen && "opacity-0 duration-500 ease-in-out  "
          }`}
        >
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu className="backdrop-blur-md shadow-xs" />
          </button>
          <a
            href="#hero"
            className="text-xl font-bold text-primary flex items-center"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Ishaan</span>{" "}
              Portfolio
            </span>
          </a>
        </div>
        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colorsduration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Mobile Navbar */}
      </div>
      <div
        className={utils(
          "fixed top-0 left-0 h-full w-3/4 max-w-xs bg-foreground/95 opacity-90 z-40 flex flex-col p-6 ",
          "transition-transform duration-500 ease-in-out",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col text-xl space-y-10 text-background">
          <button onClick={() => setIsMenuOpen(false)}>
            <X />
          </button>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-background/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
