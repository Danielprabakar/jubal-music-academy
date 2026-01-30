import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/jma-logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "programs", label: "Programs" },
  ];

  const [active, setActive] = useState("home");

  // Scroll spy ONLY on home page
  useEffect(() => {
    if (!isHome) return;

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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (id) => {
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
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
          onClick={() => navigate("/")}
        />

        {/* Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {sections.map((item) => (
            <li
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`cursor-pointer text-sm tracking-wide transition ${
                active === item.id && isHome
                  ? "text-gold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </li>
          ))}

          {/* Worship Keys – ROUTE */}
          <li
            onClick={() => navigate("/programs/worship-keys")}
            className={`cursor-pointer text-sm tracking-wide transition ${
              location.pathname === "/programs/worship-keys"
                ? "text-gold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Worship Keys
          </li>
        </ul>

      </div>
    </nav>
  );
}