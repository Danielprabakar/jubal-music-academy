import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/jma-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
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
          <button
            onClick={() => handleScroll("home")}
            className="hover:text-[#F5C451] transition-colors"
          >
            Home
          </button>

          <button
            onClick={() => handleScroll("about")}
            className="hover:text-[#F5C451] transition-colors"
          >
            About
          </button>

          {/* Homepage Programs Section */}
          <button
            onClick={() => handleScroll("programs")}
            className="hover:text-[#F5C451] transition-colors"
          >
            Programs
          </button>

          {/* Academy Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProgramsOpen(true)}
            onMouseLeave={() => setProgramsOpen(false)}
          >
            <button className="flex items-center gap-2 hover:text-[#F5C451] transition-colors">
              Worship Training
              <span
                className={`text-[10px] transition-transform duration-300 ${programsOpen ? "rotate-180" : ""
                  }`}
              >
                ▼
              </span>
            </button>

            {programsOpen && (
              <div
                className="absolute top-full left-0 pt-2 w-80"
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "#111827",
                    border: "1px solid rgba(245,196,81,.15)",
                    boxShadow: "0 20px 50px rgba(0,0,0,.45)",
                  }}
                >
                  <button
                    onClick={() => {
                      setProgramsOpen(false);
                      navigate("/programs/worship-keys-challenge");
                    }}
                    className="w-full text-left px-6 py-5 hover:bg-[#1A2233] transition"
                  >
                    <div className="font-semibold text-white">
                      🎹 Worship Keys Challenge
                    </div>

                    <div className="text-xs text-gray-400 mt-1">
                      Play your first worship song in just 3 days
                    </div>
                  </button>

                  <div className="border-t border-gray-800" />

                  <button
                    onClick={() => {
                      setProgramsOpen(false);
                      navigate("/programs/worship-keys");
                    }}
                    className="w-full text-left px-6 py-5 hover:bg-[#1A2233] transition"
                  >
                    <div className="font-semibold text-white">
                      🎼 Worship Keys Foundation
                    </div>

                    <div className="text-xs text-gray-400 mt-1">
                      Our signature 9-month worship keyboard program
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleScroll("free-demo")}
            className="bg-gold text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
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
          <div className="space-y-2">

            <button
              onClick={() => {
                setOpen(false);
                navigate("/programs/worship-keys-challenge");
              }}
              className="block w-full text-left"
            >
              🎹 Worship Keys Challenge
            </button>

            <button
              onClick={() => {
                setOpen(false);
                navigate("/programs/worship-keys");
              }}
              className="block w-full text-left"
            >
              🎼 Worship Keys Foundation
            </button>

          </div>
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
