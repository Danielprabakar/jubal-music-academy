import { useEffect, useRef } from "react";

export default function HomeTestimonialsSlider() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideWidth = slider.firstChild.offsetWidth + 40; // card + gap

    intervalRef.current = setInterval(() => {
      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 10
      ) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: slideWidth, behavior: "smooth" });
      }
    }, 4500); // ⏱️ auto slide every 4.5s

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gold mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Real experiences from students and parents learning at Jubal Music Academy.
          </p>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="
            flex gap-10 overflow-x-auto
            snap-x snap-mandatory
            scrollbar-hide
            cursor-grab active:cursor-grabbing
          "
        >

          {/* TESTIMONIAL 1 – SOFIA (UNCHANGED) */}
          <div className="min-w-[300px] md:min-w-[360px] snap-start border border-gray-800 p-6 hover:border-gold transition">
            <p className="text-gray-300 text-sm italic leading-relaxed mb-6">
              “The sessions really helped me track my progress consistently, and the
              individual attention given to each student made a big difference.
              The friendly approach created a comfortable learning environment and
              motivated me to attend classes regularly.”
            </p>

            <div className="flex items-center gap-4">
              <img
                src="/images/testimonials/sofia.jpg"
                alt="Minda Sofia - Piano Student"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-gold font-medium text-sm">
                  Minda Sofia
                </p>
                <p className="text-gray-400 text-xs">
                  Piano Program
                </p>
              </div>
            </div>
          </div>

          {/* TESTIMONIAL 2 – PREETHI / VIHARIKA (UNCHANGED) */}
          <div className="min-w-[300px] md:min-w-[360px] snap-start border border-gray-800 p-6 hover:border-gold transition">
            <p className="text-gray-300 text-sm italic leading-relaxed mb-6">
              “Viharika is enjoying the keyboard classes immensely! Daniel sir’s
              teaching style is excellent, and his in-depth knowledge helps clarify
              all doubts instantly. He regularly follows up on students’ progress,
              ensuring they stay on track.”
            </p>

            <div className="flex items-center gap-4">
              <img
                src="/images/testimonials/viharika.jpg"
                alt="Viharika - Keyboard Student"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-gold font-medium text-sm">
                  Dr. Preethi G
                </p>
                <p className="text-gray-400 text-xs">
                  Parent of Viharika – Keyboard Program
                </p>
              </div>
            </div>
          </div>

          {/* TESTIMONIAL 3 – C.S (UNCHANGED) */}
          <div className="min-w-[300px] md:min-w-[360px] snap-start border border-gray-800 p-6 hover:border-gold transition">
            <p className="text-gray-300 text-sm italic leading-relaxed mb-6">
              “Praise the Lord! I’m truly grateful to have you as my keyboard mentor.
              Thank you for your patience, clear explanations, and the way you balance
              theory with practical worship—it made learning so comfortable for me.
              I never thought I’d be able to play like this so soon. Glory to God!”
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-gold text-sm font-medium">
                CS
              </div>
              <div>
                <p className="text-gold font-medium text-sm">
                  C.S
                </p>
                <p className="text-gray-400 text-xs">
                  Worship Keys – Foundation
                </p>
              </div>
            </div>
          </div>

          {/* TESTIMONIAL 4 – DEV (NEW, FULL TEXT FROM EARLIER) */}
          <div className="min-w-[300px] md:min-w-[360px] snap-start border border-gray-800 p-6 hover:border-gold transition">
            <p className="text-gray-300 text-sm italic leading-relaxed mb-6">
              “I started learning the keyboard 2Yrs ago and trained for about 6–8 months in
              Carnatic music. After I stopped attending classes, I kept practicing on my own,
              but I felt stuck at a basic level and didn’t really know how to move forward.
              After joining your online keyboard class, I could notice improvement within a
              very short time. You quickly understood my level, saw exactly what I was missing,
              and guided me in the right way. Your mentoring helped build my confidence and
              clarity.”
            </p>

            <div className="flex items-center gap-4">
              <img
                src="/images/testimonials/dev.jpg"
                alt="Dev - Worship Keys Student"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-gold font-medium text-sm">
                  Dev
                </p>
                <p className="text-gray-400 text-xs">
                  Worship Keys – Foundation
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Swipe hint */}
        <p className="text-center text-xs text-gray-500 mt-6">
          ← Swipe to read more →
        </p>
      </div>
    </section>
  );
}