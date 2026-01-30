import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw3bwkyLQZhrDFXKauBxeykvR_Efc57cLdhJsbHJ6LmFwPnieTEUR5TD0ae6XooV4YR/exec";

const RAZORPAY_LINK = "https://rzp.io/rzp/HhaSsuQ6";

export default function WorshipKeysEnrollForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const payload = {
      type: "Worship Keys Enrollment",   // 🔑 NEW
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      program: "Worship Keys",
      batch: "Current Batch",            // can change later
      source: "Website",
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",                 // SAME AS DEMO
        body: JSON.stringify(payload),
      });

      setSubmitted(true);

      // 🔔 Open payment AFTER save
      window.open(RAZORPAY_LINK, "_blank");

      e.target.reset();
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center bg-[#121821] p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-[#F5C451] mb-3">
          Enrollment Submitted
        </h3>
        <p className="text-[#B8C1CC]">
          Your details have been received.
          <br />
          Please complete the payment to confirm your seat.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-4"
    >
      <input
        name="name"
        required
        placeholder="Full Name"
        className="w-full p-3 bg-[#121821] text-white rounded"
      />

      <input
        name="phone"
        required
        placeholder="Phone / WhatsApp"
        className="w-full p-3 bg-[#121821] text-white rounded"
      />

      <input
        name="email"
        type="email"
        placeholder="Email (optional)"
        className="w-full p-3 bg-[#121821] text-white rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#F5C451] text-black py-3 font-bold rounded"
      >
        {loading ? "Submitting..." : "Proceed to Payment"}
      </button>
    </form>
  );
}