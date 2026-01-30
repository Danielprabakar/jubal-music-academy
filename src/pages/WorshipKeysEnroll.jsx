import Navbar from "../components/Navbar";
import WorshipKeysEnrollForm from "../components/WorshipKeysEnrollForm";

export default function WorshipKeysEnroll() {
  return (
    <div className="bg-[#0B0F14] min-h-screen text-white">
      <Navbar />

      <section className="pt-32 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#F5C451] text-center">
          Worship Keys – Enrollment
        </h1>

        <p className="text-center text-[#B8C1CC] mb-10">
          Fill in your details to reserve your seat.
          <br />
          Payment confirms enrollment.
        </p>

        {/* ✅ SINGLE SOURCE OF TRUTH */}
        <WorshipKeysEnrollForm />
      </section>
    </div>
  );
}