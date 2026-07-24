import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Music, Star, CheckCircle, ChevronDown, Play, Users, Clock, Award,
  BookOpen, Headphones, Mic, Shield, Zap, Heart, X, ArrowRight, Globe,
  MessageCircle, FileText, Download, Video, RefreshCw, Lock, ChevronRight,
  ExternalLink, Quote, AlertCircle,
} from "lucide-react";
import Daniel from "../assets/Daniel.jpg";
import Logo from "../assets/jma-logo.png";
import { callBackend, BackendError } from "../lib/appsScript";

const WEBSITE = "https://www.jubalmusicacademy.com";

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCountUp(target, active, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let val = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      val += step;
      if (val >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(val));
    }, 16);
    return () => clearInterval(t);
  }, [active, target, duration]);
  return count;
}

// ─── Primitives ───────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = "" }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function AmberText({ children, className = "" }) {
  return (
    <span className={className} style={{
      background: "linear-gradient(120deg,#FCD34D 0%,#F59E0B 45%,#D97706 100%)",
      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
    }}>
      {children}
    </span>
  );
}

function VioletText({ children }) {
  return (
    <span style={{
      background: "linear-gradient(120deg,#A78BFA,#7C3AED)",
      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
    }}>
      {children}
    </span>
  );
}

function Badge({ children, variant = "amber" }) {
  const s = {
    amber: { bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.3)", color: "#F59E0B" },
    violet: { bg: "rgba(124,58,237,0.12)", border: "rgba(124,58,237,0.35)", color: "#A78BFA" },
    green: { bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.3)", color: "#34d399" },
  }[variant];
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
      style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}>
      {children}
    </span>
  );
}

function PrimaryBtn({ children, onClick, large = false, className = "", href }) {
  const [h, setH] = useState(false);
  const cls = `inline-flex items-center gap-2 font-bold rounded-full cursor-pointer transition-all ${large ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"} ${className}`;
  const style = {
    background: h ? "linear-gradient(135deg,#FBBF24,#F59E0B 50%,#D97706)" : "linear-gradient(135deg,#FCD34D,#F59E0B 55%,#D97706)",
    color: "#07091A",
    boxShadow: h ? "0 8px 32px rgba(245,158,11,0.5)" : "0 4px 20px rgba(245,158,11,0.3)",
    transform: h ? "translateY(-2px) scale(1.02)" : "none",
  };
  if (href)
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{children}</a>;
  return <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} className={cls} style={style}>{children}</button>;
}

function SecondaryBtn({ children, onClick, href }) {
  const [h, setH] = useState(false);
  const cls = "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer";
  const style = { background: h ? "rgba(245,158,11,0.07)" : "transparent", border: "1px solid rgba(245,158,11,0.3)", color: "#F59E0B", transform: h ? "translateY(-1px)" : "none" };
  if (href)
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{children}</a>;
  return <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} className={cls} style={style}>{children}</button>;
}

function GlassCard({ children, className = "", style = {}, onMouseEnter, onMouseLeave }) {
  return (
    <div className={`rounded-2xl ${className}`}
      style={{ background: "rgba(15,22,40,0.7)", border: "1px solid rgba(245,158,11,0.1)", backdropFilter: "blur(16px)", ...style }}
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, heading, sub, variant = "amber" }) {
  return (
    <div className="text-center mb-16" style={{ fontFamily: "'Manrope',sans-serif" }}>
      <Badge variant={variant === "violet" ? "violet" : "amber"}>{eyebrow}</Badge>
      <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-white">{heading}</h2>
      {sub && <p className="mt-4 text-lg mx-auto max-w-xl" style={{ color: "#8B93A7", fontFamily: "'Inter',sans-serif", fontWeight: 400 }}>{sub}</p>}
    </div>
  );
}

function SectionCTA({ label, onClick, sub }) {
  return (
    <div className="mt-14 flex flex-col items-center gap-3">
      <PrimaryBtn onClick={onClick}>{label} <ArrowRight size={15} /></PrimaryBtn>
      {sub && <p className="text-xs" style={{ color: "#444D60" }}>{sub}</p>}
    </div>
  );
}

// ─── Form primitives — defined OUTSIDE modal to prevent focus loss on re-render ─
const F_STYLE = { background: "#07091A", border: "1px solid rgba(245,158,11,0.18)", color: "#F1F5F9", fontFamily: "'Inter',sans-serif", borderRadius: "12px" };
const F_CLS = "w-full px-4 py-3 text-sm outline-none transition-all";

function FormField({ label, placeholder, type = "text", value, onChange, error }) {
  return (
    <div>
      <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#8B93A7", fontFamily: "'Manrope',sans-serif" }}>{label}</label>
      <input className={F_CLS} style={{ ...F_STYLE, borderColor: error ? "rgba(239,68,68,0.5)" : "rgba(245,158,11,0.18)" }}
        type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
      {error && <p className="text-xs mt-1" style={{ color: "#f87171" }}>{error}</p>}
    </div>
  );
}

