// ─────────────────────────────────────────────────────────────
//  Home.jsx — Jubal Music Academy  (copy this file to src/pages/Home.jsx)
// ─────────────────────────────────────────────────────────────
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";
import DemoForm from "../components/DemoForm";
import WhatsAppFloat from "../components/WhatsAppFloat";
import InstagramSection from "../components/InstagramSection";
import HomeTestimonialsSlider from "../components/HomeTestimonialsSlider";
import logo from "../assets/jma-logo.png";
import {
  ArrowRight,
  Music2,
  Music3,
  Music4,
  TrendingUp,
  Church,
  Piano,
  Guitar,
  Mic2,
  Drum,
  BookOpen,
  GraduationCap,
  Layers,
  Presentation,
  HeartHandshake,
  IndianRupee,
  Video,
  Radio,
  CheckCircle2,
  Trophy,
} from "lucide-react";




// ── Reusable fade-up variant ──────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};


// ── Section wrapper with scroll-trigger ──────────────────────
function FadeSection({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Animated count-up ────────────────────────────────────────
function CountUp({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(start);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const journey = [
  {
    number: "01",
    icon: Music2,
    title: "Play with Structure",
    description:
      "Master technique through carefully designed lessons instead of random tutorials.",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Build Confidence",
    description:
      "Develop musical understanding, confidence and consistency through guided practice.",
  },
  {
    number: "03",
    icon: Church,
    title: "Lead with Purpose",
    description:
      "Use your skills in worship, performances and international music examinations.",
  },
];
// ── Program card ─────────────────────────────────────────────
function ProgramCard({
  title,
  desc,
  icon: Icon,
  image,
  hoveredProgram,
  setHoveredProgram,
}) {
  const isHovered = hoveredProgram === title;
  const isDimmed =
    hoveredProgram !== null && hoveredProgram !== title;

  return (
    <motion.div
      variants={fadeUp}
      onHoverStart={() => setHoveredProgram(title)}
      onHoverEnd={() => setHoveredProgram(null)}
      animate={{
        opacity: isDimmed ? 0.35 : 1,
        scale: isHovered ? 1.05 : 1,
        y: isHovered ? -10 : 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-3xl p-8 cursor-pointer"
      style={{
        background: "linear-gradient(145deg,#0F1520,#0B0F16)",
        border: isHovered
          ? "1px solid rgba(245,196,81,.55)"
          : "1px solid rgba(245,196,81,.12)",
      }}
    >
      {/* Instrument photo — translucent by default, glows into view on hover */}
      <motion.img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "saturate(0.55)" }}
        animate={{ opacity: isHovered ? 0.4 : 0.1 }}
        transition={{ duration: 0.4 }}
      />
      {/* Fixed dark wash — keeps title/description legible at any hover state */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg,rgba(11,15,22,0.35) 0%,rgba(11,15,22,0.55) 45%,#0B0F16 88%)",
        }}
      />

      {/* Gold Glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            "radial-gradient(circle at top,rgba(245,196,81,.18),transparent 70%)",
        }}
      />

      {/* Icon */}
      <motion.div
        animate={{
          scale: isHovered ? 1.25 : 1,
          rotate: isHovered ? 8 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
        }}
        className="relative z-10 mb-6 w-14 h-14 rounded-2xl flex items-center justify-center"
        style={{
          background: "rgba(245,196,81,0.1)",
          border: "1px solid rgba(245,196,81,0.2)",
        }}
      >
        <Icon size={26} color="#F5C451" strokeWidth={1.75} />
      </motion.div>

      {/* Title */}
      <motion.h3
        animate={{
          color: isHovered ? "#F5C451" : "#FFFFFF",
        }}
        className="relative z-10 text-xl font-bold mb-3"
      >
        {title}
      </motion.h3>

      {/* Description */}
      <p
        className="relative z-10 text-sm leading-7"
        style={{
          color: "#8B93A7",
        }}
      >
        {desc}
      </p>

      {/* Bottom Accent */}
      <motion.div
        animate={{
          width: isHovered ? 90 : 40,
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative z-10 mt-8 h-[3px] rounded-full"
        style={{
          background:
            "linear-gradient(90deg,#F5C451,rgba(245,196,81,.15))",
        }}
      />
    </motion.div>
  );
}
// ── Main component ───────────────────────────────────────────
export default function Home() {
  const navigate = useNavigate();
  const [hoveredProgram, setHoveredProgram] = useState(null);

  // Scroll-linked "moving deeper into the scene" effect on the hero:
  // background zooms in and fades while content parallaxes upward faster
  // than normal scroll, as the section scrolls out of view.
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgScale = useTransform(heroScroll, [0, 1], [1, 1.3]);
  const heroBgOpacity = useTransform(heroScroll, [0, 1], [1, 0.15]);
  const heroContentY = useTransform(heroScroll, [0, 1], [0, -120]);

  const programs = [
    {
      icon: Piano,
      title: "Piano",
      desc: "Classical and contemporary training focused on posture, technique, tone control, sight-reading, and musical expression.",
      image: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=800&h=900&fit=crop&auto=format",
    },
    {
      icon: Music4,
      title: "Electronic Keyboard",
      desc: "Practical keyboard training covering chords, accompaniment patterns, rhythm, and confidence in live playing.",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=900&fit=crop&auto=format",
    },
    {
      icon: Guitar,
      title: "Guitar",
      desc: "Classical, plectrum, and contemporary guitar with emphasis on rhythm, clarity, fretboard understanding, and expression.",
      image: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=800&h=900&fit=crop&auto=format",
    },
    {
      icon: Mic2,
      title: "Vocals",
      desc: "Vocal training focused on pitch accuracy, breath control, tone development, and confident performance.",
      image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&h=900&fit=crop&auto=format",
    },
    {
      icon: Drum,
      title: "Drums",
      desc: "Rhythm-based training emphasising timing, coordination, groove, and ensemble playing.",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=900&fit=crop&auto=format",
    },
    {
      icon: BookOpen,
      title: "Music Theory",
      desc: "Practical theory lessons to strengthen understanding, reading skills, and overall musical maturity.",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=900&fit=crop&auto=format",
    },
  ];

  return (
    <div style={{ background: "#07090E", color: "#F1F5F9", fontFamily: "'Manrope', sans-serif" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden"
        style={{ background: "#07090E" }}
      >
        {/* Background photo */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ scale: heroBgScale, opacity: heroBgOpacity }}
        >
          <img
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1600&h=1200&fit=crop&auto=format"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ opacity: 0.32, filter: "saturate(0.6)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 45% 40% at 50% 45%,rgba(7,9,14,0.55) 0%,transparent 100%)",
            }}
          />
        </motion.div>

        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%,rgba(245,196,81,0.06) 0%,transparent 70%)",
          }}
        />
        {/* Faint grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,196,81,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(245,196,81,0.03) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />



        <motion.div
          className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          style={{ y: heroContentY }}
        >
          <motion.img
            variants={fadeUp}
            src={logo}
            alt="Jubal Music Academy"
            className="w-36 md:w-48"
            style={{ filter: "drop-shadow(0 0 24px rgba(245,196,81,0.25))" }}
          />

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            <span
              className="inline md:inline"
              style={{ color: "#F5C451" }}
            >
              Jubal Music{" "}
            </span>

            <span
              className="inline md:inline"
              style={{ color: "#FFFFFF" }}
            >
              Academy
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl italic"
            style={{ color: "#B8C1CC" }}
          >
            Training Hands, Tuning Hearts
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-sm md:text-base max-w-xl"
            style={{ color: "#6B7280" }}
          >
            Structured music education for students, performers, and church
            musicians — guided by clarity, discipline, and purpose.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() =>
                document.getElementById("free-demo")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3.5 font-bold text-sm rounded-full transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg,#FCD34D,#F5C451 55%,#D97706)",
                color: "#07090E",
                boxShadow: "0 4px 24px rgba(245,196,81,0.3)",
              }}
            >
              Book a Free Demo
            </button>
            <button
              onClick={() => navigate("/programs/worship-keys-challenge")}
              className="px-8 py-3.5 font-bold text-sm rounded-full transition-all hover:scale-105"
              style={{
                background: "transparent",
                border: "1px solid rgba(245,196,81,0.35)",
                color: "#F5C451",
              }}
            >
              Try the 3-Day Challenge →
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "#374151" }}>
            Scroll
          </span>
          <motion.div
            className="w-px h-8 rounded-full"
            style={{ background: "linear-gradient(to bottom,#F5C451,transparent)" }}
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      {/* ── WHY CHOOSE JMA ───────────────────────────────────── */}
      <section
        className="relative py-20 px-6 overflow-hidden"
        style={{
          background: "#0B0F16",
          borderTop: "1px solid rgba(245,196,81,0.08)",
          borderBottom: "1px solid rgba(245,196,81,0.08)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1600&h=900&fit=crop&auto=format"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.5)" }}
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 0.16, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 50% 45% at 50% 40%,rgba(11,15,22,0.6) 0%,transparent 100%)" }}
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">

          <FadeSection className="text-center mb-14">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
              style={{ color: "#F5C451" }}
            >
              Building Skilled Musicians with Structure, Discipline & Purpose
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Why Students Choose Jubal Music Academy
            </h2>
          </FadeSection>

          <div className="grid md:grid-cols-4 gap-6">

            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl p-7 text-center"
              style={{
                background: "#111827",
                border: "1px solid rgba(245,196,81,0.12)",
              }}
            >
              <div className="w-14 h-14 mb-5 mx-auto rounded-2xl flex items-center justify-center" style={{ background: "rgba(245,196,81,0.1)", border: "1px solid rgba(245,196,81,0.2)" }}>
                <Church size={26} color="#F5C451" strokeWidth={1.75} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Church Musicianship
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "#9CA3AF" }}
              >
                Dedicated pathways for worship musicians to play confidently and
                serve effectively.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl p-7 text-center"
              style={{
                background: "#111827",
                border: "1px solid rgba(245,196,81,0.12)",
              }}
            >
              <div className="w-14 h-14 mb-5 mx-auto rounded-2xl flex items-center justify-center" style={{ background: "rgba(245,196,81,0.1)", border: "1px solid rgba(245,196,81,0.2)" }}>
                <GraduationCap size={26} color="#F5C451" strokeWidth={1.75} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Trinity & Rockschool
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "#9CA3AF" }}
              >
                Structured preparation for internationally recognised music
                examinations.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl p-7 text-center"
              style={{
                background: "#111827",
                border: "1px solid rgba(245,196,81,0.12)",
              }}
            >
              <div className="w-14 h-14 mb-5 mx-auto rounded-2xl flex items-center justify-center" style={{ background: "rgba(245,196,81,0.1)", border: "1px solid rgba(245,196,81,0.2)" }}>
                <Layers size={26} color="#F5C451" strokeWidth={1.75} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Multi-Instrument Academy
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "#9CA3AF" }}
              >
                Piano, Keyboard, Guitar, Vocals, Drums and Music Theory under one
                academy.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl p-7 text-center"
              style={{
                background: "#111827",
                border: "1px solid rgba(245,196,81,0.12)",
              }}
            >
              <div className="w-14 h-14 mb-5 mx-auto rounded-2xl flex items-center justify-center" style={{ background: "rgba(245,196,81,0.1)", border: "1px solid rgba(245,196,81,0.2)" }}>
                <Presentation size={26} color="#F5C451" strokeWidth={1.75} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Mentor-Led Learning
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "#9CA3AF" }}
              >
                Every student follows a structured learning journey with continuous
                guidance and feedback.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section id="about" className="relative py-28 px-6 overflow-hidden" style={{ background: "#07090E" }}>
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&h=900&fit=crop&auto=format"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.55)" }}
            initial={{ opacity: 0, scale: 0.75, rotate: -9 }}
            whileInView={{ opacity: 0.18, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 50% 45% at 50% 45%,rgba(7,9,14,0.65) 0%,transparent 100%)" }}
          />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <FadeSection>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#F5C451" }}
            >
              About JMA
            </p>
            <h2
              className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-white"
            >
              Music education built for{" "}
              <span style={{ color: "#F5C451" }}>long-term growth</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#B8C1CC" }}>
              Jubal Music Academy exists to equip musicians with skill, discipline,
              and purpose — helping them grow not just as performers, but as
              confident, responsible musicians.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#8B93A7" }}>
              With a strong focus on structured learning, mentorship, and real-world
              application, JMA supports students across instruments, levels, and
              callings — including a dedicated emphasis on church musicianship.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#8B93A7" }}>
              Every program at JMA is designed with clarity, progression, and
              long-term growth in mind.
            </p>
          </FadeSection>

          <FadeSection>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Music3, text: "Keyboard · Guitar · Piano · Vocals · Drums" },
                { icon: Church, text: "Dedicated programs for church musicians" },
                { icon: TrendingUp, text: "Clear learning paths, not random lessons" },
                { icon: HeartHandshake, text: "Mentorship-driven, student-first approach" },
              ].map(({ icon: Icon, text }) => (
                <motion.div
                  key={text}
                  whileHover={{ y: -2 }}
                  className="p-5 rounded-2xl text-sm"
                  style={{
                    background: "#0F1520",
                    border: "1px solid rgba(245,196,81,0.1)",
                    color: "#B8C1CC",
                  }}
                >
                  <span className="w-10 h-10 mb-3 rounded-xl flex items-center justify-center" style={{ background: "rgba(245,196,81,0.1)" }}>
                    <Icon size={19} color="#F5C451" strokeWidth={1.75} />
                  </span>
                  {text}
                </motion.div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── TRANSFORMATION PILLARS ───────────────────────────── */}
      <section
        className="relative py-20 px-6 overflow-hidden"
        style={{
          background: "#0B0F16",
          borderTop: "1px solid rgba(245,196,81,0.06)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&h=900&fit=crop&auto=format"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.5)" }}
            initial={{ opacity: 0, y: 90, scale: 0.94 }}
            whileInView={{ opacity: 0.2, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 50% 45% at 50% 40%,rgba(11,15,22,0.65) 0%,transparent 100%)" }}
          />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeSection className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#F5C451" }}>
              What you gain
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              The JMA Transformation
            </h2>
          </FadeSection>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.18,
                },
              },
            }}
          >
            {journey.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                  }}
                  className="group relative overflow-hidden rounded-3xl p-8 cursor-pointer"
                  style={{
                    background: "#0F1520",
                    border: "1px solid rgba(245,196,81,.12)",
                  }}
                >
                  {/* Animated Gold Sweep */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1 }}
                    style={{
                      background:
                        "linear-gradient(90deg,transparent,rgba(245,196,81,.08),transparent)",
                    }}
                  />

                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
                    style={{
                      boxShadow: "0 0 50px rgba(245,196,81,.12) inset",
                    }}
                  />

                  {/* Number Badge */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mb-8"
                    style={{
                      background:
                        "linear-gradient(135deg,#FCD34D,#F5C451,#D97706)",
                      color: "#111827",
                    }}
                  >
                    {item.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.18,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                    }}
                    className="mb-7"
                  >
                    <Icon
                      size={42}
                      color="#F5C451"
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p
                    className="leading-7 text-sm"
                    style={{
                      color: "#9CA3AF",
                    }}
                  >
                    {item.description}
                  </p>

                  <div
                    className="mt-8 h-[3px] w-14 rounded-full transition-all duration-500 group-hover:w-28"
                    style={{
                      background:
                        "linear-gradient(90deg,#F5C451,rgba(245,196,81,.15))",
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMS GRID ────────────────────────────────────── */}
      <section id="programs" className="relative py-28 px-6 overflow-hidden" style={{ background: "#07090E" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ perspective: 1200 }}>
          <motion.img
            src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=1600&h=900&fit=crop&auto=format"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.5)" }}
            initial={{ opacity: 0, rotateY: 55, x: 70 }}
            whileInView={{ opacity: 0.15, rotateY: 0, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 50% 40% at 50% 35%,rgba(7,9,14,0.65) 0%,transparent 100%)" }}
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeSection className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#F5C451" }}>
              What we teach
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Programs
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "#8B93A7" }}>
              Structured learning paths across disciplines, handled by specialised
              faculty and overseen through a unified teaching approach.
            </p>
          </FadeSection>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {programs.map((p) => (
              <ProgramCard
                key={p.title}
                {...p}
                hoveredProgram={hoveredProgram}
                setHoveredProgram={setHoveredProgram}
              />
            ))}
          </motion.div>

          {/* ── WORSHIP KEYS PROGRAM ─────────────────────────── */}
          <FadeSection className="mt-24">
            <div
              className="rounded-3xl overflow-hidden cursor-pointer group"
              style={{
                background: "linear-gradient(135deg,#0C1220,#0F1828)",
                border: "1px solid rgba(245,196,81,0.15)",
              }}
              onClick={() => navigate("/programs/worship-keys")}
            >
              <div className="relative h-56 md:h-72 overflow-hidden">
                <motion.img
                  src="https://images.unsplash.com/photo-1552422535-c45813c61732?w=1400&h=600&fit=crop&auto=format"
                  alt="Playing worship keys on a piano"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(0deg,#0C1220 0%,rgba(12,18,32,0.4) 55%,rgba(12,18,32,0.15) 100%)",
                  }}
                />
              </div>

              <div className="p-10 md:p-14 pt-8 md:pt-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span
                    className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-5"
                    style={{
                      background: "rgba(245,196,81,0.1)",
                      border: "1px solid rgba(245,196,81,0.25)",
                      color: "#F5C451",
                    }}
                  >
                    Flagship Program
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                    Worship Keys Program
                  </h3>
                  <p className="text-base leading-relaxed mb-8" style={{ color: "#8B93A7" }}>
                    A dedicated keyboard pathway created specifically for church
                    musicians, focusing on musical sensitivity, confidence, and
                    worship flow.
                  </p>
                  <button
                    onClick={() => navigate("/programs/worship-keys")}
                    className="px-8 py-3.5 font-bold text-sm rounded-full transition-all hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg,#FCD34D,#F5C451 55%,#D97706)",
                      color: "#07090E",
                      boxShadow: "0 4px 20px rgba(245,196,81,0.25)",
                    }}
                  >
                    View Full Program →
                  </button>
                </div>

                <div className="grid gap-4">
                  {[
                    { tier: "Foundation", desc: "Keyboard basics, posture, chords, rhythm, and understanding the role of keys in worship." },
                    { tier: "Intermediate", desc: "Chord inversions, transitions, playing in different keys, and confidence in live worship settings." },
                    { tier: "Advanced", desc: "Advanced worship flow, modulation, spontaneous playing, team coordination, and leadership-oriented musicianship." },
                  ].map(({ tier, desc }, i) => (
                    <motion.div
                      key={tier}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="flex gap-4 p-5 rounded-xl"
                      style={{
                        background: "#07090E",
                        border: "1px solid rgba(245,196,81,0.1)",
                      }}
                    >
                      <span
                        className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold mt-0.5"
                        style={{ background: "rgba(245,196,81,0.12)", color: "#F5C451" }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <div className="font-bold text-white text-sm mb-1">{tier}</div>
                        <div className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>{desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── 3-DAY CHALLENGE CARD ─────────────────────────────── */}
      <section className="py-16 px-6" style={{ background: "#07090E" }}>
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <div
              className="relative rounded-3xl overflow-hidden cursor-pointer group"
              style={{
                background: "linear-gradient(135deg,#0B0F14,#111820)",
                border: "1px solid rgba(245,196,81,0.2)",
              }}
              onClick={() => navigate("/programs/worship-keys-challenge")}
            >
              {/* Piano photo */}
              <div className="absolute inset-0">
                <motion.img
                  src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200&h=500&fit=crop&crop=center&auto=format"
                  alt="Worship Keys 3-Day Challenge — piano keys"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.55 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg,rgba(7,9,14,0.97) 40%,rgba(7,9,14,0.55) 70%,rgba(7,9,14,0.25) 100%)",
                  }}
                />
              </div>

              <div className="relative z-10 p-8 md:p-12">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-7">
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                    style={{
                      background: "rgba(245,196,81,0.12)",
                      border: "1px solid rgba(245,196,81,0.3)",
                      color: "#F5C451",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                      style={{ boxShadow: "0 0 6px #34d399", animation: "pulse 2s infinite" }}
                    />
                    NEW · LIMITED SEATS
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#374151" }}>
                    LIVE ONLINE · 3 DAYS ONLY
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-white mb-4">
                      Start with the{" "}
                      <span
                        style={{
                          background: "linear-gradient(120deg,#FCD34D,#F5C451,#D97706)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        Worship Keys
                        <br />3-Day Challenge
                      </span>
                    </h3>
                    <p className="text-sm leading-relaxed mb-7" style={{ color: "#8B93A7" }}>
                      Experience the JMA teaching methodology before committing to
                      the full program. Learn your first worship song in a carefully
                      designed beginner-friendly 3-day challenge.
                    </p>
                    <button
                      onClick={() => navigate("/programs/worship-keys-challenge")}
                      className="inline-flex items-center gap-2 px-7 py-3 font-bold text-sm rounded-full transition-all hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg,#FCD34D,#F5C451 55%,#D97706)",
                        color: "#07090E",
                        boxShadow: "0 4px 20px rgba(245,196,81,0.3)",
                      }}
                    >
                      Explore the Challenge →
                    </button>
                    <p className="mt-3 text-xs" style={{ color: "#374151" }}>
                      Perfect starting point for aspiring worship musicians.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      [IndianRupee, "Only ₹249"],
                      [Video, "2 Recorded Sessions"],
                      [Radio, "1 LIVE Session"],
                      [BookOpen, "FREE eBook ₹999"],
                      [CheckCircle2, "Beginner Friendly"],
                      [Trophy, "Certificate Included"],
                    ].map(([Icon, label]) => (
                      <div
                        key={label}
                        className="flex items-center gap-2.5 text-sm"
                        style={{ color: "#B8C1CC" }}
                      >
                        <Icon size={16} color="#F5C451" strokeWidth={2} />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── MEET THE FOUNDER ─────────────────────────────────── */}
      <section
        className="py-28 px-6"
        style={{ background: "#0B0F16", borderTop: "1px solid rgba(245,196,81,0.06)" }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeSection>
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg,rgba(245,196,81,0.15),transparent)",
                  filter: "blur(20px)",
                }}
              />
              <img
                src="/images/daniel.jpg"
                alt="Daniel Prabakar — Founder, Jubal Music Academy"
                className="relative rounded-2xl w-full max-w-sm mx-auto block"
                style={{ border: "1px solid rgba(245,196,81,0.15)" }}
              />
            </div>
          </FadeSection>

          <FadeSection>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#F5C451" }}>
              The person behind JMA
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Meet the Founder
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#B8C1CC" }}>
              I'm Daniel Prabakar — a Western Classical Pianist and Music Educator
              with over a decade of experience as a performer and more than four
              years of dedicated teaching. Music is not just a skill for me; it is
              my calling.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#8B93A7" }}>
              Jubal Music Academy was founded to provide{" "}
              <strong className="text-white">
                structured, purposeful, and long-term music education
              </strong>
              , helping students grow steadily in technique, understanding, and
              confidence.
            </p>
            <p className="text-base leading-relaxed mb-7" style={{ color: "#8B93A7" }}>
              While I lead the academy and oversee the curriculum, JMA functions
              with a <strong className="text-white">team of specialised faculty</strong>,
              ensuring focused instruction across every discipline.
            </p>
            <ul className="space-y-2.5">
              {[
                "Structured training across Piano, Keyboard, Guitar & Music Theory",
                "Dedicated pathways for church musicians and worship teams",
                "Faculty-led instruction with founder oversight",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#6B7280" }}>
                  <span style={{ color: "#F5C451", marginTop: 2 }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeSection>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <HomeTestimonialsSlider />

      {/* ── INSTAGRAM ────────────────────────────────────────── */}
      <InstagramSection />

      {/* ── FREE DEMO CTA ─────────────────────────────────────── */}
      <section
        id="free-demo"
        className="relative py-28 px-6 overflow-hidden"
        style={{ background: "#07090E" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            src="https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=1600&h=900&fit=crop&auto=format"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.5)" }}
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 0.16, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 55% 50% at 50% 40%,rgba(7,9,14,0.65) 0%,transparent 100%)" }}
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%,rgba(245,196,81,0.05) 0%,transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-xl mx-auto text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#F5C451" }}>
            Get started
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Book a Free Demo Session
          </h2>
          <p className="text-base" style={{ color: "#6B7280" }}>
            Experience the JMA teaching approach firsthand — no commitment required.
          </p>
        </div>
        <div className="relative z-10">
          <DemoForm />
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer
        className="py-10 px-6"
        style={{ background: "#0B0F16", borderTop: "1px solid rgba(245,196,81,0.08)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Jubal Music Academy" className="h-8 w-auto object-contain" />
            <span className="text-sm text-[#6B7280]">
              © {new Date().getFullYear()} Jubal Music Academy. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy-policy" className="text-[#6B7280] hover:text-[#F5C451] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-[#6B7280] hover:text-[#F5C451] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}
