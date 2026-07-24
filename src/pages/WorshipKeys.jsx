import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowRight, CheckCircle } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ShieldCheck } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/918667759837";

function StatCard({ end, suffix = "", title, subtitle }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className="group text-center rounded-2xl py-8 transition-all duration-300 hover:-translate-y-2"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(245,196,81,.08)",
      }}
    >
      <h3
        className="text-5xl md:text-6xl font-extrabold mb-3"
        style={{ color: "#F5C451" }}
      >
        {inView && (
          <CountUp
            end={end}
            duration={2.2}
            separator=","
          />
        )}
        {suffix}
      </h3>

      <h4 className="text-white font-semibold text-lg">
        {title}
      </h4>

      <p className="text-[#9CA3AF] text-sm mt-2">
        {subtitle}
      </p>
    </div>
  );
}


export default function WorshipKeys() {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/programs/worship-keys/enroll");
  };



  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "landing_page_view", {
        page_name: "worship_keys_march_batch_funnel",
      });
    }
  }, []);

  return (
    <div className="bg-[#0B0F14] text-white min-h-screen">


      {/* URGENCY STRIP */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#14532d] text-center py-2 text-sm text-white">
        🎯 <strong>Early Bird Offer:</strong> Valid till <strong>Feb 10</strong> •{" "}
        <strong>Limited Slots Only</strong>
      </div>

      {/* NAVBAR */}
      <div className="fixed top-[40px] left-0 right-0 z-[50]">
        <Navbar />
      </div>

      {/* PAGE CONTENT */}
      <div className="pt-[120px]"></div>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-24 px-6 text-center relative overflow-hidden"
        style={{ background: "#0B0F14" }}
      >
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(245,196,81,0.08), transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6"
            style={{
              background: "rgba(245,196,81,.10)",
              color: "#F5C451",
              border: "1px solid rgba(245,196,81,.15)",
            }}
          >
            March Batch · Worship Keys – Foundation
          </span>

          {/* Heading */}
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Become a Confident
            <br />
            <span style={{ color: "#F5C451" }}>
              Worship Keyboard Player
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-lg max-w-2xl mx-auto mb-10 leading-8"
            style={{ color: "#B8C1CC" }}
          >
            A technique-first, ear-led keyboard training designed specifically for
            church musicians who want clarity, confidence, and freedom while leading
            worship.
          </p>

          {/* CTA */}
          <button
            type="button"
            onClick={handleEnrollClick}
            className="inline-flex items-center gap-2 px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg,#FCD34D,#F5C451 60%,#D97706)",
              color: "#111827",
              boxShadow: "0 8px 30px rgba(245,196,81,.35)",
            }}
          >
            Enroll Now @ ₹999/month
            <ArrowRight size={18} />
          </button>

          {/* Bottom Text */}
          <p
            className="text-sm mt-6"
            style={{ color: "#6B7280" }}
          >
            Online • Live Mentoring • Limited Seats • Starts in March
          </p>
        </div>
      </section>

      {/* ───── IMPACT STRIP ───── */}

      <section
        className="py-12 px-6"
        style={{
          background: "#0E1621",
          borderTop: "1px solid rgba(245,196,81,.08)",
          borderBottom: "1px solid rgba(245,196,81,.08)",
        }}
      >
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <StatCard
              end={1000}
              suffix="+"
              title="Students Mentored"
              subtitle="Growing in skill & confidence"
            />

            <StatCard
              end={10}
              suffix="+"
              title="Churches Represented"
              subtitle="Serving across congregations"
            />

            <StatCard
              end={14}
              suffix="+"
              title="Learning Batches"
              subtitle="Consistent mentor-led training"
            />

            <StatCard
              end={9}
              title="Month Journey"
              subtitle="Beginner to confident musician"
            />

          </div>

        </div>
      </section>


      {/* ── PROGRAM PATH ────────────────────────────────────────────────────── */}
      <section
        className="py-28 px-6"
        style={{ background: "#0E1621" }}
      >
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">

            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] uppercase"
              style={{
                background: "rgba(245,196,81,.10)",
                color: "#F5C451",
                border: "1px solid rgba(245,196,81,.15)",
              }}
            >
              Progressive Curriculum
            </span>

            <h2
              className="mt-6 text-3xl md:text-5xl font-extrabold text-white"
              style={{ fontFamily: "'Poppins',sans-serif" }}
            >
              Worship Keys Has
              <br />
              <span style={{ color: "#F5C451" }}>
                3 Progressive Levels
              </span>
            </h2>

            <p
              className="mt-6 text-base max-w-3xl mx-auto leading-8"
              style={{ color: "#B8C1CC" }}
            >
              Every student follows a structured journey—from mastering the
              fundamentals to confidently serving in worship and eventually
              leading others.
            </p>

          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-3 gap-8">

            {/* FOUNDATION */}

            <div
              className="rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: "linear-gradient(145deg,#111827,#0B1220)",
                border: "1px solid rgba(245,196,81,.25)",
              }}
            >

              <div className="flex items-center justify-between mb-6">

                <h3
                  className="text-xl font-bold"
                  style={{ color: "#F5C451" }}
                >
                  Level 1 – Foundation
                </h3>

                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: "rgba(245,196,81,.12)",
                    color: "#F5C451",
                  }}
                >
                  Current
                </span>

              </div>

              <ul className="space-y-4 mb-8">

                {[
                  "Proper keyboard posture & finger control",
                  "Understanding scales & chords by sound",
                  "Ear training for worship music",
                  "Play worship songs without notation",
                  "Sing confidently while playing",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 items-start text-sm"
                    style={{ color: "#D1D5DB" }}
                  >
                    <CheckCircle
                      size={18}
                      color="#F5C451"
                      className="mt-0.5 flex-shrink-0"
                    />

                    {item}

                  </li>
                ))}

              </ul>

              <div
                className="rounded-2xl p-4"
                style={{
                  background: "rgba(245,196,81,.08)",
                  border: "1px solid rgba(245,196,81,.12)",
                }}
              >
                <strong style={{ color: "#F5C451" }}>
                  Outcome:
                </strong>

                <p
                  className="mt-2 text-sm"
                  style={{ color: "#B8C1CC" }}
                >
                  Play worship songs confidently and serve in your worship team.
                </p>

              </div>

            </div>

            {/* INTERMEDIATE */}

            <div
              className="rounded-3xl p-8 opacity-90 transition-all duration-300 hover:-translate-y-2 hover:opacity-100"
              style={{
                background: "#121821",
                border: "1px solid rgba(255,255,255,.06)",
              }}
            >

              <h3 className="text-xl font-bold text-white mb-6">
                Level 2 – Intermediate
              </h3>

              <ul className="space-y-4">

                {[
                  "Chord inversions & smooth transitions",
                  "Playing in multiple worship keys",
                  "Transpose songs by ear",
                  "Play confidently with a worship band",
                  "Understand worship flow & dynamics",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm"
                    style={{ color: "#B8C1CC" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full mt-2"
                      style={{ background: "#F5C451" }}
                    />

                    {item}

                  </li>
                ))}

              </ul>

              <div className="mt-8 text-sm text-[#9CA3AF]">
                <strong>Outcome:</strong> Band-ready worship musician.
              </div>

            </div>

            {/* ADVANCED */}

            <div
              className="rounded-3xl p-8 opacity-80 transition-all duration-300 hover:-translate-y-2 hover:opacity-100"
              style={{
                background: "#121821",
                border: "1px solid rgba(255,255,255,.06)",
              }}
            >

              <h3 className="text-xl font-bold text-white mb-6">
                Level 3 – Advanced
              </h3>

              <ul className="space-y-4">

                {[
                  "Advanced worship voicings",
                  "Prophetic worship playing",
                  "Reharmonisation & modulation",
                  "Lead worship rehearsals",
                  "Mentor upcoming musicians",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm"
                    style={{ color: "#B8C1CC" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full mt-2"
                      style={{ background: "#F5C451" }}
                    />

                    {item}

                  </li>
                ))}

              </ul>

              <div className="mt-8 text-sm text-[#9CA3AF]">
                <strong>Outcome:</strong> Worship leader & music director.
              </div>

            </div>

          </div>

          {/* Footer */}

          <p
            className="text-center mt-12 text-sm"
            style={{ color: "#9CA3AF" }}
          >
            Every student begins with the
            <span className="font-semibold text-white">
              {" "}Foundation Level
            </span>
            {" "}before progressing further.
          </p>

        </div>
      </section>


      {/* ───────── TESTIMONIALS ───────── */}

      <section
        className="py-28 overflow-hidden"
        style={{ background: "#0B0F14" }}
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span
              className="inline-block px-4 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-bold"
              style={{
                background: "rgba(245,196,81,.1)",
                color: "#F5C451"
              }}
            >
              Student Stories
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mt-6 text-white">
              Lives Changed Through
              <span className="text-[#F5C451]"> Music</span>
            </h2>

            <p className="text-[#9CA3AF] mt-5 max-w-2xl mx-auto leading-7">
              Hundreds of students have grown in confidence,
              musicianship and worship through our structured learning journey.
            </p>

          </div>

          <div className="overflow-hidden">

            <div className="testimonial-track">

              {[
                {
                  name: "Dev",
                  role: "Worship Keys Foundation",
                  quote: "I practiced alone for almost two years but never knew how to progress. Within a few weeks of joining JMA, everything became clear. Daniel's mentoring completely changed my confidence."
                },

                {
                  name: "Minda Sofia",
                  role: "Worship Keys Foundation",
                  quote: "The individual attention and friendly atmosphere motivated me to stay consistent. I now look forward to every class."
                },

                {
                  name: "C.S",
                  role: "Worship Keys Foundation",
                  quote: "I never imagined I'd be able to play confidently during worship this soon. The balance between theory and practical application is excellent."
                },

                {
                  name: "Joshua",
                  role: "Keyboard Student",
                  quote: "Every lesson feels intentional. Instead of memorising songs, I'm finally understanding music."
                },

                {
                  name: "Esther",
                  role: "Piano Student",
                  quote: "The structured curriculum helped me prepare for Trinity exams while also improving my confidence in church."
                },

                {
                  name: "Samuel",
                  role: "Church Musician",
                  quote: "The ear training sessions completely transformed the way I approach worship songs."
                },

                {
                  name: "Rebecca",
                  role: "Adult Beginner",
                  quote: "As someone starting later in life, I appreciated the patience and encouragement throughout the course."
                },

                // Duplicate for infinite loop

                {
                  name: "Dev",
                  role: "Worship Keys Foundation",
                  quote: "I practiced alone for almost two years but never knew how to progress. Within a few weeks of joining JMA, everything became clear."
                },

                {
                  name: "Minda Sofia",
                  role: "Worship Keys Foundation",
                  quote: "The individual attention and friendly atmosphere motivated me to stay consistent."
                },

                {
                  name: "C.S",
                  role: "Worship Keys Foundation",
                  quote: "I never imagined I'd be able to play confidently during worship this soon."
                },

              ].map((t, index) => (

                <div
                  key={index}
                  className="testimonial-card mx-4 group"
                >

                  <div
                    className="rounded-3xl p-8 h-full transition-all duration-500 group-hover:-translate-y-2"
                    style={{
                      background: "linear-gradient(145deg,#111827,#0F172A)",
                      border: "1px solid rgba(245,196,81,.12)"
                    }}
                  >

                    <div className="text-5xl text-[#F5C451] mb-5">
                      “
                    </div>

                    <div className="flex mb-5">

                      {"★★★★★".split("").map((s, i) => (

                        <span
                          key={i}
                          className="text-[#F5C451] text-lg"
                        >
                          ★
                        </span>

                      ))}

                    </div>

                    <p
                      className="text-[#D1D5DB] italic leading-8 mb-8"
                    >
                      {t.quote}
                    </p>

                    <div className="flex items-center gap-4">

                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg"
                        style={{
                          background: "rgba(245,196,81,.12)",
                          color: "#F5C451"
                        }}
                      >
                        {t.name
                          .split(" ")
                          .map(n => n[0])
                          .join("")}
                      </div>

                      <div>

                        <h4 className="font-bold text-white">
                          {t.name}
                        </h4>

                        <p className="text-sm text-[#9CA3AF]">
                          {t.role}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

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
              type="button"
              onClick={handleEnrollClick}
              className="bg-[#F5C451] text-black px-5 py-2.5 rounded-md font-bold text-sm hover:scale-105 transition"
            >
              Enroll Now
            </button>


          </div>
        </div>
      </div>



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

      {/* ── GUARANTEE ───────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{ background: "#0B0F14" }}
      >
        <div className="max-w-4xl mx-auto">

          <div
            className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center"
            style={{
              background: "linear-gradient(145deg,#111827,#0F172A)",
              border: "1px solid rgba(34,197,94,.25)",
            }}
          >

            {/* Background Glow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at top, rgba(34,197,94,.10), transparent 70%)",
              }}
            />

            <div className="relative z-10">

              {/* Icon */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
                style={{
                  background: "rgba(34,197,94,.12)",
                  border: "1px solid rgba(34,197,94,.25)",
                }}
              >
                <ShieldCheck
                  size={42}
                  color="#22C55E"
                  strokeWidth={1.8}
                />
              </div>

              {/* Heading */}
              <span
                className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6"
                style={{
                  background: "rgba(34,197,94,.10)",
                  color: "#22C55E",
                }}
              >
                100% Risk Free
              </span>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                30-Day
                <span className="text-[#22C55E]">
                  {" "}Money Back Guarantee
                </span>
              </h2>

              <p
                className="max-w-2xl mx-auto text-lg leading-8"
                style={{ color: "#B8C1CC" }}
              >
                We're confident you'll experience meaningful progress.
                If, within your first 30 days, you genuinely feel the
                program isn't helping you grow, simply let us know.
              </p>

              <div
                className="mt-10 rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,.03)",
                  border: "1px solid rgba(255,255,255,.06)",
                }}
              >
                <p
                  className="text-base leading-8"
                  style={{ color: "#D1D5DB" }}
                >
                  After a brief feedback conversation, we'll process a
                  <span className="font-bold text-white">
                    {" "}100% refund of your first month's fee.
                  </span>

                  <br />

                  <span className="text-[#22C55E] font-semibold">
                    No complicated process. No hidden conditions.
                  </span>
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── SOCIAL PROOF ───────────────────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{ background: "#0E1621" }}
      >
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">

            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-5"
              style={{
                background: "rgba(245,196,81,.10)",
                color: "#F5C451",
                border: "1px solid rgba(245,196,81,.15)",
              }}
            >
              Trusted Across Churches
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              More Than Lessons.
              <br />
              <span style={{ color: "#F5C451" }}>
                Building Worship Musicians.
              </span>
            </h2>

            <p
              className="mt-5 max-w-3xl mx-auto text-lg leading-8"
              style={{ color: "#B8C1CC" }}
            >
              Our students don't just learn keyboard—they grow into confident
              musicians who serve their churches, lead worship, and continue
              developing their musical journey.
            </p>

          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-3 gap-8">

            <div
              className="group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "linear-gradient(145deg,#111827,#0F172A)",
                border: "1px solid rgba(245,196,81,.12)",
              }}
            >
              <div className="text-5xl mb-6">🎹</div>

              <h3 className="text-xl font-bold text-white mb-4">
                Active Worship Musicians
              </h3>

              <p className="text-[#B8C1CC] leading-7">
                Students confidently serving during Sunday worship,
                youth meetings and special church services.
              </p>

            </div>

            <div
              className="group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "linear-gradient(145deg,#111827,#0F172A)",
                border: "1px solid rgba(245,196,81,.12)",
              }}
            >
              <div className="text-5xl mb-6">⛪</div>

              <h3 className="text-xl font-bold text-white mb-4">
                Churches Connected
              </h3>

              <p className="text-[#B8C1CC] leading-7">
                Learners from multiple churches and ministries,
                united by a passion to serve through music.
              </p>

            </div>

            <div
              className="group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "linear-gradient(145deg,#111827,#0F172A)",
                border: "1px solid rgba(245,196,81,.12)",
              }}
            >
              <div className="text-5xl mb-6">📈</div>

              <h3 className="text-xl font-bold text-white mb-4">
                Visible Musical Growth
              </h3>

              <p className="text-[#B8C1CC] leading-7">
                From beginners to confident worship keyboard players
                through a structured, mentor-led learning journey.
              </p>

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
              <strong>Is this online?</strong>
              <p className="mt-2">
                Yes. Sessions are conducted online with live mentoring.
              </p>
            </div>

            <div className="bg-[#121821] p-6 rounded-xl">
              <strong>What is the batch size?</strong>
              <p className="mt-2">
                All batches are intentionally kept small to ensure personal mentoring,
                individual attention, and focused progress for every student.
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
          type="button"
          onClick={handleEnrollClick}
          className="bg-[#F5C451] text-black px-12 py-5 font-bold text-lg rounded-md hover:scale-105 transition"
        >
          Secure your seat! Enroll Now @ ₹999/month
        </button>


        <p className="text-xs text-[#B8C1CC] mt-4">
          Regular fee ₹1500/month • Limited-time offer
        </p>
      </section>

      {/* FINAL WHATSAPP CTA (ONLY ONE – AT THE END) */}
      <section className="py-20 px-6 bg-[#0B0F14] text-center pb-32 md:pb-20">

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