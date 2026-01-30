import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const WHATSAPP_LINK = "https://wa.me/918667759837";

export default function WorshipKeys() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "landing_page_view", {
        page_name: "worship_keys_march_batch_funnel",
      });
    }
  }, []);

  return (
    <div className="bg-[#0B0F14] text-white min-h-screen pt-[72px]">
      <Navbar />

      {/* URGENCY STRIP */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#14532d] text-center py-2 text-sm text-white">
        🎉 <strong>Early Bird Offer:</strong> ₹999/month valid till{" "}
        <strong>Feb 10</strong> • Limited slots only
      </div>

      {/* HERO */}
      <section className="pt-28 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-widest text-[#F5C451] text-sm mb-4">
            March Batch • Worship Keys – Foundation
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Become a Confident <br />
            <span className="text-[#F5C451]">Worship Keyboard Player</span>
          </h1>

          <p className="text-[#B8C1CC] text-lg mb-10">
            A technique-first, ear-led keyboard training built for church musicians
            who want clarity, confidence, and worship sensitivity.
          </p>

          <button
            onClick={() => navigate("/programs/worship-keys/enroll")}
            className="bg-[#F5C451] text-black px-12 py-5 font-bold text-lg rounded-md hover:scale-105 transition"
          >
            Enroll Now @ ₹999/month
          </button>

          <p className="text-xs text-[#B8C1CC] mt-6">
            Online • Limited seats • Starts in March
          </p>
        </div>
      </section>

      {/* MOBILE STICKY ENROLL CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-[#0B0F14] border-t border-[#1f2a37] px-4 py-3">
          <div className="max-w-md mx-auto flex items-center justify-between gap-3">
            <div className="text-sm">
              <p className="text-white font-semibold leading-tight">
                ₹999/month
              </p>
              <p className="text-xs text-[#B8C1CC]">March Batch</p>
            </div>

            <button
              onClick={() => navigate("/programs/worship-keys/enroll")}
              className="bg-[#F5C451] text-black px-5 py-2.5 rounded-md font-bold text-sm hover:scale-105 transition"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/programs/worship-keys/enroll")}
          className="bg-[#121821] border border-[#F5C451] text-[#F5C451] px-8 py-3 rounded-md font-semibold hover:bg-[#F5C451] hover:text-black transition"
        >
          Continue to Enrollment →
        </button>
      </div>

      {/* CTA AFTER TESTIMONIALS */}
      <section className="py-20 px-6 bg-[#0E1621] text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-6">
          Ready to Join the Worship Keys – Foundation Batch?
        </h3>

        <p className="text-[#B8C1CC] mb-8">
          Seats are limited for the March batch. Secure your place now.
        </p>

        <button
          onClick={() => navigate("/programs/worship-keys/enroll")}
          className="bg-[#F5C451] text-black px-12 py-5 font-bold text-lg rounded-md hover:scale-105 transition"
        >
          {isLoading ? "Securing your seat…" : "Enroll Now @ ₹999/month"}
        </button>

        <p className="text-xs text-[#B8C1CC] mt-4">
          Regular fee ₹1500/month • Limited-time offer
        </p>
      </section>

      {/* FINAL WHATSAPP CTA */}
      <section className="py-20 px-6 pb-32 bg-[#0B0F14] text-center">
        <p className="text-[#B8C1CC] mb-4">
          Still have questions before enrolling?
        </p>
        <button
          onClick={() => window.open(WHATSAPP_LINK, "_blank")}
          className="border border-[#F5C451] text-[#F5C451] px-8 py-3 rounded-md hover:bg-[#F5C451] hover:text-black transition"
        >
          Enquire on WhatsApp
        </button>
      </section>
    </div>
  );
}