function FormSelect({ label, value, onChange, options }) {
  return (
    <div>
      <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#8B93A7", fontFamily: "'Manrope',sans-serif" }}>{label}</label>
      <select className={F_CLS} style={{ ...F_STYLE, appearance: "none" }} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

// ─── Batch Countdown ──────────────────────────────────────────────────────────
function BatchCountdown({ onRegister }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [batchDates, setBatchDates] = useState({ thu: "", fri: "", sat: "" });

  useEffect(() => {
    function getNextThursdayUTC() {
      const now = new Date();
      const istNow = new Date(now.getTime() + 5.5 * 3600000);
      const day = istNow.getUTCDay();
      const h = istNow.getUTCHours();
      let daysToThursday = (4 - day + 7) % 7;
      if (daysToThursday === 0 && h >= 9) daysToThursday = 7;
      if (day === 5 || day === 6) daysToThursday = (4 - day + 7) % 7 || 7;
      const target = new Date(istNow);
      target.setUTCDate(istNow.getUTCDate() + daysToThursday);
      target.setUTCHours(9, 0, 0, 0);
      return new Date(target.getTime() - 5.5 * 3600000);
    }
    const target = getNextThursdayUTC();
    const thu = new Date(target);
    const fri = new Date(target); fri.setUTCDate(fri.getUTCDate() + 1);
    const sat = new Date(target); sat.setUTCDate(sat.getUTCDate() + 2);
    const fmt = (d) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short", timeZone: "Asia/Kolkata" });
    setBatchDates({ thu: fmt(thu), fri: fmt(fri), sat: fmt(sat) });
    const tick = setInterval(() => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { clearInterval(tick); return; }
      setTimeLeft({ days: Math.floor(diff / 86400000), hours: Math.floor((diff % 86400000) / 3600000), minutes: Math.floor((diff % 3600000) / 60000), seconds: Math.floor((diff % 60000) / 1000) });
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  const Unit = ({ val, label }) => (
    <div className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-extrabold tabular-nums" style={{ color: "#F59E0B", fontFamily: "'Manrope',sans-serif", textShadow: "0 0 30px rgba(245,158,11,0.4)" }}>{pad(val)}</div>
      <div className="text-xs uppercase tracking-widest mt-1 font-semibold" style={{ color: "#8B93A7" }}>{label}</div>
    </div>
  );

  const days = [
    { label: "Day 1", date: batchDates.thu, tag: "Self-Paced", icon: "📖", color: "#A78BFA", desc: "Foundations — unlock materials at 9AM IST" },
    { label: "Day 2", date: batchDates.fri, tag: "Self-Paced", icon: "🎵", color: "#60A5FA", desc: "Playing Worship Songs — practice at your pace" },
    { label: "Day 3", date: batchDates.sat, tag: "LIVE SESSION", icon: "🔴", color: "#F59E0B", desc: "Worship Application — join live with Daniel Prabakar" },
  ];

  return (
    <section className="py-16 px-6 relative overflow-hidden" style={{ background: "#0C1228", borderTop: "1px solid rgba(245,158,11,0.06)", borderBottom: "1px solid rgba(245,158,11,0.06)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10 rounded-full" style={{ background: "radial-gradient(ellipse,#F59E0B,transparent 70%)", filter: "blur(60px)" }} />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3" style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)", color: "#34d399" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #34d399", animation: "pulse 2s infinite" }} />
            Next Batch Enrolling Now
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2" style={{ fontFamily: "'Manrope',sans-serif" }}>
            Next Batch Starts <AmberText>This Thursday at 9AM IST</AmberText>
          </h2>
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-10">
          <Unit val={timeLeft.days} label="Days" />
          <span className="text-3xl font-bold mb-4" style={{ color: "rgba(245,158,11,0.4)" }}>:</span>
          <Unit val={timeLeft.hours} label="Hours" />
          <span className="text-3xl font-bold mb-4" style={{ color: "rgba(245,158,11,0.4)" }}>:</span>
          <Unit val={timeLeft.minutes} label="Minutes" />
          <span className="text-3xl font-bold mb-4" style={{ color: "rgba(245,158,11,0.4)" }}>:</span>
          <Unit val={timeLeft.seconds} label="Seconds" />
        </div>
        <div className="grid grid-cols-3 gap-3 mb-8">
          {days.map((d, i) => (
            <div key={i} className="rounded-2xl p-4 text-center relative overflow-hidden"
              style={{ background: "rgba(15,22,40,0.8)", border: `1px solid ${d.tag === "LIVE SESSION" ? "rgba(245,158,11,0.3)" : "rgba(255,255,255,0.06)"}`, boxShadow: d.tag === "LIVE SESSION" ? "0 0 20px rgba(245,158,11,0.08)" : "none" }}>
              {d.tag === "LIVE SESSION" && <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,#F59E0B,transparent)" }} />}
              <div className="text-2xl mb-1">{d.icon}</div>
              <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: d.color }}>{d.label}</div>
              <div className="text-sm font-bold text-white" style={{ fontFamily: "'Manrope',sans-serif" }}>{d.date}</div>
              <div className="mt-1.5 inline-block px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: `${d.color}18`, color: d.color }}>{d.tag}</div>
              <p className="mt-2 text-xs leading-snug hidden md:block" style={{ color: "#8B93A7" }}>{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <PrimaryBtn large onClick={onRegister}>Secure My Spot — ₹249 <ArrowRight size={16} /></PrimaryBtn>
          <p className="mt-3 text-xs" style={{ color: "#444D60" }}>🔒 Limited seats per batch · Days 1 &amp; 2 self-paced · Day 3 live with Daniel Prabakar</p>
        </div>
      </div>
    </section>
  );
}

// ─── Registration Modal ───────────────────────────────────────────────────────
function RegistrationModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  // phase: "form" | "submitting" | "awaiting-confirmation" | "dismissed" | "error"
  const [phase, setPhase] = useState("form");
  const [submitError, setSubmitError] = useState(null);
  const [registrationId, setRegistrationId] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "India", city: "", instrument: "", experience: "", church: "", level: "", challenge: "", expectations: "", referral: "" });

  const up = (k, v) => { setForm((f) => ({ ...f, [k]: v })); if (errors[k]) setErrors((e) => { const n = { ...e }; delete n[k]; return n; }); };

  const validateStep1 = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.phone.trim() || form.phone.length < 8) e.phone = "Valid phone required";
    if (!form.city.trim()) e.city = "City is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Razorpay's own callbacks are NOT proof of payment — only the backend's
  // independent verification (webhook) is. handler/ondismiss only move the
  // UI to a "pending confirmation" state, never a final success state.
  //
  // Deliberately NOT using callback_url here: per Razorpay's docs, callback_url
  // is only for WebView/redirect integrations and silently bypasses `handler`
  // in a standard web integration like this one — it isn't a general
  // "redirect after success" option. `handler` is the documented mechanism
  // for standard web Checkout, and Razorpay's Standard Checkout keeps the
  // whole payment flow (including netbanking/UPI/wallets) inside its own
  // overlay, so `handler` fires in-page without a full browser navigation.
  const openCheckout = (order) => {
    const rzp = new window.Razorpay({
      key: order.keyId,
      amount: order.amount,
      currency: order.currency,
      order_id: order.orderId,
      name: "Jubal Music Academy",
      description: "Worship Keys Challenge — 3 Day Workshop",
      prefill: { name: form.name, email: form.email, contact: form.phone },
      theme: { color: "#F59E0B" },
      handler: () => setPhase("awaiting-confirmation"),
      modal: { ondismiss: () => setPhase("dismissed") },
    });
    rzp.open();
  };

  const handleSubmit = async () => {
    setPhase("submitting");
    setSubmitError(null);
    try {
      const { registrationId: regId } = await callBackend("register", {
        name: form.name, email: form.email, phone: form.phone, country: form.country, city: form.city,
        instrument: form.instrument, experience: form.experience, level: form.level, church: form.church,
        expectations: form.expectations, referral: form.referral,
      });
      setRegistrationId(regId);
      const order = await callBackend("createOrder", { registrationId: regId });
      openCheckout(order);
    } catch (err) {
      setSubmitError({ kind: err instanceof BackendError ? err.kind : "network", message: err.message });
      setPhase("error");
    }
  };

  // Registration already succeeded — only re-run createOrder, never re-register.
  const retryPayment = async () => {
    setPhase("submitting");
    setSubmitError(null);
    try {
      const order = await callBackend("createOrder", { registrationId });
      openCheckout(order);
    } catch (err) {
      setSubmitError({ kind: err instanceof BackendError ? err.kind : "network", message: err.message });
      setPhase("error");
    }
  };

  const handleRetry = () => (registrationId ? retryPayment() : handleSubmit());

  if (phase === "submitting")
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(4,6,20,0.97)", backdropFilter: "blur(16px)" }}>
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(245,158,11,0.1)", border: "2px solid rgba(245,158,11,0.3)" }}>
            <svg className="animate-spin" width="36" height="36" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(245,158,11,0.2)" strokeWidth="3" />
              <path d="M18 4 a14 14 0 0 1 14 14" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="text-2xl font-extrabold text-white mb-2" style={{ fontFamily: "'Manrope',sans-serif" }}>Saving your details…</h3>
          <p className="text-sm" style={{ color: "#8B93A7" }}>Just a moment — almost there.</p>
        </div>
      </div>
    );

  if (phase === "awaiting-confirmation")
    return <SuccessPage registrationId={registrationId} />;

  if (phase === "dismissed")
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(4,6,20,0.97)", backdropFilter: "blur(16px)" }}>
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(245,158,11,0.1)", border: "2px solid rgba(245,158,11,0.3)" }}>
            <Lock size={32} color="#F59E0B" />
          </div>
          <h3 className="text-2xl font-extrabold text-white mb-2" style={{ fontFamily: "'Manrope',sans-serif" }}>Payment not completed</h3>
          <p className="text-sm mb-6" style={{ color: "#8B93A7" }}>
            Your registration ({registrationId}) is saved. You can retry payment whenever you're ready.
          </p>
          <div className="flex flex-col gap-3">
            <PrimaryBtn large className="w-full justify-center" onClick={retryPayment}><Lock size={14} /> Retry Payment — ₹249</PrimaryBtn>
            <button onClick={onClose} className="text-xs cursor-pointer transition-colors hover:text-white" style={{ color: "#444D60" }}>Close</button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(4,6,20,0.92)", backdropFilter: "blur(12px)" }}>
      <div className="relative w-full max-w-lg rounded-3xl overflow-hidden" style={{ background: "#0C1228", border: "1px solid rgba(245,158,11,0.2)", boxShadow: "0 40px 80px rgba(0,0,0,0.6)" }}>
        <div className="h-px" style={{ background: "linear-gradient(90deg,transparent,#F59E0B,transparent)" }} />
        <div className="p-6 border-b" style={{ borderColor: "rgba(245,158,11,0.08)" }}>
          <div className="flex items-center justify-between">
            <div>
              <Badge>Worship Keys Challenge</Badge>
              <h3 className="mt-2 text-xl font-bold text-white" style={{ fontFamily: "'Manrope',sans-serif" }}>Reserve Your Seat — ₹249</h3>
            </div>
            <button onClick={onClose} className="p-2 rounded-full cursor-pointer" style={{ background: "rgba(255,255,255,0.04)" }}><X size={18} color="#8B93A7" /></button>
          </div>
          <div className="flex gap-2 mt-4">
            {[1, 2].map((s) => (
              <div key={s} className="h-1.5 flex-1 rounded-full transition-all duration-500" style={{ background: s <= step ? "linear-gradient(90deg,#FCD34D,#F59E0B)" : "rgba(255,255,255,0.07)" }} />
            ))}
          </div>
          <p className="mt-2 text-xs" style={{ color: "#8B93A7" }}>Step {step} of 2 — {step === 1 ? "Personal Details" : "Music Background"}</p>
        </div>
        <div className="p-6 space-y-4 max-h-[58vh] overflow-y-auto">
          {step === 1 ? (
            <>
              <FormField label="Full Name *" placeholder="Your full name" value={form.name} onChange={v => up("name", v)} error={errors.name} />
              <FormField label="Email Address *" placeholder="you@email.com" type="email" value={form.email} onChange={v => up("email", v)} error={errors.email} />
              <FormField label="Phone Number *" placeholder="+91 98765 43210" value={form.phone} onChange={v => up("phone", v)} error={errors.phone} />
              <div className="grid grid-cols-2 gap-3">
                <FormField label="Country" placeholder="India" value={form.country} onChange={v => up("country", v)} />
                <FormField label="City *" placeholder="Mumbai" value={form.city} onChange={v => up("city", v)} error={errors.city} />
              </div>
            </>
          ) : (
            <>
              <FormSelect label="Primary Instrument" value={form.instrument} onChange={v => up("instrument", v)} options={["Keyboard", "Piano", "Both Keyboard & Piano", "Guitar", "Other"]} />
              <FormSelect label="Playing Experience" value={form.experience} onChange={v => up("experience", v)} options={["Complete Beginner", "Less than 6 months", "6 months – 1 year", "1–2 years", "2–5 years", "5+ years"]} />
              <FormSelect label="Current Skill Level" value={form.level} onChange={v => up("level", v)} options={["Absolute Beginner", "Beginner", "Intermediate", "Advanced Beginner"]} />
              <FormField label="Church Name (optional)" placeholder="Your church" value={form.church} onChange={v => up("church", v)} />
              <div>
                <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#8B93A7", fontFamily: "'Manrope',sans-serif" }}>Biggest Challenge</label>
                <textarea className="w-full px-4 py-3 text-sm outline-none transition-all resize-none" rows={2} style={F_STYLE} placeholder="What stops you from playing with confidence?" value={form.challenge} onChange={e => up("challenge", e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#8B93A7", fontFamily: "'Manrope',sans-serif" }}>Workshop Expectations</label>
                <textarea className="w-full px-4 py-3 text-sm outline-none transition-all resize-none" rows={2} style={F_STYLE} placeholder="What do you hope to achieve in 3 days?" value={form.expectations} onChange={e => up("expectations", e.target.value)} />
              </div>
              <FormSelect label="How did you hear about us?" value={form.referral} onChange={v => up("referral", v)} options={["Instagram", "YouTube", "Friend / Family", "Church", "Google Search", "WhatsApp", "Other"]} />
            </>
          )}
          {phase === "error" && step === 2 && (
            <div className="flex items-start gap-3 p-4 rounded-2xl" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.3)" }}>
              <AlertCircle size={18} color="#f87171" className="flex-shrink-0 mt-0.5" />
              <p className="text-sm" style={{ color: "#fca5a5" }}>{submitError?.message}</p>
            </div>
          )}
        </div>
        <div className="p-6 border-t" style={{ borderColor: "rgba(245,158,11,0.08)" }}>
          {step === 1 ? (
            <PrimaryBtn large className="w-full justify-center" onClick={() => { if (validateStep1()) setStep(2); }}>Continue to Step 2 <ChevronRight size={16} /></PrimaryBtn>
          ) : (
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-full text-sm font-semibold cursor-pointer" style={{ border: "1px solid rgba(245,158,11,0.15)", color: "#8B93A7" }}>← Back</button>
              <PrimaryBtn large className="flex-1 justify-center" onClick={phase === "error" ? handleRetry : handleSubmit}>
                <Lock size={14} /> {phase === "error" ? "Try Again" : "Complete & Pay — ₹249"}
              </PrimaryBtn>
            </div>
          )}
          <p className="mt-3 text-center text-xs" style={{ color: "#444D60" }}>🔒 Secure & encrypted · Powered by Razorpay</p>
        </div>
      </div>
    </div>
  );
}

// ─── Success Page ─────────────────────────────────────────────────────────────
function SuccessPage({ registrationId }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCount(c => { if (c >= 4) { clearInterval(t); return c; } return c + 1; }), 500);
    return () => clearInterval(t);
  }, []);

  const steps = [
    { icon: <MessageCircle size={20} />, title: "WhatsApp Group Invite", desc: "You'll receive a link to join our exclusive student WhatsApp group within 24 hours." },
    { icon: <Clock size={20} />, title: "Batch Timing Confirmation", desc: "Session schedule and Zoom link will be shared directly to your email and WhatsApp." },
    { icon: <FileText size={20} />, title: "Pre-Workshop Checklist", desc: "A short prerequisites guide arrives before Day 1 so you come fully prepared." },
    { icon: <Music size={20} />, title: "Day 1 Begins", desc: "Show up, plug in your keyboard, and begin your worship keys journey." },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#07091A", fontFamily: "'Inter',sans-serif" }}>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20" style={{ background: "radial-gradient(circle at 70% 20%,rgba(124,58,237,0.5),transparent 65%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-15" style={{ background: "radial-gradient(circle at 30% 80%,rgba(245,158,11,0.4),transparent 65%)", filter: "blur(80px)" }} />
      </div>
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20">
        <a href={WEBSITE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 mb-16">
          <img src={Logo} alt="Jubal Music Academy" className="h-10 w-auto object-contain" />
          <span className="font-extrabold text-white text-base tracking-tight" style={{ fontFamily: "'Manrope',sans-serif" }}>Jubal Music Academy</span>
        </a>
        <div className="relative mb-8">
          <div className="w-28 h-28 rounded-full flex items-center justify-center" style={{ background: "rgba(52,211,153,0.1)", border: "2px solid rgba(52,211,153,0.3)", boxShadow: "0 0 60px rgba(52,211,153,0.15)" }}>
            <CheckCircle size={52} color="#34d399" strokeWidth={1.5} />
          </div>
          <div className="absolute inset-0 rounded-full" style={{ border: "1px dashed rgba(52,211,153,0.2)", animation: "wkc-spin 8s linear infinite" }} />
        </div>
        <div className="text-center max-w-xl mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)", color: "#34d399" }}>✓ Payment Received</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-3" style={{ fontFamily: "'Manrope',sans-serif" }}>
            Payment&nbsp;
            <span style={{ background: "linear-gradient(120deg,#FCD34D,#F59E0B 45%,#D97706)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Received!</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "#8B93A7" }}>
            Thank you! We've received your payment and it's being verified. Once verified, you'll receive a confirmation email and WhatsApp message with <strong style={{ color: "#CBD5E1" }}>batch timings, session links, and prerequisites</strong> — this usually takes just a few minutes.
          </p>
          {registrationId && (
            <p className="mt-3 text-xs" style={{ color: "#444D60" }}>Reference ID: {registrationId}</p>
          )}
        </div>
        <div className="mt-10 w-full max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-center mb-6" style={{ color: "#8B93A7" }}>What happens once confirmed</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="p-5 rounded-2xl flex gap-4 items-start"
                style={{ background: "rgba(15,22,40,0.7)", border: "1px solid rgba(245,158,11,0.1)", backdropFilter: "blur(12px)", opacity: count > i ? 1 : 0, transform: count > i ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.5s ease, transform 0.5s ease" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(245,158,11,0.08)", color: "#F59E0B" }}>{s.icon}</div>
                <div>
                  <p className="font-bold text-white text-sm mb-1" style={{ fontFamily: "'Manrope',sans-serif" }}>{s.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#8B93A7" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 max-w-lg text-center p-6 rounded-2xl" style={{ background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.15)" }}>
          <p className="text-base italic leading-relaxed" style={{ color: "#CBD5E1" }}>"The journey of a thousand songs begins with a single chord. You've taken that first step — now let's make it count."</p>
          <p className="mt-3 text-xs font-semibold" style={{ color: "#A78BFA" }}>— Daniel Prabakar, Founder · Jubal Music Academy</p>
        </div>
        <div className="mt-10 text-center">
          <p className="text-2xl font-extrabold text-white mb-1" style={{ fontFamily: "'Manrope',sans-serif" }}>We're rooting for you. 🙏🎹</p>
          <p className="text-sm" style={{ color: "#8B93A7" }}>See you at Day 1. Come ready to play.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <a href={WEBSITE} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base"
            style={{ background: "linear-gradient(135deg,#FCD34D,#F59E0B 55%,#D97706)", color: "#07091A", boxShadow: "0 4px 20px rgba(245,158,11,0.3)" }}>
            <Globe size={16} /> Explore More Courses
          </a>
          <a href="/programs/worship-keys-challenge"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-sm"
            style={{ border: "1px solid rgba(245,158,11,0.25)", color: "#F59E0B" }}>
            Back to Challenge Page
          </a>
        </div>
        <p className="mt-12 text-xs text-center" style={{ color: "#444D60" }}>Questions? <span style={{ color: "#F59E0B" }}>daniel.p@jubalmusicacademy.com</span></p>
      </div>
      <style>{`@keyframes wkc-spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>
    </div>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function WorshipKeysChallenge() {
  const [searchParams] = useSearchParams();
  if (searchParams.get("payment") === "success")
    return <SuccessPage registrationId={searchParams.get("registrationId")} />;

  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const statsRef = useRef(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const h = () => {
      setScrolled(window.scrollY > 60);
      const el = document.documentElement;
      setScrollPct(Math.min(100, (window.scrollY / (el.scrollHeight - el.clientHeight)) * 100));
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStatsActive(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const s1 = useCountUp(500, statsActive);
  const s2 = useCountUp(25, statsActive);
  const s3 = useCountUp(1000, statsActive);

  const A = "#F59E0B", BG = "#07091A", BG2 = "#0C1228", BG3 = "#0A0F1E", CARD = "#0F1628", MUT = "#8B93A7", TXT = "#CBD5E1";

  const problems = [
    { icon: <Video size={20} />, text: "I copy YouTube tutorials without understanding what I'm actually playing" },
    { icon: <Heart size={20} />, text: "I panic and freeze the moment I play in front of others" },
    { icon: <Music size={20} />, text: "I can't figure out which chords belong together in a worship song" },
    { icon: <Headphones size={20} />, text: "Playing by ear feels completely out of reach for me" },
    { icon: <Clock size={20} />, text: "My timing falls apart the moment singers join in" },
    { icon: <RefreshCw size={20} />, text: "Switching keys mid-worship throws me completely off" },
    { icon: <Mic size={20} />, text: "I freeze when asked to accompany singers spontaneously" },
    { icon: <BookOpen size={20} />, text: "Chord progressions feel like an unsolvable puzzle" },
  ];

  const curriculum = [
    { day: "Day 01", title: "Build Your Musical Foundation", color: A, icon: <Music size={20} />, topics: ["Understand the keyboard with confidence", "Learn musical notes & intervals", "Discover Solfege (Do, Re, Mi)", "Train your ears through practical exercises", "Build the foundation every worship musician needs"], outcome: "Walk away with the confidence to understand the keyboard instead of just memorizing keys." },
    { day: "Day 02", title: "Develop Your Musical Ear", color: "#8B5CF6", icon: <Headphones size={20} />, topics: ["Understand scales with ease", "Improve pitch recognition", "Train your ears to hear musical movement", "Apply ear training to worship music", "Start playing simple worship progressions"], outcome: "Begin recognizing melodies and playing worship music with greater confidence." },
    { day: "Day 03", title: "Play & Lead with Confidence", color: "#10B981", icon: <Heart size={20} />, topics: ["Develop the mindset of a worship musician", "Apply everything you've learned", "Take part in live coaching", "Receive practical feedback", "Play your first worship song confidently"], outcome: "Leave the workshop equipped to confidently begin your worship keyboard journey." },
  ];

  const features = [
    { icon: <Zap size={20} />, title: "Practical First", desc: "Every concept is applied to a real worship song immediately — no dry theory lectures." },
    { icon: <Mic size={20} />, title: "Live Instructor Feedback", desc: "Ask questions directly and get personal corrections from Daniel in real time." },
    { icon: <Users size={20} />, title: "Small Intimate Batches", desc: "Limited seats ensure every student receives genuine personal attention." },
    { icon: <Heart size={20} />, title: "Church-Focused Curriculum", desc: "Every lesson is built around what worship teams actually need on Sunday service." },
    { icon: <Globe size={20} />, title: "Lifetime Community", desc: "Join a growing network of worship musicians from churches across India and beyond." },
    { icon: <Shield size={20} />, title: "Truly Affordable", desc: "World-class coaching at ₹249 — accessible to every church musician who wants to grow." },
  ];

  const bonuses = [
    { icon: <FileText size={22} />, title: "PDF Chord Charts", desc: "Printable charts for all major worship progressions in every key" },
    { icon: <Headphones size={22} />, title: "Practice Backing Tracks", desc: "12 professionally produced tracks to practise along with daily" },
    { icon: <Download size={22} />, title: "Complete Session Notes", desc: "Comprehensive PDF notes from all 3 days — yours to keep forever" },
    { icon: <Video size={22} />, title: "Lifetime Replay Access", desc: "Rewatch every session as many times as you need, with no expiry" },
    { icon: <Award size={22} />, title: "Completion Certificate", desc: "Official digital certificate to mark your achievement" },
    { icon: <Users size={22} />, title: "Private Community", desc: "Lifetime access to our exclusive worship musicians community" },
  ];

  const testimonials = [
    { name: "Dev", church: "Worship Keys – Foundation", role: "Worship Keys Student", quote: "I felt stuck in my keyboard journey until I joined Jubal Music Academy. Daniel quickly identified what I was missing and guided me with clarity. I noticed real improvement within a short time, and his mentoring greatly increased my confidence.", img: "/images/testimonials/dev.jpg" },
    { name: "C.S", church: "Worship Keys – Foundation", role: "Worship Keys Student", quote: "Daniel's patience, clear explanations, and balance of theory with practical worship made learning so comfortable. I never imagined I'd be able to play like this so quickly. I'm truly grateful for the guidance and encouragement.", img: "/images/testimonials/cs.jpg" },
    { name: "Minda Sofia", church: "Jubal Music Academy", role: "Piano Student", quote: "The structured lessons and individual attention helped me track my progress consistently. The friendly learning environment kept me motivated, and every class helped me grow in confidence as a musician.", img: "/images/testimonials/minda-sofia.jpg" },
  ];

  const faqs = [
    { q: "Who is this workshop designed for?", a: "Church keyboard players, worship team musicians, beginners, and intermediate pianists who want to play worship songs confidently without depending entirely on sheet music or YouTube tutorials." },
    { q: "Do I need a keyboard to participate?", a: "Yes, a basic 5-octave keyboard or piano is recommended. Even an entry-level digital keyboard is perfectly sufficient." },
    { q: "Will session recordings be available?", a: "Yes. All registered students receive lifetime access to full session recordings so you can rewatch and review at your own pace." },
    { q: "Can absolute beginners join?", a: "Absolutely. Day 1 begins from keyboard orientation and understanding notes — the very basics. No prior theory knowledge is required." },
    { q: "Will I receive notes and materials?", a: "Yes — comprehensive PDF notes, chord charts for every key, and 12 practice backing tracks are all included in your ₹249 enrollment." },
    { q: "How do I attend the live sessions?", a: "Sessions are conducted live online via Zoom. You'll receive the meeting link immediately after registration confirmation." },
    { q: "What if I miss a live session?", a: "No problem. All sessions are recorded and you'll have lifetime access to the replays. We still encourage attending live for the Q&A and real-time feedback." },
  ];

  return (
    <>
      <style>{`
        .wkc-page { background:${BG}; overflow-x:hidden; font-family:'Inter',sans-serif; }
        .wkc-page *::-webkit-scrollbar { display:none; }
        .wkc-page { scrollbar-width:none; }
        .wkc-page .fa { animation:wkc-fa 5s ease-in-out infinite; }
        .wkc-page .fb { animation:wkc-fb 4.2s ease-in-out infinite 0.6s; }
        .wkc-page .fc { animation:wkc-fc 6s ease-in-out infinite 1s; }
        @keyframes wkc-fa { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes wkc-fb { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes wkc-fc { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-13px)} }
        .wkc-page .ch { transition:transform 0.3s,box-shadow 0.3s,border-color 0.3s; }
        .wkc-page .ch:hover { transform:translateY(-4px); box-shadow:0 20px 40px rgba(0,0,0,0.5),0 0 30px rgba(245,158,11,0.07); border-color:rgba(245,158,11,0.22) !important; }
        .wkc-page .btn-shimmer { position:relative; overflow:hidden; }
        .wkc-page .btn-shimmer::after { content:''; position:absolute; top:0; left:-100%; width:60%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent); animation:wkc-shimmer 2.8s ease-in-out infinite; }
        @keyframes wkc-shimmer { 0%{left:-100%} 60%,100%{left:160%} }
        .wkc-page .price-glow { animation:wkc-priceGlow 3s ease-in-out infinite; }
        @keyframes wkc-priceGlow { 0%,100%{box-shadow:0 40px 80px rgba(0,0,0,0.6),0 0 40px rgba(245,158,11,0.07)} 50%{box-shadow:0 40px 80px rgba(0,0,0,0.6),0 0 80px rgba(245,158,11,0.18)} }
        .wkc-page .note { position:absolute; pointer-events:none; user-select:none; font-size:1.2rem; opacity:0; animation:wkc-noteFloat var(--dur,8s) ease-in-out var(--delay,0s) infinite; }
        @keyframes wkc-noteFloat { 0%{opacity:0;transform:translateY(0) rotate(0deg)} 10%{opacity:0.15} 80%{opacity:0.08} 100%{opacity:0;transform:translateY(-120px) rotate(20deg)} }
        .wkc-page .scroll-bar { position:fixed; top:0; left:0; height:2px; background:linear-gradient(90deg,#7C3AED,#F59E0B); z-index:100; transition:width 0.1s linear; }
        .wkc-page select option { background:#0C1228; }
        @keyframes wkc-spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
      `}</style>

      <div className="wkc-page">
        <div className="scroll-bar" style={{ width: `${scrollPct}%` }} />
        {showModal && <RegistrationModal onClose={() => setShowModal(false)} />}

        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
          style={{ background: scrolled ? "rgba(7,9,26,0.96)" : "transparent", backdropFilter: scrolled ? "blur(24px)" : "none", borderBottom: scrolled ? "1px solid rgba(245,158,11,0.07)" : "none" }}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
            <a href={WEBSITE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 flex-shrink-0">
              <img src={Logo} alt="Jubal Music Academy" className="h-12 w-auto object-contain" />
              <span className="font-extrabold text-white text-sm tracking-tight" style={{ fontFamily: "'Manrope',sans-serif" }}>Jubal Music Academy</span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              {["Curriculum", "Instructor", "Testimonials", "FAQ"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-white" style={{ color: MUT }}>{l}</a>
              ))}
              <a href={WEBSITE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 transition-colors hover:text-white" style={{ color: MUT }}>Visit Website <ExternalLink size={11} /></a>
            </div>
            <PrimaryBtn onClick={() => setShowModal(true)}>Reserve My Seat <ArrowRight size={14} /></PrimaryBtn>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30" style={{ background: "radial-gradient(circle at 70% 30%,rgba(124,58,237,0.35),transparent 65%)", filter: "blur(60px)" }} />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-20" style={{ background: "radial-gradient(circle at 30% 70%,rgba(245,158,11,0.4),transparent 65%)", filter: "blur(80px)" }} />
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,0.5) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
            {["🎵","🎶","🎹","🎼","🎵","🎶","🎹"].map((n, i) => (
              <span key={i} className="note" style={{ left: `${10 + i * 13}%`, bottom: `${15 + (i % 3) * 20}%`, "--dur": `${7 + i * 1.2}s`, "--delay": `${i * 1.1}s` }}>{n}</span>
            ))}
          </div>
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold" style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.3)", color: "#A78BFA" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #34d399" }} />
                LIVE ONLINE WORKSHOP · 3 DAYS ONLY
              </div>
              <h1 className="font-extrabold leading-[1.06]" style={{ fontFamily: "'Manrope',sans-serif", fontSize: "clamp(2.6rem,5vw,3.9rem)", color: "#fff" }}>
                Play Your First<br /><AmberText>Worship Song</AmberText><br />in Just&nbsp;3&nbsp;Days
              </h1>
              <p className="mt-6 text-lg leading-relaxed max-w-lg" style={{ color: MUT }}>
                The practical foundations every church keyboard player needs to confidently accompany worship songs — even if you're a complete beginner with no music theory background.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryBtn large className="btn-shimmer" onClick={() => setShowModal(true)}>Reserve My Seat — ₹249 <ArrowRight size={16} /></PrimaryBtn>
                <SecondaryBtn onClick={() => document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" })}><Play size={14} /> View Curriculum</SecondaryBtn>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-2.5 max-w-sm">
                {["Beginner Friendly", "Live Online Sessions", "Certificate Included", "Lifetime Community"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-xs font-medium" style={{ color: TXT }}><CheckCircle size={13} color={A} />{b}</div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-3xl overflow-hidden relative" style={{ border: "1px solid rgba(124,58,237,0.2)", boxShadow: "0 40px 80px rgba(0,0,0,0.7),0 0 80px rgba(124,58,237,0.1)" }}>
                  <img src="https://images.unsplash.com/photo-1524578471438-cdd96d68d82c?w=600&h=420&fit=crop&crop=center&auto=format"
                    alt="Keyboardist performing live" className="w-full h-72 object-cover" style={{ filter: "brightness(0.7) saturate(1.15)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(7,9,26,0.7) 0%,transparent 50%)" }} />
                  <div className="absolute bottom-4 left-4 px-3 py-2 rounded-xl text-xs font-semibold" style={{ background: "rgba(7,9,26,0.85)", border: "1px solid rgba(245,158,11,0.2)", color: A, backdropFilter: "blur(8px)" }}>🎹 Worship Keys – 3 Day Challenge</div>
                </div>
                <div className="fa absolute -top-5 -left-5 px-4 py-3 rounded-2xl" style={{ background: "rgba(12,18,40,0.92)", border: "1px solid rgba(245,158,11,0.25)", backdropFilter: "blur(12px)", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
                  <div className="text-2xl font-extrabold" style={{ color: A, fontFamily: "'Manrope',sans-serif" }}>3</div>
                  <div className="text-xs" style={{ color: MUT }}>Intensive Days</div>
                </div>
                <div className="fb absolute -bottom-4 -right-4 px-4 py-3 rounded-2xl flex items-center gap-2" style={{ background: "rgba(12,18,40,0.92)", border: "1px solid rgba(52,211,153,0.2)", backdropFilter: "blur(12px)", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 8px #34d399" }} />
                  <div>
                    <div className="text-xs font-bold text-white" style={{ fontFamily: "'Manrope',sans-serif" }}>LIVE</div>
                    <div className="text-xs" style={{ color: MUT }}>Online</div>
                  </div>
                </div>
                <div className="fc absolute top-1/3 -right-10 px-4 py-3 rounded-2xl" style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.2),rgba(12,18,40,0.92))", border: "1px solid rgba(124,58,237,0.3)", backdropFilter: "blur(12px)", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
                  <div className="text-xs font-medium mb-0.5" style={{ color: MUT }}>Only</div>
                  <div className="text-xl font-extrabold" style={{ color: A, fontFamily: "'Manrope',sans-serif" }}>₹249</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BATCH COUNTDOWN */}
        <BatchCountdown onRegister={() => setShowModal(true)} />

        {/* STATS */}
        <section ref={statsRef} className="py-20 border-y" style={{ borderColor: "rgba(245,158,11,0.06)", background: BG2 }}>
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ val: `${s1}+`, label: "Students Trained" }, { val: `${s2}+`, label: "Churches Reached" }, { val: "4.9★", label: "Average Rating" }, { val: `${s3}+`, label: "Hours Taught" }].map(({ val, label }, i) => (
              <Reveal key={label} delay={i * 100} className="text-center">
                <div className="text-4xl font-extrabold" style={{ color: A, fontFamily: "'Manrope',sans-serif" }}>{val}</div>
                <div className="mt-1 text-sm" style={{ color: MUT }}>{label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="py-28 px-6" style={{ background: BG }}>
          <div className="max-w-6xl mx-auto">
            <Reveal><SectionTitle eyebrow="You Are Not Alone" heading={<>Do Any of These <AmberText>Sound Familiar?</AmberText></>} sub="These are the exact struggles that brought hundreds of church musicians to our workshop." /></Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {problems.map((p, i) => (
                <Reveal key={i} delay={i * 55}>
                  <div className="ch p-5 rounded-2xl h-full" style={{ background: CARD, border: "1px solid rgba(245,158,11,0.08)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "rgba(245,158,11,0.08)", color: A }}>{p.icon}</div>
                    <p className="text-sm leading-relaxed" style={{ color: TXT }}>{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <SectionCTA label="Start Your Worship Journey" onClick={() => setShowModal(true)} sub="Join 500+ church musicians who've already transformed their playing" />
          </div>
        </section>

        {/* TRANSFORMATION */}
        <section className="py-28 px-6" style={{ background: BG3 }}>
          <div className="max-w-5xl mx-auto">
            <Reveal><SectionTitle variant="violet" eyebrow="The Transformation" heading={<>Before & After the <VioletText>Challenge</VioletText></>} sub="Three days is all it takes to fundamentally change how you play and serve." /></Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal delay={100}>
                <div className="rounded-2xl p-6" style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.12)" }}>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "rgba(239,68,68,0.15)" }}><X size={12} color="#f87171" /></div>
                    <span className="text-sm font-bold text-red-400" style={{ fontFamily: "'Manrope',sans-serif" }}>Before Workshop</span>
                  </div>
                  {["Entirely dependent on YouTube tutorials", "Lost without printed sheet music", "No confidence playing in front of others", "Afraid to be asked to play spontaneously", "Cannot switch keys during worship", "Guessing chords instead of understanding them"].map((t) => (
                    <div key={t} className="flex items-start gap-3 text-sm py-2.5 border-b last:border-0" style={{ color: MUT, borderColor: "rgba(239,68,68,0.07)" }}>
                      <span className="mt-0.5 text-red-400 flex-shrink-0">✕</span>{t}
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="rounded-2xl p-6" style={{ background: "rgba(52,211,153,0.04)", border: "1px solid rgba(52,211,153,0.12)" }}>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "rgba(52,211,153,0.15)" }}><CheckCircle size={12} color="#34d399" /></div>
                    <span className="text-sm font-bold text-emerald-400" style={{ fontFamily: "'Manrope',sans-serif" }}>After Workshop</span>
                  </div>
                  {["Plays worship songs by ear with understanding", "Knows chord movement and how progressions work", "Performs with genuine confidence on stage", "Serves the worship team without anxiety", "Transposing between keys feels natural", "Accompanies singers with ease and clarity"].map((t) => (
                    <div key={t} className="flex items-start gap-3 text-sm py-2.5 border-b last:border-0" style={{ color: TXT, borderColor: "rgba(52,211,153,0.07)" }}>
                      <span className="mt-0.5 text-emerald-400 flex-shrink-0">✓</span>{t}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <SectionCTA label="Become a Confident Worship Keyboard Player" onClick={() => setShowModal(true)} sub="Limited seats — register today for only ₹249" />
          </div>
        </section>

        {/* CURRICULUM */}
        <section id="curriculum" className="py-28 px-6" style={{ background: BG }}>
          <div className="max-w-5xl mx-auto">
            <Reveal><SectionTitle eyebrow="3-Day Learning Journey" heading={<>Your Journey to <AmberText>Confident Worship Playing</AmberText></>} sub="A carefully designed step-by-step learning experience." /></Reveal>
            <div className="relative mt-16">
              <div className="absolute left-6 top-6 bottom-6 w-1 rounded-full" style={{ background: "linear-gradient(to bottom,#D4AF37,#8B5CF6,#10B981)" }} />
              {curriculum.map((d, i) => (
                <Reveal key={d.day} delay={i * 120}>
                  <div className="relative flex gap-8 mb-14">
                    <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: d.color, boxShadow: `0 0 25px ${d.color}66` }}>{d.icon}</div>
                    <GlassCard className="flex-1 p-7 ch" style={{ border: `1px solid ${d.color}25` }}>
                      <div className="flex items-center gap-3 mb-2"><Badge>{d.day}</Badge></div>
                      <h3 className="text-2xl font-bold text-white mb-5" style={{ fontFamily: "'Manrope',sans-serif" }}>{d.title}</h3>
                      <div className="grid md:grid-cols-2 gap-3 mb-6">
                        {d.topics.map((topic) => (
                          <div key={topic} className="flex items-start gap-3"><CheckCircle size={16} color={d.color} className="mt-1 flex-shrink-0" /><span className="text-sm" style={{ color: TXT }}>{topic}</span></div>
                        ))}
                      </div>
                      <div className="rounded-2xl p-4" style={{ background: `${d.color}10`, border: `1px solid ${d.color}25` }}>
                        <div className="flex items-center gap-2 mb-2"><Award size={16} color={d.color} /><span className="font-bold" style={{ color: d.color }}>By the End of {d.day}</span></div>
                        <p className="text-sm leading-relaxed" style={{ color: TXT }}>{d.outcome}</p>
                      </div>
                    </GlassCard>
                  </div>
                </Reveal>
              ))}
            </div>
            <SectionCTA label="Reserve My Seat" onClick={() => setShowModal(true)} sub="Join the Worship Keys – 3 Day Challenge for just ₹249" />
          </div>
        </section>

        {/* INSTRUCTOR */}
        <section id="instructor" className="py-28 px-6" style={{ background: BG2 }}>
          <div className="max-w-5xl mx-auto">
            <Reveal><SectionTitle eyebrow="Your Instructor" heading={<>Meet <AmberText>Daniel Prabakar</AmberText></>} /></Reveal>
            <Reveal>
              <GlassCard className="overflow-hidden" style={{ border: "1px solid rgba(124,58,237,0.2)", boxShadow: "0 40px 80px rgba(0,0,0,0.4)" }}>
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 relative">
                    <img src={Daniel} alt="Daniel Prabakar" className="w-full h-72 md:h-full object-cover" style={{ filter: "brightness(0.9) saturate(1.05)" }} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.2),transparent 60%)" }} />
                    <div className="absolute bottom-4 left-4 px-3 py-2 rounded-xl" style={{ background: "rgba(7,9,26,0.85)", border: "1px solid rgba(245,158,11,0.2)", backdropFilter: "blur(8px)" }}>
                      <p className="text-xs font-bold" style={{ color: A }}>Grade 8 Piano, TCL</p>
                      <p className="text-xs" style={{ color: MUT }}>12+ Years in Ministry</p>
                    </div>
                  </div>
                  <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                    <Badge variant="violet">Founder & Lead Instructor</Badge>
                    <h3 className="mt-4 text-3xl font-extrabold text-white" style={{ fontFamily: "'Manrope',sans-serif" }}>Daniel Prabakar</h3>
                    <p className="mt-1 text-sm font-semibold" style={{ color: A }}>Worship Keyboard Coach · Church Music Director</p>
                    <p className="mt-5 text-sm leading-relaxed" style={{ color: MUT }}>For over a decade, I've had the privilege of serving in church worship teams, leading musicians, and mentoring aspiring keyboard players. I noticed that many passionate musicians struggled—not because they lacked talent, but because they were never taught music in a practical, worship-focused way.</p>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: MUT }}>That's why I founded <strong style={{ color: TXT }}>Jubal Music Academy</strong>—to help aspiring musicians develop confidence, understand music practically, and serve their churches with excellence.</p>
                    <div className="mt-5 p-4 rounded-2xl" style={{ background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.15)" }}>
                      <Quote size={18} color="#A78BFA" className="mb-2" />
                      <p className="text-sm italic leading-relaxed" style={{ color: TXT }}>"My goal isn't just to teach you songs. I want to help you understand music so you can confidently play, grow, and serve wherever God has placed you."</p>
                      <p className="mt-2 text-xs font-semibold" style={{ color: "#A78BFA" }}>— Daniel Prabakar, Founder · Jubal Music Academy</p>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {[["100+", "Students Mentored"], ["10+", "Years of Serving"], ["6+", "Years of Teaching"]].map(([n, l]) => (
                        <div key={l} className="text-center p-3 rounded-xl" style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}>
                          <div className="text-lg font-extrabold" style={{ color: A, fontFamily: "'Manrope',sans-serif" }}>{n}</div>
                          <div className="text-xs mt-0.5" style={{ color: MUT }}>{l}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6"><SecondaryBtn href={WEBSITE}><Globe size={14} /> Explore All Courses</SecondaryBtn></div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </section>

        {/* WHY JUBAL */}
        <section className="py-28 px-6" style={{ background: BG }}>
          <div className="max-w-6xl mx-auto">
            <Reveal><SectionTitle eyebrow="Why Choose Us" heading={<>Why Learn From <AmberText>Jubal Music Academy</AmberText></>} sub="We're not a generic online music school — we're built specifically for church musicians." /></Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 70}>
                  <div className="ch p-6 rounded-2xl h-full" style={{ background: CARD, border: "1px solid rgba(245,158,11,0.08)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(245,158,11,0.08)", color: A }}>{f.icon}</div>
                    <h4 className="font-bold text-white mb-2" style={{ fontFamily: "'Manrope',sans-serif" }}>{f.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: MUT }}>{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-28 px-6" style={{ background: BG2 }}>
          <div className="max-w-5xl mx-auto">
            <Reveal><SectionTitle eyebrow="Student Stories" heading={<>Voices From Our <AmberText>Community</AmberText></>} sub="Real students. Real churches. Real confidence gained in just 3 days." /></Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 100}>
                  <GlassCard className="ch p-6 flex flex-col h-full" style={{ border: "1px solid rgba(245,158,11,0.08)" }}>
                    <div className="flex gap-0.5 mb-4">{Array(5).fill(0).map((_, j) => <Star key={j} size={13} fill={A} color={A} />)}</div>
                    <p className="text-sm leading-relaxed flex-1 mb-5 italic" style={{ color: TXT }}>"{t.quote}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "rgba(245,158,11,0.07)" }}>
                      <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" style={{ border: "2px solid rgba(245,158,11,0.3)" }} />
                      <div>
                        <div className="text-sm font-bold text-white" style={{ fontFamily: "'Manrope',sans-serif" }}>{t.name}</div>
                        <div className="text-xs" style={{ color: MUT }}>{t.role}</div>
                        <div className="text-xs" style={{ color: A }}>{t.church}</div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
            <SectionCTA label="Join 500+ Happy Students" onClick={() => setShowModal(true)} sub="Trusted by church musicians across India" />
          </div>
        </section>

        {/* PRICING */}
        <section className="py-28 px-6" style={{ background: BG }}>
          <div className="max-w-lg mx-auto">
            <Reveal><SectionTitle eyebrow="Investment" heading={<>One Clear, <AmberText>Honest Price</AmberText></>} /></Reveal>
            <Reveal delay={100}>
              <div className="relative rounded-3xl overflow-hidden price-glow" style={{ background: `linear-gradient(160deg,${CARD},${BG2})`, border: "1px solid rgba(245,158,11,0.25)" }}>
                <div className="h-px" style={{ background: "linear-gradient(90deg,transparent,#F59E0B,transparent)" }} />
                <div className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-sm font-medium" style={{ color: MUT }}>Worship Keys</p>
                      <h3 className="text-2xl font-extrabold text-white mt-0.5" style={{ fontFamily: "'Manrope',sans-serif" }}>3 Day Challenge</h3>
                    </div>
                    <Badge>Limited Seats</Badge>
                  </div>
                  <div className="flex items-end gap-3 mb-1">
                    <span className="text-6xl font-extrabold" style={{ color: A, fontFamily: "'Manrope',sans-serif" }}>₹249</span>
                    <div className="mb-2">
                      <div className="text-xl line-through" style={{ color: "#444D60" }}>₹999</div>
                      <div className="text-xs font-bold text-emerald-400">75% OFF</div>
                    </div>
                  </div>
                  <p className="text-xs mb-6" style={{ color: "#444D60" }}>One-time payment · No hidden charges · No subscription</p>
                  <div className="h-px mb-6" style={{ background: "rgba(245,158,11,0.08)" }} />
                  <div className="space-y-3 mb-8">
                    {["2 Self-Paced recorded sessions", "1 Live session", "Free Ebook Worth ₹999", "Recording for the 3rd session provided", "Digital Completion Certificate", "Private Community Access", "Direct Q&A with Daniel"].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm" style={{ color: TXT }}><CheckCircle size={14} color={A} className="flex-shrink-0" />{item}</div>
                    ))}
                  </div>
                  <PrimaryBtn large className="w-full justify-center" onClick={() => setShowModal(true)}><Lock size={14} /> Reserve My Seat — ₹249</PrimaryBtn>
                  <p className="mt-3 text-center text-xs" style={{ color: "#444D60" }}>🔒 Secure checkout · Powered by Razorpay</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* BONUSES */}
        <section className="py-28 px-6" style={{ background: BG2 }}>
          <div className="max-w-5xl mx-auto">
            <Reveal><SectionTitle eyebrow="What's Included" heading={<>Everything You Need to <AmberText>Succeed</AmberText></>} sub="Your ₹249 enrollment unlocks a full resource kit to accelerate your progress." /></Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {bonuses.map((b, i) => (
                <Reveal key={b.title} delay={i * 65}>
                  <div className="ch p-5 rounded-2xl" style={{ background: CARD, border: "1px solid rgba(245,158,11,0.1)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "rgba(245,158,11,0.08)", color: A }}>{b.icon}</div>
                    <h4 className="font-bold text-white text-sm mb-1" style={{ fontFamily: "'Manrope',sans-serif" }}>{b.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: MUT }}>{b.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-28 px-6" style={{ background: BG }}>
          <div className="max-w-2xl mx-auto">
            <Reveal><SectionTitle eyebrow="FAQ" heading={<>Common <AmberText>Questions</AmberText></>} sub="Everything you need to know before joining the Worship Keys Challenge." /></Reveal>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <Reveal key={i} delay={i * 45}>
                  <div className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300" style={{ background: CARD, border: `1px solid ${openFaq === i ? "rgba(245,158,11,0.25)" : "rgba(245,158,11,0.07)"}` }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <div className="px-5 py-4 flex items-center justify-between gap-4">
                      <span className="font-semibold text-sm text-white" style={{ fontFamily: "'Manrope',sans-serif" }}>{faq.q}</span>
                      <ChevronDown size={15} color={A} style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.3s", flexShrink: 0 }} />
                    </div>
                    <div style={{ maxHeight: openFaq === i ? "200px" : "0", overflow: "hidden", transition: "max-height 0.4s ease" }}>
                      <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: MUT }}>{faq.a}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <SectionCTA label="Still have questions? Register and ask Daniel live" onClick={() => setShowModal(true)} sub="Q&A is built into Day 3 of the challenge" />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-36 px-6 relative overflow-hidden" style={{ background: BG2 }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%,rgba(124,58,237,0.12),transparent 70%)" }} />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 opacity-15" style={{ background: "radial-gradient(circle,#F59E0B,transparent 70%)", filter: "blur(80px)" }} />
          </div>
          <Reveal className="relative z-10 max-w-2xl mx-auto text-center">
            <Badge variant="violet">Your Moment Starts Now</Badge>
            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-white" style={{ fontFamily: "'Manrope',sans-serif" }}>
              Your Journey as a<br /><AmberText>Worship Keyboard Player</AmberText><br />Starts Today
            </h2>
            <p className="mt-5 text-lg" style={{ color: MUT }}>Reserve your seat, show up for three days, and begin serving your church with the confidence you've always wanted.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryBtn large onClick={() => setShowModal(true)}>Reserve My Seat — ₹249 <ArrowRight size={16} /></PrimaryBtn>
              <SecondaryBtn href={WEBSITE}><Globe size={14} /> Explore All Courses</SecondaryBtn>
            </div>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer className="py-16 px-6 border-t" style={{ background: "#050812", borderColor: "rgba(245,158,11,0.06)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-10 mb-12">
              <div className="md:col-span-2">
                <a href={WEBSITE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <img src={Logo} alt="Jubal Music Academy" className="h-12 w-auto object-contain" />
                  <div className="leading-tight">
                    <p className="font-extrabold text-white text-base" style={{ fontFamily: "'Manrope',sans-serif" }}>Jubal Music Academy</p>
                    <p className="text-xs" style={{ color: MUT }}>Training Hands, Tuning Hearts</p>
                  </div>
                </a>
                <p className="mt-4 text-sm leading-relaxed max-w-xs" style={{ color: MUT }}>Equipping aspiring musicians, worship keyboard players, guitarists, vocalists, and church musicians with practical music education.</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: A }}>Quick Links</p>
                <div className="space-y-2.5">
                  {["Curriculum", "Instructor", "Testimonials", "FAQ"].map((l) => (
                    <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm transition-colors hover:text-white" style={{ color: MUT }}>{l}</a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: A }}>Contact</p>
                <div className="space-y-2.5 text-sm" style={{ color: MUT }}>
                  <p>daniel.p@jubalmusicacademy.com</p>
                  <p>jubaljukebox@gmail.com</p>
                  <p>+91 8667759837</p>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ borderColor: "rgba(245,158,11,0.05)", color: "#444D60" }}>
              <p>© 2025 Jubal Music Academy. All rights reserved.</p>
              <div className="flex gap-6">
                {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
                  <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>

        {/* Mobile sticky CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-4" style={{ background: "rgba(7,9,26,0.97)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(245,158,11,0.1)" }}>
          <PrimaryBtn large className="w-full justify-center" onClick={() => setShowModal(true)}>Reserve My Seat — ₹249 <ArrowRight size={16} /></PrimaryBtn>
        </div>
      </div>
    </>
  );
}
