import { useEffect, useState } from "react";
import logo from "../assets/jma-logo.png";

export default function Navbar() {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "programs", label: "Programs" },
    { id: "worship-keys", label: "Worship Keys" },
  ];

  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollMiddle = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollMiddle >= top && scrollMiddle <= top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/70 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <img
          src={logo}
          alt="Jubal Music Academy"
          className="w-20 cursor-pointer"
          onClick={() => scrollToSection("home")}
        />

        {/* Menu */}
        <ul className="hidden md:flex gap-8">
          {sections.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer text-sm tracking-wide transition ${
                active === item.id
                  ? "text-gold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}
