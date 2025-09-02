import React, { useState } from "react";
import utils from "./../lib/utils";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={utils("fixed w-full z-40 transition-all duration-300")}>
      <div className="container flex items-center justify-between py-5 backdrop-blur-md shadow-xs">
        {/* Logo + mobile toggle */}
        <div className="flex items-center gap-5">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className={`md:hidden ${isMenuOpen ? "hidden" : "block"}`}
          >
            <Menu />
          </button>
          <a
            href="#hero"
            className={`text-xl font-bold text-primary flex items-center ${
              isMenuOpen ? "hidden" : "block"
            }`}
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Ishaan</span>{" "}
              Portfolio
            </span>
          </a>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-10 items-center">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`fixed inset-y-0 left-0 h-screen w-full sm:w-2/4 bg-gradient-to-br from-black/90 via-primary/80 to-black/80 backdrop-blur-md flex flex-col items-center justify-center space-y-8 z-50 text-white transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {" "}
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-5 right-5"
            >
              <X />
            </button>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-background hover:translate-y-2 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
