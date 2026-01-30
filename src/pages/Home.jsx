import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";
import DemoForm from "../components/DemoForm";
import WhatsAppFloat from "../components/WhatsAppFloat";
import InstagramSection from "../components/InstagramSection";
import logo from "../assets/jma-logo.png";
import HomeTestimonialsSlider from "../components/HomeTestimonialsSlider";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-dark text-white">
      <Navbar />

      {/* HERO */}
      <section 
      id = 'home' 
      className="min-h-screen flex items-center justify-center px-4 pt-24">
        <motion.div
          className="flex flex-col items-center text-center gap-4 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img src={logo} alt="Jubal Music Academy" className="w-40 md:w-52" />

          <h1 className="text-4xl md:text-5xl font-semibold text-gold">
            Jubal Music Academy
          </h1>

          <p className="text-lg md:text-xl text-gray-300 italic">
            Training Hands, Tuning Hearts
          </p>

          <p className="text-gray-400 text-sm md:text-base">
            Structured music education for students, performers, and church musicians,
            guided by clarity, discipline, and purpose.
          </p>

          <button
            onClick={() =>
              document.getElementById("free-demo")?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-4 bg-gold text-black px-8 py-3 font-medium"
          >
            Book a Free Demo
          </button>
        </motion.div>
      </section>

      <section
  id="about"
  className="py-28 px-6 bg-[#0B0F14]"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT: TEXT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#F5C451]">
        About JMA
      </h2>

      <p className="text-[#B8C1CC] text-lg leading-relaxed mb-4">
        Jubal Music Academy (JMA) exists to equip musicians with skill,
        discipline, and purpose — helping them grow not just as performers,
        but as confident, responsible musicians.
      </p>

      <p className="text-[#B8C1CC] leading-relaxed mb-4">
        With a strong focus on structured learning, mentorship, and real-world
        application, JMA supports students across instruments, levels, and
        callings — including a dedicated emphasis on church musicianship.
      </p>

      <p className="text-[#B8C1CC] leading-relaxed">
        Every program at JMA is designed with clarity, progression, and
        long-term growth in mind.
      </p>
    </div>

    {/* RIGHT: HIGHLIGHTS */}
    <div className="bg-[#121821] p-8 rounded-xl space-y-4 text-[#B8C1CC]">
      <div>🎹 Keyboard • Guitar • Piano • Music Foundations</div>
      <div>⛪ Dedicated programs for church musicians</div>
      <div>📈 Clear learning paths, not random lessons</div>
      <div>🤝 Mentorship-driven, student-first approach</div>
    </div>

  </div>
</section>

      {/* TRANSFORMATION STRIP */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold text-gold mb-2">Play with Structure</h3>
            <p className="text-gray-400 text-sm">
              Learn music systematically with clear techniques, patterns,
              and progression instead of random trial-and-error.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gold mb-2">Grow in Confidence</h3>
            <p className="text-gray-400 text-sm">
              Build confidence through consistent training, guided practice,
              and musical understanding.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gold mb-2">Serve with Purpose</h3>
            <p className="text-gray-400 text-sm">
              Apply your skills meaningfully—whether on stage, in exams,
              or in church worship settings.
            </p>
          </div>
        </div>
      </section>

      

      {/* PROGRAM */}
      <section 
      id="programs"
      className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gold mb-4">
            Program
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our program is designed as structured learning paths across disciplines,
            handled by specialised faculty and overseen through a unified teaching approach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Reveal>
            <div className="border border-gray-800 p-6">
              <h3 className="text-xl text-gold mb-3">Piano</h3>
              <p className="text-gray-400 text-sm">
                Classical and contemporary piano training focused on posture,
                technique, tone control, sight-reading, and musical expression.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="border border-gray-800 p-6">
              <h3 className="text-xl text-gold mb-3">Electronic Keyboard</h3>
              <p className="text-gray-400 text-sm">
                Practical keyboard training covering chords, accompaniment patterns,
                rhythm, and confidence in live playing situations.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="border border-gray-800 p-6">
              <h3 className="text-xl text-gold mb-3">Guitar</h3>
              <p className="text-gray-400 text-sm">
                Classical, plectrum, and contemporary guitar training with emphasis
                on rhythm, clarity, fretboard understanding, and expression.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="border border-gray-800 p-6">
              <h3 className="text-xl text-gold mb-3">Vocals</h3>
              <p className="text-gray-400 text-sm">
                Vocal training focused on pitch accuracy, breath control, tone development,
                diction, and confident singing in solo and group settings.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="border border-gray-800 p-6">
              <h3 className="text-xl text-gold mb-3">Drums</h3>
              <p className="text-gray-400 text-sm">
                Rhythm-based drum training emphasizing timing, coordination,
                groove, and ensemble playing.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="border border-gray-800 p-6">
              <h3 className="text-xl text-gold mb-3">Music Theory</h3>
              <p className="text-gray-400 text-sm">
                Practical theory lessons to strengthen understanding,
                reading skills, and overall musical maturity.
              </p>
            </div>
          </Reveal>
        </div>

        {/* WORSHIP KEYS */}
        <div className="mt-24 max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gold mb-4">
            Worship Keys Program
          </h3>
          <p className="text-gray-300 mb-10">
            A dedicated keyboard pathway created specifically for church musicians,
            focusing on musical sensitivity, confidence, and worship flow.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-800 p-6">
              <h4 className="text-lg text-gold mb-2">Foundation</h4>
              <p className="text-gray-400 text-sm">
                Keyboard basics, posture, chords, rhythm, and understanding
                the role of keys in worship.
              </p>
            </div>

            <div className="border border-gray-800 p-6">
              <h4 className="text-lg text-gold mb-2">Intermediate</h4>
              <p className="text-gray-400 text-sm">
                Chord inversions, transitions, playing in different keys,
                and confidence in live worship settings.
              </p>
            </div>

            <div className="border border-gray-800 p-6">
              <h4 className="text-lg text-gold mb-2">Advanced</h4>
              <p className="text-gray-400 text-sm">
                Advanced worship flow, modulation, spontaneous playing,
                team coordination, and leadership-oriented musicianship.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/programs/worship-keys")}
            className="mt-10 bg-gold text-black px-8 py-3 font-medium"
          >
            View Worship Keys Program
          </button>
        </div>
      </section>

      <section className="py-24 px-6 bg-black">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* IMAGE */}
    <div className="flex justify-center">
      <img
        src="/images/daniel.jpg"
        alt="Daniel Prabakar - Founder, Jubal Music Academy"
        className="rounded-lg max-w-sm w-full"
      />
    </div>

    {/* CONTENT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold text-gold mb-4">
        Meet the Founder
      </h2>

      <p className="text-gray-300 mb-4 leading-relaxed">
        I’m Daniel Prabakar — a Western Classical Pianist and Music Educator with
        over a decade of experience as a performer and more than four years of
        dedicated teaching. Music is not just a skill for me; it is my calling.
      </p>

      <p className="text-gray-300 mb-4 leading-relaxed">
        Jubal Music Academy was founded to provide
        <strong> structured, purposeful, and long-term music education</strong>,
        helping students grow steadily in technique, understanding, and confidence.
      </p>

      <p className="text-gray-300 mb-5 leading-relaxed">
        While I lead the academy and oversee the curriculum, JMA functions with
        a <strong>team of specialised faculty</strong>, ensuring focused instruction
        across every discipline with consistent teaching standards.
      </p>

      <ul className="text-gray-400 text-sm space-y-2">
        <li>• Structured training across Piano, Keyboard, Guitar & Music Theory</li>
        <li>• Dedicated pathways for church musicians and worship teams</li>
        <li>• Faculty-led instruction with founder oversight</li>
      </ul>
    </div>

  </div>
</section>

{/* TESTIMONIALS */}

<HomeTestimonialsSlider />



      <InstagramSection />

      {/* FREE DEMO */}
      <section id="free-demo" className="py-24 px-6 bg-black">
        <h2 className="text-3xl md:text-4xl font-semibold text-gold mb-6 text-center">
          Book a Free Demo Session
        </h2>
        <DemoForm />
      </section>

      <WhatsAppFloat />
    </div>
  );
}