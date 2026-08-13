import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";
import { swipeLeft, swipeRight, swipeUpPop, swirlIn, rotateSwipe, staggerParent } from "../lib/motionVariants";
import {
  ArrowRight,
  CheckCircle,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Sparkles,
  Crown,
  Music2,
  Piano,
  Church,
  TrendingUp,
  HelpCircle,
  ChevronDown,
  Quote,
  MessageCircle,
  Star,
} from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const WHATSAPP_LINK = "https://wa.me/918667759837";
const GOLD = "#F5C451";

function GoldBadge({ children }) {
  return (
    <span
      className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] uppercase"
      style={{
        background: "rgba(245,196,81,.10)",
        color: GOLD,
        border: "1px solid rgba(245,196,81,.2)",
      }}
    >
      {children}
    </span>
  );
}

function IconBadge({ icon: Icon, size = 24, color = GOLD, className = "" }) {
  return (
    <div
      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${className}`}
      style={{ background: "rgba(245,196,81,0.1)", border: "1px solid rgba(245,196,81,0.2)" }}
    >
      <Icon size={size} color={color} strokeWidth={1.75} />
    </div>
  );
}

function PrimaryCTA({ children, onClick, large = false, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 hover:scale-105 ${large ? "px-12 py-5 text-lg" : "px-8 py-3.5 text-sm"} ${className}`}
      style={{
        background: "linear-gradient(135deg,#FCD34D,#F5C451 60%,#D97706)",
        color: "#111827",
        boxShadow: "0 8px 30px rgba(245,196,81,.3)",
      }}
    >
      {children}
    </button>
  );
}

