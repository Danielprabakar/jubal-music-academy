import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/jma-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <img
          src={logo}
          alt="Jubal Music Academy"
          className="w-28 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <button onClick={() => handleScroll("home")}>Home</button>
          <button onClick={() => handleScroll("about")}>About</button>
          <button onClick={() => handleScroll("programs")}>Programs</button>
          <button onClick={() => navigate("/programs/worship-keys")}>
            Worship Keys
          </button>
          <button
            onClick={() => handleScroll("free-demo")}
            className="bg-gold text-black px-4 py-2 font-medium"
          >
            Free Demo
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-4 text-gray-300">
          <button onClick={() => handleScroll("home")} className="block w-full text-left">
            Home
          </button>
          <button onClick={() => handleScroll("about")} className="block w-full text-left">
            About
          </button>
          <button onClick={() => handleScroll("programs")} className="block w-full text-left">
            Programs
          </button>
          <button
            onClick={() => {
              setOpen(false);
              navigate("/programs/worship-keys");
            }}
            className="block w-full text-left"
          >
            Worship Keys
          </button>
          <button
            onClick={() => handleScroll("free-demo")}
            className="block w-full bg-gold text-black px-4 py-2 font-medium"
          >
            Free Demo
          </button>
        </div>
      )}
    </nav>
  );
}
