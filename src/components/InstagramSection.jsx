import { useEffect } from "react";

const INSTAGRAM_EMBEDS = [
  `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DEXaqjSSrZF/" data-instgrm-version="14"></blockquote>`,
  `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DEHhs6BIwQJ/" data-instgrm-version="14"></blockquote>`,
  `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DAa9L_DPnaQ/" data-instgrm-version="14"></blockquote>`,
];

export default function InstagramSection() {
  useEffect(() => {
    // Load Instagram embed script ONCE
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gold mb-4">
          Learn With Us on Instagram
        </h2>

        <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
          Teaching clips, worship insights, and real classroom moments from
          Jubal Music Academy.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
  {INSTAGRAM_EMBEDS.map((embed, index) => (
    <div
      key={index}
      className="
        bg-[#111] 
        border border-gray-800 
        rounded-xl 
        p-4 
        shadow-lg
        hover:border-gold
        transition
      "
    >
      <div
        className="overflow-hidden rounded-md bg-white"
        dangerouslySetInnerHTML={{ __html: embed }}
      />
    </div>
  ))}
</div>

        {/* FOLLOW CTA */}
        <div className="mt-12">
          <a
  href="https://www.instagram.com/jubalmusiconline/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex items-center gap-3
    text-gold hover:text-white
    transition
  "
  group inline-flex items-center
>
  {/* Instagram Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
    
  >
    <path d="M7.75 2h8.5C19.99 2 22 4.01 22 6.25v8.5C22 19.99 19.99 22 17.75 22h-8.5C4.01 22 2 19.99 2 17.75v-8.5C2 4.01 4.01 2 6.25 2zm0 1.5C4.84 3.5 3.5 4.84 3.5 6.25v8.5c0 1.41 1.34 2.75 2.75 2.75h8.5c1.41 0 2.75-1.34 2.75-2.75v-8.5c0-1.41-1.34-2.75-2.75-2.75h-8.5z" />
    <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
    <circle cx="17.25" cy="6.75" r="1.25" />
    group-hover:scale-110 transition-transform
  </svg>

  <span>
    Follow us on Instagram
    <span className="ml-1 font-medium">@jubalmusiconline</span>
  </span>
</a>
        </div>
      </div>
    </section>
  );
}