function StatCard({ end, suffix = "", title, subtitle }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div
      ref={ref}
      className="group text-center rounded-2xl py-8 px-4 transition-all duration-300 hover:-translate-y-2"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(245,196,81,.1)",
      }}
    >
      <h3 className="text-5xl md:text-6xl font-extrabold mb-3" style={{ color: GOLD }}>
        {inView && <CountUp end={end} duration={2.2} separator="," />}
        {suffix}
      </h3>
      <h4 className="text-white font-semibold text-lg">{title}</h4>
      <p className="text-[#9CA3AF] text-sm mt-2">{subtitle}</p>
    </div>
  );
}

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-colors"
      style={{
        background: "#121821",
        border: isOpen ? "1px solid rgba(245,196,81,.35)" : "1px solid rgba(255,255,255,.06)",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
      >
        <strong className="text-white text-base">{q}</strong>
        <ChevronDown
          size={18}
          color={GOLD}
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: "#B8C1CC" }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const HERO_IMAGE = "https://images.unsplash.com/photo-1552422535-c45813c61732?w=1600&h=1000&fit=crop&auto=format";
const ACTUAL_FEE = "₹32,000";
const OFFER_FEE = "₹22,500";

export default function WorshipKeys() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);

  const handleEnrollClick = () => {
    navigate("/programs/worship-keys/enroll");
  };

  // "Doors opening" scroll transition: the hero photo is split into two
  // halves (via clip-path, so both halves are the exact same image and
  // can never visibly seam/misalign) that slide apart as the hero
  // scrolls out of view, revealing the next section behind them.
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const doorLeftX = useTransform(heroScroll, [0, 1], ["0%", "-100%"]);
  const doorRightX = useTransform(heroScroll, [0, 1], ["0%", "100%"]);
  const doorOpacity = useTransform(heroScroll, [0, 0.7, 1], [1, 1, 0]);

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "landing_page_view", {
        page_name: "worship_keys_march_batch_funnel",
      });
    }
  }, []);

  const levels = [
    {
      level: "Level 1",
      title: "Foundation",
      icon: Music2,
      current: true,
      items: [
        "Proper keyboard posture & finger control",
        "Understanding scales & chords by sound",
        "Ear training for worship music",
        "Play worship songs without notation",
        "Sing confidently while playing",
      ],
      outcome: "Play worship songs confidently and serve in your worship team.",
    },
    {
      level: "Level 2",
      title: "Intermediate",
      icon: Sparkles,
      items: [
        "Chord inversions & smooth transitions",
        "Playing in multiple worship keys",
        "Transpose songs by ear",
        "Play confidently with a worship band",
        "Understand worship flow & dynamics",
      ],
      outcome: "Band-ready worship musician.",
    },
    {
      level: "Level 3",
      title: "Advanced",
      icon: Crown,
      items: [
        "Advanced worship voicings",
        "Prophetic worship playing",
        "Reharmonisation & modulation",
        "Lead worship rehearsals",
        "Mentor upcoming musicians",
      ],
      outcome: "Worship leader & music director.",
    },
  ];

  const testimonials = [
    { name: "Dev", role: "Worship Keys Foundation", quote: "I practiced alone for almost two years but never knew how to progress. Within a few weeks of joining JMA, everything became clear. Daniel's mentoring completely changed my confidence." },
    { name: "Minda Sofia", role: "Worship Keys Foundation", quote: "The individual attention and friendly atmosphere motivated me to stay consistent. I now look forward to every class." },
    { name: "C.S", role: "Worship Keys Foundation", quote: "I never imagined I'd be able to play confidently during worship this soon. The balance between theory and practical application is excellent." },
    { name: "Joshua", role: "Keyboard Student", quote: "Every lesson feels intentional. Instead of memorising songs, I'm finally understanding music." },
    { name: "Esther", role: "Piano Student", quote: "The structured curriculum helped me prepare for Trinity exams while also improving my confidence in church." },
    { name: "Samuel", role: "Church Musician", quote: "The ear training sessions completely transformed the way I approach worship songs." },
    { name: "Rebecca", role: "Adult Beginner", quote: "As someone starting later in life, I appreciated the patience and encouragement throughout the course." },
    { name: "Dev", role: "Worship Keys Foundation", quote: "I practiced alone for almost two years but never knew how to progress. Within a few weeks of joining JMA, everything became clear." },
    { name: "Minda Sofia", role: "Worship Keys Foundation", quote: "The individual attention and friendly atmosphere motivated me to stay consistent." },
    { name: "C.S", role: "Worship Keys Foundation", quote: "I never imagined I'd be able to play confidently during worship this soon." },
  ];

  const faqs = [
    { q: "Do I need prior keyboard experience?", a: "Basic familiarity helps, but the Foundation batch is designed to build clarity from wherever you are." },
    { q: "Is this suitable for church musicians?", a: "Yes. The entire program is worship-focused and built for church settings." },
    { q: "What if I miss a class?", a: "You'll receive guidance to stay on track and catch up without stress." },
    { q: "Is this online?", a: "Yes. Sessions are conducted online with live mentoring." },
    { q: "What is the batch size?", a: "All batches are intentionally kept small to ensure personal mentoring, individual attention, and focused progress for every student." },
  ];

  return (
    <div className="bg-[#0B0F14] text-white min-h-screen" style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-[50]">
        <Navbar />
      </div>

      <div className="pt-[80px]" />

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="pt-32 pb-24 px-6 text-center relative overflow-hidden" style={{ background: "#0B0F14" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left door-half */}
          <motion.div
            className="absolute inset-0"
            style={{ x: doorLeftX, opacity: doorOpacity, clipPath: "inset(0 50% 0 0)" }}
          >
            <img
              src={HERO_IMAGE}
              alt=""
              aria-hidden
              className="w-full h-full object-cover"
              style={{ filter: "saturate(0.5)", opacity: 0.22 }}
            />
          </motion.div>
          {/* Right door-half */}
          <motion.div
            className="absolute inset-0"
            style={{ x: doorRightX, opacity: doorOpacity, clipPath: "inset(0 0 0 50%)" }}
          >
            <img
              src={HERO_IMAGE}
              alt=""
              aria-hidden
              className="w-full h-full object-cover"
              style={{ filter: "saturate(0.5)", opacity: 0.22 }}
            />
          </motion.div>
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 55% 50% at 50% 40%,rgba(11,15,20,0.75) 0%,transparent 100%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(245,196,81,0.06), transparent 70%)" }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <GoldBadge>Worship Keys – Foundation</GoldBadge>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-6 mb-6 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Become a Confident
              <br />
              <span style={{ color: GOLD }}>Worship Keyboard Player</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-lg max-w-2xl mx-auto mb-10 leading-8" style={{ color: "#B8C1CC" }}>
              A technique-first, ear-led keyboard training designed specifically for
              church musicians who want clarity, confidence, and freedom while leading
              worship.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mb-4">
              <span className="text-lg line-through mr-2" style={{ color: "#6B7280" }}>{ACTUAL_FEE}</span>
              <span className="text-2xl font-extrabold" style={{ color: GOLD }}>{OFFER_FEE}</span>
              <span className="text-sm ml-2" style={{ color: "#6B7280" }}>for 9 Months</span>
            </p>
            <PrimaryCTA large onClick={handleEnrollClick}>
              Enroll Now — {OFFER_FEE}
              <ArrowRight size={18} />
            </PrimaryCTA>
            <p className="text-sm mt-6" style={{ color: "#6B7280" }}>
              Online • Live Mentoring • Limited Seats
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── IMPACT STRIP ──────────────────────────────────────────────────── */}
      <section
        className="py-12 px-6"
        style={{ background: "#0E1621", borderTop: "1px solid rgba(245,196,81,.08)", borderBottom: "1px solid rgba(245,196,81,.08)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerParent(0.12)}
          >
            <motion.div variants={swipeLeft}><StatCard end={1000} suffix="+" title="Students Mentored" subtitle="Growing in skill & confidence" /></motion.div>
            <motion.div variants={swipeLeft}><StatCard end={10} suffix="+" title="Churches Represented" subtitle="Serving across congregations" /></motion.div>
            <motion.div variants={swipeLeft}><StatCard end={14} suffix="+" title="Learning Batches" subtitle="Consistent mentor-led training" /></motion.div>
            <motion.div variants={swipeLeft}><StatCard end={9} title="Month Journey" subtitle="Beginner to confident musician" /></motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAM PATH ────────────────────────────────────────────────────── */}
      <section className="relative py-28 px-6 overflow-hidden" style={{ background: "#0E1621" }}>
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&h=900&fit=crop&auto=format"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.5)" }}
            initial={{ opacity: 0, scale: 1.15 }}
            whileInView={{ opacity: 0.14, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 45% at 50% 35%,rgba(14,22,33,0.7) 0%,transparent 100%)" }} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal className="text-center mb-16">
            <GoldBadge>Progressive Curriculum</GoldBadge>
            <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Poppins',sans-serif" }}>
              Worship Keys Has
              <br />
              <span style={{ color: GOLD }}>3 Progressive Levels</span>
            </h2>
            <p className="mt-6 text-base max-w-3xl mx-auto leading-8" style={{ color: "#B8C1CC" }}>
              Every student follows a structured journey—from mastering the
              fundamentals to confidently serving in worship and eventually
              leading others.
            </p>
          </Reveal>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerParent(0.15)}
          >
            {levels.map((lvl) => (
              <motion.div key={lvl.title} variants={swirlIn}>
                <div
                  className="h-full rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: lvl.current ? "linear-gradient(145deg,#111827,#0B1220)" : "#121821",
                    border: lvl.current ? "1px solid rgba(245,196,81,.3)" : "1px solid rgba(255,255,255,.06)",
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <IconBadge icon={lvl.icon} size={22} />
                    {lvl.current && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(245,196,81,.12)", color: GOLD }}>
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: lvl.current ? GOLD : "#6B7280" }}>
                    {lvl.level}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-6">{lvl.title}</h3>

                  <ul className="space-y-4 mb-8">
                    {lvl.items.map((item) => (
                      <li key={item} className="flex gap-3 items-start text-sm" style={{ color: "#D1D5DB" }}>
                        <CheckCircle size={18} color={GOLD} className="mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="rounded-2xl p-4"
                    style={{ background: "rgba(245,196,81,.06)", border: "1px solid rgba(245,196,81,.1)" }}
                  >
                    <strong style={{ color: GOLD }}>Outcome:</strong>
                    <p className="mt-2 text-sm" style={{ color: "#B8C1CC" }}>{lvl.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center mt-12 text-sm" style={{ color: "#9CA3AF" }}>
            Every student begins with the
            <span className="font-semibold text-white"> Foundation Level</span>
            {" "}before progressing further.
          </p>
        </div>
      </section>

      {/* ───────── TESTIMONIALS ───────── */}
      <section className="py-28 overflow-hidden relative" style={{ background: "#0B0F14" }}>
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            src="https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1600&h=900&fit=crop&auto=format"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.5)" }}
            initial={{ opacity: 0, scale: 1.15 }}
            whileInView={{ opacity: 0.16, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 45% at 50% 35%,rgba(11,15,20,0.75) 0%,transparent 100%)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div style={{ perspective: 1200 }}>
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={rotateSwipe}
            >
              <GoldBadge>Student Stories</GoldBadge>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-6 text-white">
                Lives Changed Through
                <span style={{ color: GOLD }}> Music</span>
              </h2>
              <p className="mt-5 max-w-2xl mx-auto leading-7" style={{ color: "#9CA3AF" }}>
                Hundreds of students have grown in confidence,
                musicianship and worship through our structured learning journey.
              </p>
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <div className="testimonial-track">
              {testimonials.map((t, index) => (
                <div key={index} className="testimonial-card mx-4 group">
                  <div
                    className="rounded-3xl p-8 h-full transition-all duration-500 group-hover:-translate-y-2"
                    style={{ background: "linear-gradient(145deg,#111827,#0F172A)", border: "1px solid rgba(245,196,81,.12)" }}
                  >
                    <Quote size={32} color={GOLD} className="mb-5" fill={GOLD} fillOpacity={0.15} />
                    <div className="flex mb-5 gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={15} color={GOLD} fill={GOLD} />
                      ))}
                    </div>
                    <p className="italic leading-8 mb-8" style={{ color: "#D1D5DB" }}>{t.quote}</p>
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                        style={{ background: "rgba(245,196,81,.12)", color: GOLD }}
                      >
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{t.name}</h4>
                        <p className="text-sm" style={{ color: "#9CA3AF" }}>{t.role}</p>
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
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-[#0B0F14] border-t border-[#1f2a37] px-4 py-3">
          <div className="max-w-md mx-auto flex items-center justify-between gap-3">
            <div className="text-sm">
              <p className="text-white font-semibold leading-tight">
                <span className="line-through text-xs text-[#6B7280] mr-1">{ACTUAL_FEE}</span>
                {OFFER_FEE}
              </p>
              <p className="text-xs text-[#B8C1CC]">9-Month Batch</p>
            </div>
            <PrimaryCTA onClick={handleEnrollClick}>Enroll Now</PrimaryCTA>
          </div>
        </div>
      </div>

      {/* ── IS THIS FOR YOU ─────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 overflow-hidden" style={{ background: "#0E1621" }}>
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1600&h=900&fit=crop&auto=format"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.5)" }}
            initial={{ opacity: 0, scale: 1.15 }}
            whileInView={{ opacity: 0.13, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 45% at 50% 35%,rgba(14,22,33,0.75) 0%,transparent 100%)" }} />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal className="text-center mb-14">
            <GoldBadge>Fit Check</GoldBadge>
            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-white">
              Is Worship Keys <span style={{ color: GOLD }}>Right for You?</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={swipeLeft}>
              <div className="h-full p-8 rounded-3xl" style={{ background: "#121821", border: "1px solid rgba(34,197,94,.2)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(34,197,94,.12)" }}>
                    <CheckCircle2 size={22} color="#22C55E" />
                  </div>
                  <h3 className="text-lg font-bold text-white">This is for you if</h3>
                </div>
                <ul className="space-y-3 text-sm" style={{ color: "#B8C1CC" }}>
                  {[
                    "You play basic chords but feel stuck",
                    "You want to play worship songs confidently by ear",
                    "You serve (or want to serve) in a church worship team",
                    "You want clarity instead of random YouTube learning",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#22C55E" }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={swipeRight}>
              <div className="h-full p-8 rounded-3xl" style={{ background: "#121821", border: "1px solid rgba(239,68,68,.2)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(239,68,68,.12)" }}>
                    <XCircle size={22} color="#EF4444" />
                  </div>
                  <h3 className="text-lg font-bold text-white">This may not be for you if</h3>
                </div>
                <ul className="space-y-3 text-sm" style={{ color: "#B8C1CC" }}>
                  {[
                    "You are only looking for classical exam coaching",
                    "You expect instant results without practice",
                    "You are not interested in worship-focused playing",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#EF4444" }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ───────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 overflow-hidden" style={{ background: "#0B0F14" }}>
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=1600&h=900&fit=crop&auto=format"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.5)" }}
            initial={{ opacity: 0, scale: 1.15 }}
            whileInView={{ opacity: 0.12, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 45% at 50% 40%,rgba(11,15,20,0.8) 0%,transparent 100%)" }} />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={swipeUpPop}>
            <div
              className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center"
              style={{ background: "linear-gradient(145deg,#111827,#0F172A)", border: "1px solid rgba(34,197,94,.25)" }}
            >
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(circle at top, rgba(34,197,94,.10), transparent 70%)" }}
              />
              <div className="relative z-10">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
                  style={{ background: "rgba(34,197,94,.12)", border: "1px solid rgba(34,197,94,.25)" }}
                >
                  <ShieldCheck size={42} color="#22C55E" strokeWidth={1.8} />
                </div>

                <span
                  className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6"
                  style={{ background: "rgba(34,197,94,.10)", color: "#22C55E" }}
                >
                  100% Risk Free
                </span>

                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                  30-Day
                  <span style={{ color: "#22C55E" }}> Money Back Guarantee</span>
                </h2>

                <p className="max-w-2xl mx-auto text-lg leading-8" style={{ color: "#B8C1CC" }}>
                  We're confident you'll experience meaningful progress.
                  If, within your first 30 days, you genuinely feel the
                  program isn't helping you grow, simply let us know.
                </p>

                <div className="mt-10 rounded-2xl p-6" style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.06)" }}>
                  <p className="text-base leading-8" style={{ color: "#D1D5DB" }}>
                    After a brief feedback conversation, we'll process a
                    <span className="font-bold text-white"> 100% refund of your {OFFER_FEE} course fee.</span>
                    <br />
                    <span className="font-semibold" style={{ color: "#22C55E" }}>
                      No complicated process. No hidden conditions.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#0E1621" }}>
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1600&h=900&fit=crop&auto=format"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.5)" }}
            initial={{ opacity: 0, scale: 1.15 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 45% at 50% 40%,rgba(14,22,33,0.7) 0%,transparent 100%)" }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal className="text-center mb-14">
            <GoldBadge>Trusted Across Churches</GoldBadge>
            <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white">
              More Than Lessons.
              <br />
              <span style={{ color: GOLD }}>Building Worship Musicians.</span>
            </h2>
            <p className="mt-5 max-w-3xl mx-auto text-lg leading-8" style={{ color: "#B8C1CC" }}>
              Our students don't just learn keyboard—they grow into confident
              musicians who serve their churches, lead worship, and continue
              developing their musical journey.
            </p>
          </Reveal>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerParent(0.15)}
          >
            {[
              { icon: Piano, title: "Active Worship Musicians", desc: "Students confidently serving during Sunday worship, youth meetings and special church services." },
              { icon: Church, title: "Churches Connected", desc: "Learners from multiple churches and ministries, united by a passion to serve through music." },
              { icon: TrendingUp, title: "Visible Musical Growth", desc: "From beginners to confident worship keyboard players through a structured, mentor-led learning journey." },
            ].map((c) => (
              <motion.div key={c.title} variants={swirlIn}>
                <div
                  className="group h-full rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2"
                  style={{ background: "linear-gradient(145deg,#111827,#0F172A)", border: "1px solid rgba(245,196,81,.12)" }}
                >
                  <IconBadge icon={c.icon} className="mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">{c.title}</h3>
                  <p className="leading-7" style={{ color: "#B8C1CC" }}>{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 overflow-hidden" style={{ background: "#0B0F14" }}>
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            src="https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=1600&h=900&fit=crop&auto=format"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.5)" }}
            initial={{ opacity: 0, scale: 1.15 }}
            whileInView={{ opacity: 0.13, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 45% at 50% 35%,rgba(11,15,20,0.8) 0%,transparent 100%)" }} />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal className="text-center mb-14">
            <IconBadge icon={HelpCircle} className="mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
          </Reveal>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerParent(0.1)}
          >
            {faqs.map((f, i) => (
              <motion.div key={f.q} variants={swipeUpPop}>
                <FaqItem q={f.q} a={f.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA AFTER FAQ */}
      <section className="py-20 px-6 text-center relative overflow-hidden" style={{ background: "#0E1621" }}>
        <motion.div
          className="relative z-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={swirlIn}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-white">
            Ready to Join the Worship Keys – Foundation Batch?
          </h3>
          <p className="mb-8" style={{ color: "#B8C1CC" }}>
            Seats are limited. Secure your place now.
          </p>
          <PrimaryCTA large onClick={handleEnrollClick}>
            Secure Your Seat — Enroll Now @ {OFFER_FEE}
            <ArrowRight size={18} />
          </PrimaryCTA>
        </motion.div>
      </section>

      {/* FINAL WHATSAPP CTA */}
      <section className="py-20 px-6 text-center pb-32 md:pb-20" style={{ background: "#0B0F14" }}>
        <p className="mb-4" style={{ color: "#B8C1CC" }}>Still have questions before enrolling?</p>
        <button
          onClick={() => window.open(WHATSAPP_LINK, "_blank")}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
          style={{ border: `1px solid ${GOLD}`, color: GOLD }}
        >
          <MessageCircle size={17} />
          Enquire on WhatsApp
        </button>
      </section>
    </div>
  );
}
