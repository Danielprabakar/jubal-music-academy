import { motion } from "framer-motion";
import logo from "./assets/jma-logo.png";
import Reveal from "./components/Reveal";
import Navbar from "./components/Navbar";
import DemoForm from "./components/DemoForm";
import WhatsAppFloat from "./components/WhatsAppFloat";


const WHATSAPP_LINK = "https://wa.me/918667759837?text=Hi%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20the%20Worship%20Keys%20program";


export default function App() {
  return (
    <div className="bg-dark text-white">
      <Navbar />


      {/* HERO SECTION */}
<section
  id="home"
  className="min-h-screen flex items-center justify-center px-4 pt-24"
>
  <motion.div
    className="flex flex-col items-center text-center gap-3"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.15 } },
    }}
  >
    <motion.img
      src={logo}
      alt="Jubal Music Academy"
      className="w-40 md:w-52"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8 }}
    />

    <motion.h1
      className="text-4xl md:text-5xl font-semibold text-gold"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      Jubal Music Academy
    </motion.h1>

    <motion.p
      className="text-lg md:text-xl text-gray-300 italic"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      Training Hands, Tuning Hearts
    </motion.p>

    <motion.button
      onClick={() =>
        document
          .getElementById("free-demo")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className="mt-4 bg-gold text-black px-8 py-3 font-medium rounded-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      Book a Free Demo
    </motion.button>
  </motion.div>
</section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-gold mb-4 text-center">
            Why Jubal Music Academy
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            At Jubal Music Academy, we focus on structured, purpose-driven music
            education. Our approach blends technical excellence with musical
            sensitivity, helping students grow confidently in skill and heart.
          </p>
        </Reveal>
      </section>

      {/* COURSES SECTION */}
<section id="programs" className="py-24 px-6 bg-black">
  <Reveal>
    <h2 className="text-3xl md:text-4xl font-semibold text-gold mb-12 text-center">
      Our Programs
    </h2>
  </Reveal>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        title: "Keyboard",
        description:
          "A structured keyboard program focused on strong fundamentals, musical understanding, and Trinity grade preparation. Students progress steadily through technique, scales, sight-reading, and expressive playing with confidence.",
        whatsappMessage:
          "Hi, I would like to enquire about the Keyboard program at Jubal Music Academy.",
      },
      {
        title: "Piano",
        description:
          "A disciplined, grade-oriented piano program emphasizing technique, posture, tone control, and musical interpretation. Aligned with Trinity syllabus, it prepares students for examinations and refined performance.",
        whatsappMessage:
          "Hi, I would like to enquire about the Piano program at Jubal Music Academy.",
      },
      {
        title: "Guitar",
        description:
          "A systematic guitar program designed for Trinity grade preparation, covering technique, rhythm, fretboard clarity, and musical expression. Students develop consistency, accuracy, and confident playing.",
        whatsappMessage:
          "Hi, I would like to enquire about the Guitar program at Jubal Music Academy.",
      },
    ].map((course) => (
      <Reveal key={course.title}>
        <div
          className="
            border border-gray-800 p-6 text-center
            transition-all duration-300
            hover:border-gold hover:-translate-y-2
          "
        >
          <h3 className="text-xl font-medium mb-3 text-gold">
            {course.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {course.description}
          </p>

          <button
            onClick={() => {
              // Set dynamic WhatsApp message
              window.dispatchEvent(
                new CustomEvent("whatsapp-message", {
                  detail: { message: course.whatsappMessage },
                })
              );

              // Scroll to Free Demo form
              document
                .getElementById("free-demo")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="
              bg-transparent border border-gold text-gold
              px-6 py-2 text-sm font-medium
              hover:bg-gold hover:text-black
              transition
            "
          >
            Book Free Demo
          </button>
        </div>
      </Reveal>
    ))}
  </div>
</section>




      {/* WORSHIP KEYS PROGRAM */}
<section
  id="worship-keys"
  className="py-24 px-6 max-w-6xl mx-auto"
>
  <Reveal>
    <h2 className="text-3xl md:text-4xl font-semibold text-gold mb-4 text-center">
      Worship Keys Program
    </h2>
  </Reveal>

  <Reveal>
    <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
      Worship Keys is a structured keyboard program designed specifically
      for church musicians. It progresses through three clear levels —
      Foundation, Intermediate, and Advanced.
    </p>
  </Reveal>

  <div className="grid md:grid-cols-3 gap-8">
    
    {/* FOUNDATION */}
    <Reveal>
      <div className="border border-gray-800 p-6 hover:border-gold transition">
        <h3 className="text-xl font-medium text-gold mb-1">
          Foundation
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          Level 1
        </p>
        <p className="text-gray-400 text-sm">
          Basics of keyboard technique, posture, chords, rhythm,
          and understanding worship flow. Ideal for beginners.
        </p>
        

      </div>
    </Reveal>

    {/* INTERMEDIATE */}
    <Reveal>
      <div className="border border-gray-800 p-6 hover:border-gold transition">
        <h3 className="text-xl font-medium text-gold mb-1">
          Intermediate
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          Level 2
        </p>
        <p className="text-gray-400 text-sm">
          Chord inversions, progressions, transitions, playing in
          different keys, and confidence in live worship settings.
        </p>
      </div>
    </Reveal>

    {/* ADVANCED */}
    <Reveal>
      <div className="border border-gray-800 p-6 hover:border-gold transition">
        <h3 className="text-xl font-medium text-gold mb-1">
          Advanced
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          Level 3
        </p>
        <p className="text-gray-400 text-sm">
          Advanced worship flow, spontaneous playing, modulation,
          team coordination, and leadership-focused musicianship.
        </p>
      </div>
    </Reveal>
  </div>
</section>

{/* TESTIMONIALS SECTION */}
<section id="testimonials" className="py-24 px-6 max-w-6xl mx-auto">
  <Reveal>
    <h2 className="text-3xl md:text-4xl font-semibold text-gold mb-12 text-center">
      What Our Students Say
    </h2>
  </Reveal>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* REAL TESTIMONIAL – WORSHIP KEYS */}
    <Reveal>
      <div className="border border-gray-800 p-6 hover:border-gold transition">
        <p className="text-gray-300 text-sm italic mb-4 leading-relaxed">
          “Praise the Lord! I’m truly grateful to have you as my keyboard mentor.
          Thank you for your patience, clear explanations, and the way you balance
          theory with practical worship—it made learning so comfortable for me.
          I never thought I’d be able to play like this, especially in such a short time.
          I genuinely appreciate the effort you put into teaching me. Glory to God!”
        </p>
        <p className="text-gold font-medium">
          — C.S <span className="text-gray-400 text-sm">(Worship Keys – Foundation)</span>
        </p>
      </div>
    </Reveal>

    {/* REAL TESTIMONIAL – GUITAR */}
    <Reveal>
      <div className="border border-gray-800 p-6 hover:border-gold transition">
        <p className="text-gray-300 text-sm italic mb-4 leading-relaxed">
          “A very calm, humble, and dedicated teacher. He teaches according to the
          student’s requirement and explains concepts clearly and to the point.
          He always makes sure I’ve understood before moving on to the next topic.”
        </p>
        <p className="text-gold font-medium">
          — Sudha <span className="text-gray-400 text-sm">(Guitar Student)</span>
        </p>
      </div>
    </Reveal>

    {/* SUPPORTING TESTIMONIAL */}
    <Reveal>
      <div className="border border-gray-800 p-6 hover:border-gold transition">
        <p className="text-gray-300 text-sm italic mb-4 leading-relaxed">
          “The training is structured, practical, and worship-focused.
          It helped me understand how to support worship confidently on the keyboard.”
        </p>
        <p className="text-gold font-medium">
          — Piano Student
        </p>
      </div>
    </Reveal>

    {/* SUPPORTING TESTIMONIAL */}
    <Reveal>
      <div className="border border-gray-800 p-6 hover:border-gold transition">
        <p className="text-gray-300 text-sm italic mb-4 leading-relaxed">
          “What stood out for me was the clarity in teaching and the personal guidance.
          Every session felt purposeful and encouraging.”
        </p>
        <p className="text-gold font-medium">
          — Piano Student
        </p>
      </div>
    </Reveal>

  </div>
</section>


{/* FREE DEMO SECTION */}
<section id="free-demo" className="py-24 px-6 bg-black">
  <Reveal>
    <h2 className="text-3xl md:text-4xl font-semibold text-gold mb-3 text-center">
      Book a Free Demo Session
    </h2>
  </Reveal>

  <Reveal>
    <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
      Free demo sessions are conducted <strong>once a week</strong> during a fixed
      time window. Our team will contact you to confirm the exact schedule.
    </p>
  </Reveal>

  <Reveal>
    <DemoForm />
  </Reveal>
</section>

{/* WHATSAPP FLOATING BUTTON */}
<a
  href="https://wa.me/918667759837?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20music%20classes%20at%20Jubal%20Music%20Academy."
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed bottom-6 right-6 z-50
    bg-green-500 text-white
    w-14 h-14
    rounded-full
    flex items-center justify-center
    shadow-lg
    hover:scale-110 transition-transform
  "
  aria-label="Chat on WhatsApp"
>
  {/* WhatsApp Icon (SVG – no library needed) */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path d="M19.11 17.83c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.86c.14.18 1.93 2.95 4.68 4.13.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
    <path d="M16.04 2.67C8.93 2.67 3.16 8.44 3.16 15.55c0 2.79.73 5.52 2.12 7.91L3 29.33l6.03-2.24c2.29 1.25 4.88 1.9 7.01 1.9 7.11 0 12.88-5.77 12.88-12.88S23.15 2.67 16.04 2.67zm0 23.08c-2.01 0-4.57-.66-6.56-1.9l-.47-.28-3.58 1.33 1.36-3.48-.31-.5c-1.25-2-1.91-4.33-1.91-6.77 0-6.46 5.26-11.72 11.72-11.72 6.46 0 11.72 5.26 11.72 11.72 0 6.46-5.26 11.72-11.72 11.72z" />
  </svg>
</a>

<WhatsAppFloat />
    </div>
  );
}
