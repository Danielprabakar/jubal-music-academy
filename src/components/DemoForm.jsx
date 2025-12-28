import { useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw3bwkyLQZhrDFXKauBxeykvR_Efc57cLdhJsbHJ6LmFwPnieTEUR5TD0ae6XooV4YR/exec";

export default function DemoForm() {
  const [program, setProgram] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData(e.target);
  
    const payload = {
      name: formData.get("name"),
      age: formData.get("age"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      program: formData.get("program"),
      level: formData.get("level"),
      mode: formData.get("mode"),
      notes: formData.get("notes"),
    };
  
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // 🔑 THIS IS THE KEY
        body: JSON.stringify(payload),
      });
  
      setSubmitted(true);
      e.target.reset();
      setProgram("");
    } catch (err) {
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };  

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center border border-gold p-8">
        <h3 className="text-2xl font-semibold text-gold mb-3">
          Registration Successful
        </h3>
        <p className="text-gray-300">
          Thank you for registering for a free demo session.
          <br />
          Demo sessions are conducted once a week.
          <br />
          We will contact you shortly to confirm the schedule.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6"
    >
      {/* Name */}
      <div>
        <label className="block text-sm text-gray-300 mb-1">Name *</label>
        <input
          name="name"
          required
          type="text"
          className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold"
        />
      </div>

      {/* Age */}
      <div>
        <label className="block text-sm text-gray-300 mb-1">Age</label>
        <input
          name="age"
          type="number"
          className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm text-gray-300 mb-1">
          Phone / WhatsApp *
        </label>
        <input
          name="phone"
          required
          type="tel"
          className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold"
        />
      </div>

      {/* Email (optional) */}
      <div>
        <label className="block text-sm text-gray-300 mb-1">
          Email (optional)
        </label>
        <input
          name="email"
          type="email"
          className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold"
          placeholder="you@example.com"
        />
      </div>

      {/* Mode */}
      <div>
        <label className="block text-sm text-gray-300 mb-1">
          Preferred Mode
        </label>
        <select
          name="mode"
          className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold"
        >
          <option value="">Select</option>
          <option>Online</option>
          <option>Offline</option>
        </select>
      </div>

      {/* Program */}
      <div className="md:col-span-2">
        <label className="block text-sm text-gray-300 mb-1">
          Program / Instrument *
        </label>
        <select
          name="program"
          required
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold"
        >
          <option value="">Select</option>
          <option>Keyboard</option>
          <option>Piano</option>
          <option>Guitar</option>
          <option>Worship Keys</option>
        </select>
      </div>

      {/* Conditional Level */}
      {program === "Worship Keys" && (
        <div className="md:col-span-2">
          <label className="block text-sm text-gray-300 mb-1">
            Worship Keys Level
          </label>
          <select
            name="level"
            className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold"
          >
            <option value="">Select level</option>
            <option>Foundation</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
      )}

      {/* Notes */}
      <div className="md:col-span-2">
        <label className="block text-sm text-gray-300 mb-1">
          Notes (optional)
        </label>
        <textarea
          name="notes"
          rows="3"
          className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold"
        />
      </div>

      {/* Submit */}
      <div className="md:col-span-2 text-center mt-4">
        <button
          disabled={loading}
          type="submit"
          className="bg-gold text-black px-10 py-3 font-medium rounded-sm hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Register for Free Demo"}
        </button>
      </div>
    </form>
  );
}
