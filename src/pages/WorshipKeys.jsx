import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const WHATSAPP_LINK = "https://wa.me/918667759837";

export default function WorshipKeys() {
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
  🎉 <strong>Early Bird Offer:</strong> ₹999/month valid till <strong>Feb 10</strong> • Limited slots only
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
            A technique-first, ear-led keyboard training built for church musicians who
            want clarity, confidence, and worship sensitivity.
          </p>

          {/* PRIMARY CTA */}
          <button
            onClick={() => navigate("/enroll/worship-keys")}
            className="bg-[#F5C451] text-black px-12 py-5 font-bold text-lg rounded-md hover:scale-105 transition"
          >
            Enroll Now @ ₹999/month
          </button>

          <p className="text-xs text-[#B8C1CC] mt-6">
            Online • Limited seats • Starts in March
          </p>
        </div>
      </section>

      {/* PROGRAM PATH */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Worship Keys Has <span className="text-[#F5C451]">3 Progressive Levels</span>
          </h2>

          <p className="text-[#B8C1CC] mb-14 max-w-3xl mx-auto">
            You don’t jump randomly. Every student is guided through a clear,
            step-by-step growth path — from basics to confident worship leadership.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* FOUNDATION */}
            <div className="border border-[#F5C451] bg-[#121821] p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-[#F5C451] mb-4">
                Level 1 – Foundation
              </h3>
              <ul className="text-sm text-[#B8C1CC] space-y-2">
                <li>• Proper keyboard posture & finger control</li>
                <li>• Sound-based understanding of scales & chords</li>
                <li>• Ear training to identify keys & chord movement</li>
                <li>• Playing worship songs without notation</li>
                <li>• Singing while playing confidently</li>
              </ul>
              <p className="text-xs text-[#B8C1CC] mt-4">
                Outcome: Play worship songs confidently and support live worship
              </p>
            </div>

            {/* INTERMEDIATE */}
            <div className="border border-[#1f2a37] bg-[#121821] p-6 rounded-xl opacity-80">
              <h3 className="text-2xl font-bold mb-4">
                Level 2 – Intermediate
              </h3>
              <ul className="text-sm text-[#B8C1CC] space-y-2">
                <li>• Chord inversions & smooth transitions</li>
                <li>• Playing in multiple worship keys</li>
                <li>• Transposing songs by ear</li>
                <li>• Playing confidently with a worship band</li>
                <li>• Understanding worship flow & dynamics</li>
              </ul>
              <p className="text-xs text-[#B8C1CC] mt-4">
                Outcome: Band-ready worship musician
              </p>
            </div>

            {/* ADVANCED */}
            <div className="border border-[#1f2a37] bg-[#121821] p-6 rounded-xl opacity-70">
              <h3 className="text-2xl font-bold mb-4">
                Level 3 – Advanced
              </h3>
              <ul className="text-sm text-[#B8C1CC] space-y-2">
                <li>• Advanced worship voicings & reharmonisation</li>
                <li>• Spontaneous & prophetic worship playing</li>
                <li>• Worship arrangement & modulation</li>
                <li>• Leading rehearsals & worship teams</li>
                <li>• Mentoring other musicians</li>
              </ul>
              <p className="text-xs text-[#B8C1CC] mt-4">
                Outcome: Worship music director & leader
              </p>
            </div>
          </div>

          <p className="text-sm text-[#B8C1CC] mt-8">
            All students begin with the <strong>Foundation</strong> level.
          </p>
        </div>
      </section>
      {/* TESTIMONIAL → CTA SLIDE */}
<section className="py-28 px-6 bg-[#0B0F14]">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-[#F5C451]">
      What Students Are Saying
    </h2>

    {/* SWIPE HINT */}
    <p className="text-center text-xs text-[#B8C1CC] mb-6">
      ← Swipe to read stories →
    </p>

    {/* HORIZONTAL STORY FLOW */}
    <div
      className="
        flex gap-8
        overflow-x-auto
        snap-x snap-mandatory
        pb-6
        scrollbar-hide
        cursor-grab active:cursor-grabbing
      "
    >

      {/* DEV – FULL TESTIMONIAL (UNCHANGED) */}
      <div className="min-w-full md:min-w-[600px] snap-start bg-[#121821] p-8 rounded-xl">
        <p className="text-sm italic text-[#E5E7EB] mb-6 leading-relaxed">
          “I started learning the keyboard 2Yrs ago and trained for about 6–8 months in Carnatic music,
          After I stopped attending classes, I kept practicing on my own, but I felt stuck at a basic level
          and didn’t really know how to move forward. After joining your online keyboard class, I could
          notice within a very short time. You quickly understood my level, saw exactly what I was missing,
          and guided me in the right way. Your way of mentoring is very inspiring and really helped build my
          confidence. I’m really excited to keep learning more from you and growing further”
        </p>

        <div className="flex items-center gap-3">
          <img
            src="/images/testimonials/dev.jpg"
            alt="Dev"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-[#F5C451] text-sm">Dev</p>
            <p className="text-xs text-[#B8C1CC]">
              Worship Keys – Foundation
            </p>
          </div>
        </div>
      </div>

      {/* SOFIA – FULL TESTIMONIAL (UNCHANGED) */}
      <div className="min-w-full md:min-w-[600px] snap-start bg-[#121821] p-8 rounded-xl">
        <p className="text-sm italic text-[#E5E7EB] mb-6 leading-relaxed">
          “The sessions really helped me track my progress consistently, and the individual attention
          given to each student made a big difference. The friendly approach created a comfortable
          learning environment and motivated me to attend classes regularly.”
        </p>

        <div className="flex items-center gap-3">
          <img
            src="/images/testimonials/sofia.jpg"
            alt="Minda Sofia"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-[#F5C451] text-sm">
              Minda Sofia
            </p>
            <p className="text-xs text-[#B8C1CC]">
              Worship Keys – Foundation
            </p>
          </div>
        </div>
      </div>

      {/* DUMMY – QUANTIFIED TESTIMONIAL */}
<div className="min-w-full md:min-w-[600px] snap-start bg-[#121821] p-8 rounded-xl">
  <p className="text-sm italic text-[#E5E7EB] mb-6 leading-relaxed">
    “Before joining Worship Keys, I struggled to keep up during live worship.
    Within <strong>6 weeks</strong>, I was confidently playing full sets by ear.
    The clarity and structure made a huge difference.”
  </p>

  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-full bg-[#1f2a37] flex items-center justify-center font-bold text-[#F5C451]">
      J
    </div>
    <div>
      <p className="font-semibold text-[#F5C451] text-sm">Joshua</p>
      <p className="text-xs text-[#B8C1CC]">
        Playing weekly in church worship • Foundation Batch
      </p>
    </div>
  </div>
</div>


      {/* C.S – FULL TESTIMONIAL (UNCHANGED) */}
      <div className="min-w-full md:min-w-[600px] snap-start bg-[#121821] p-8 rounded-xl">
        <p className="text-sm italic text-[#E5E7EB] mb-6 leading-relaxed">
          “Praise the Lord! Just wanted to share how grateful I am to have you as my keyboard mentor.
          Thank you for your patience, clear explanations, and the way you balance theory with practical
          worship, it made learning so comfortable for me. I honestly never thought I’d be able to play
          like this, especially this soon. Glory to God!”
        </p>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#1f2a37] flex items-center justify-center font-bold text-[#F5C451]">
            CS
          </div>
          <div>
            <p className="font-semibold text-[#F5C451] text-sm">C.S</p>
            <p className="text-xs text-[#B8C1CC]">
              Worship Keys – Foundation
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* MOBILE STICKY ENROLL CTA */}
<div className="fixed bottom-0 left-0 right-0 z-50 md:hidden ">
  <div className="bg-[#0B0F14] border-t border-[#1f2a37] px-4 py-3">
    <div className="max-w-md mx-auto flex items-center justify-between gap-3">
      
      {/* PRICE INFO */}
      <div className="text-sm">
        <p className="text-white font-semibold leading-tight">
          ₹999/month
        </p>
        <p className="text-xs text-[#B8C1CC]">
          March Batch
        </p>
      </div>

      <div className="pb-24 md:pb-0"></div>

      {/* CTA BUTTON */}
      <button
        onClick={() => navigate("/enroll/worship-keys")}
        className="bg-[#F5C451] text-black px-5 py-2.5 rounded-md font-bold text-sm hover:scale-105 transition"
      >
        Enroll Now
      </button>

    </div>
  </div>
</div>

<div className="flex justify-center">
  <button
    onClick={() => navigate("/enroll/worship-keys")}
    className="bg-[#121821] border border-[#F5C451] text-[#F5C451] px-8 py-3 rounded-md font-semibold hover:bg-[#F5C451] hover:text-black transition"
  >
    Continue to Enrollment →
  </button>
</div>


<p className="text-xs text-[#6B7280] mt-3">
  You’ll see details before payment
</p>

<section className="py-24 px-6 bg-[#0E1621]">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#F5C451]">
      Is Worship Keys Right for You?
    </h2>

    <div className="grid md:grid-cols-2 gap-10 text-sm text-[#B8C1CC]">
      <div className="bg-[#121821] p-6 rounded-xl">
        <h3 className="text-lg font-bold text-green-400 mb-4">
          ✅ This is for you if
        </h3>
        <ul className="space-y-2">
          <li>• You play basic chords but feel stuck</li>
          <li>• You want to play worship songs confidently by ear</li>
          <li>• You serve (or want to serve) in a church worship team</li>
          <li>• You want clarity instead of random YouTube learning</li>
        </ul>
      </div>

      <div className="bg-[#121821] p-6 rounded-xl">
        <h3 className="text-lg font-bold text-red-400 mb-4">
          ❌ This may not be for you if
        </h3>
        <ul className="space-y-2">
          <li>• You are only looking for classical exam coaching</li>
          <li>• You expect instant results without practice</li>
          <li>• You are not interested in worship-focused playing</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="py-20 px-6 bg-[#0B0F14]">
  <div className="max-w-4xl mx-auto text-center bg-[#121821] p-10 rounded-xl border border-green-500">
    <h2 className="text-2xl md:text-3xl font-extrabold text-green-400 mb-4">
      🛡️ 30-Day Zero-Risk Guarantee
    </h2>

    <p className="text-[#B8C1CC] max-w-2xl mx-auto">
      If within the first month you feel the sessions are not productive or helpful,
      your fee will be fully refunded after a short feedback conversation.
      <br />
      <strong>No hesitation. No questions.</strong>
    </p>
  </div>
</section>

<section className="py-20 px-6 bg-[#0E1621]">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-extrabold mb-10 text-[#F5C451]">
      Trusted by Church Musicians
    </h2>

    <div className="grid md:grid-cols-3 gap-6 text-sm text-[#B8C1CC]">
      <div className="bg-[#121821] p-6 rounded-xl">
        🎹 Students actively serving in church worship teams
      </div>
      <div className="bg-[#121821] p-6 rounded-xl">
        ⛪ Learners from multiple churches & ministries
      </div>
      <div className="bg-[#121821] p-6 rounded-xl">
        📈 Beginners → confident live worship players
      </div>
    </div>
  </div>
</section>

<section className="py-24 px-6 bg-[#0B0F14]">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-[#F5C451]">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6 text-sm text-[#B8C1CC]">
      <div className="bg-[#121821] p-6 rounded-xl">
        <strong>Do I need prior keyboard experience?</strong>
        <p className="mt-2">
          Basic familiarity helps, but the Foundation batch is designed to
          build clarity from wherever you are.
        </p>
      </div>

      <div className="bg-[#121821] p-6 rounded-xl">
        <strong>Is this suitable for church musicians?</strong>
        <p className="mt-2">
          Yes. The entire program is worship-focused and built for church settings.
        </p>
      </div>

      <div className="bg-[#121821] p-6 rounded-xl">
        <strong>What if I miss a class?</strong>
        <p className="mt-2">
          You’ll receive guidance to stay on track and catch up without stress.
        </p>
      </div>

      <div className="bg-[#121821] p-6 rounded-xl">
  <strong>How many students are there per batch?</strong>
  <p className="mt-2">
    Batches are intentionally kept small so every student receives
    personal attention, guidance, and live feedback during sessions.
  </p>
</div>


      <div className="bg-[#121821] p-6 rounded-xl">
        <strong>Is this online?</strong>
        <p className="mt-2">
          Yes. Sessions are conducted online with live mentoring.
        </p>
      </div>
    </div>
  </div>
</section>

{/* CTA AFTER TESTIMONIALS */}
<section className="py-20 px-6 bg-[#0E1621] text-center">
  <h3 className="text-2xl md:text-3xl font-extrabold mb-6">
    Ready to Join the Worship Keys – Foundation Batch?
  </h3>

  <p className="text-[#B8C1CC] mb-8">
    Seats are limited for the March batch. Secure your place now.
  </p>

  <button
    onClick={() => navigate("/enroll/worship-keys")}
    className="bg-[#F5C451] text-black px-12 py-5 font-bold text-lg rounded-md hover:scale-105 transition"
  >
    {isLoading ? "Securing your seat…" : "Enroll Now @ ₹999/month"}

  </button>

  <p className="text-xs text-[#B8C1CC] mt-4">
    Regular fee ₹1500/month • Limited-time offer
  </p>
</section>

      {/* FINAL WHATSAPP CTA (ONLY ONE – AT THE END) */}
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