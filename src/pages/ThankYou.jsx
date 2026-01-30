import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "enrollment_success", {
        page_name: "worship_keys_thank_you",
      });
    }
  }, []);

  return (
    <div className="bg-[#0B0F14] text-white min-h-screen">
      <Navbar />

      <section className="pt-32 px-6 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-[#F5C451] mb-6">
          🎉 You’re Enrolled!
        </h1>

        <p className="text-[#B8C1CC] text-lg mb-8">
          Thank you for enrolling in the <strong>Worship Keys – Foundation</strong> program.
          We’re excited to walk this journey with you.
        </p>

        <div className="bg-[#121821] rounded-xl p-6 mb-10 text-left">
          <p className="text-sm text-[#B8C1CC] mb-2">
            ✅ Our team will contact you shortly on WhatsApp / Email with:
          </p>
          <ul className="text-sm text-[#B8C1CC] list-disc list-inside space-y-1">
            <li>Batch start details</li>
            <li>Class timings</li>
            <li>Onboarding instructions</li>
          </ul>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-[#F5C451] text-black px-8 py-3 font-bold rounded-md hover:scale-105 transition"
        >
          Go Back to Home
        </button>
      </section>
    </div>
  );
}