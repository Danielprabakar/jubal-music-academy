import { useEffect, useState } from "react";

const PHONE_NUMBER = "918667759837";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState(
    "Hi, I would like to enquire about music classes at Jubal Music Academy."
  );

  useEffect(() => {
    const handleScroll = () => {
      const demoSection = document.getElementById("free-demo");
      if (!demoSection) return;

      const rect = demoSection.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      setVisible(!inView);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for custom events to update message
  useEffect(() => {
    const handler = (e) => {
      if (e.detail?.message) {
        setMessage(e.detail.message);
      }
    };

    window.addEventListener("whatsapp-message", handler);
    return () => window.removeEventListener("whatsapp-message", handler);
  }, []);

  if (!visible) return null;

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        bg-green-500 text-white
        w-14 h-14 rounded-full
        flex items-center justify-center
        shadow-lg
        hover:scale-110 transition-transform
        group
      "
      aria-label="Chat with us on WhatsApp"
    >
      {/* Tooltip */}
      <span
        className="
          absolute right-16
          bg-black text-white text-xs
          px-3 py-1 rounded
          opacity-0 group-hover:opacity-100
          transition-opacity
          whitespace-nowrap
        "
      >
        Chat with us
      </span>

      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path d="M19.11 17.83c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.86c.14.18 1.93 2.95 4.68 4.13.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
        <path d="M16.04 2.67C8.93 2.67 3.16 8.44 3.16 15.55c0 2.79.73 5.52 2.12 7.91L3 29.33l6.03-2.24c2.29 1.25 4.88 1.9 7.01 1.9 7.11 0 12.88-5.77 12.88-12.88S23.15 2.67 16.04 2.67z" />
      </svg>
    </a>
  );
}
