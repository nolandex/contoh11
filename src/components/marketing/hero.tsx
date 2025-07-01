// Lokasi: src/components/marketing/hero.tsx

"use client";

import { heroContent } from "@/config/content";
import { BlurText } from "../ui/blur-text";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const LOGOS = [
  { name: "Next.js", image: "/nextjs.svg" },
  { name: "React", image: "/react.svg" },
  { name: "Tailwind", image: "/tailwind.svg" },
  { name: "Framer", image: "/framer.svg" },
  { name: "Shadcnui", image: "/shadcnui.svg" },
  { name: "Nextui", image: "/nextui.svg" },
  { name: "TS", image: "/typescript.svg" },
  { name: "Vercel", image: "/vercel.svg" },
];

const ScrollingLogos = () => {
  return (
    <section className="mx-auto w-full max-w-5xl lg:max-w-7xl px-0 md:px-6 lg:px-8 mt-16">
      <Marquee direction="left" autoFill pauseOnHover>
        {LOGOS.map((logo, index) => (
          <div className="mx-8" key={index}>
            <Image
              src={logo.image}
              alt={logo.name}
              width={50}
              height={50}
              className="invert grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="hero" className="flex flex-col items-center text-center w-full max-w-5xl my-16 mx-auto z-40 relative px-4">
      <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
        <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
          <div className="w-2.5 h-2.5 rounded-full bg-primary/60 animate-ping absolute"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary absolute"></div>
        </div>
        <span className="inline-flex items-center justify-center gap-2 bg-[linear-gradient(110deg,#b2a8fd,45%,#8678f9,55%,#c7d2fe)] bg-[length:200%_100%] bg-clip-text text-sm text-transparent animate-background-shine">
          {heroContent.badge.mainText}
          <span className="text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-gradient-to-b from-foreground/20 to-foreground/10 flex items-center justify-center">
            {heroContent.badge.subText}
          </span>
        </span>
      </div>

      <BlurText
        word={heroContent.headline}
        className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium mt-6 font-heading"
      />

      <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto">
        {heroContent.subheadline}
      </p>

      {/* --- Tombol dengan Ukuran Diperkecil --- */}
      <div className="flex items-center justify-center flex-col sm:flex-row gap-4 mt-8">
        <button
          onClick={scrollToPricing}
          className='inline-flex h-10 animate-background-shine items-center justify-center rounded-md border border-violet-700 bg-[linear-gradient(110deg,#6d28d9,45%,#8b5cf6,55%,#6d28d9)] bg-[length:200%_100%] px-5 text-sm font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-background'
        >
          {heroContent.ctaPrimary.text}
        </button>
        <button
          onClick={scrollToPricing}
          className='hidden md:inline-flex h-10 animate-background-shine items-center justify-center rounded-md border border-violet-700 bg-[linear-gradient(110deg,#6d28d9,45%,#8b5cf6,55%,#6d28d9)] bg-[length:200%_100%] px-5 text-sm font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-background'
        >
          {heroContent.ctaSecondary.text}
        </button>
      </div>
      {/* --- Akhir Implementasi Tombol --- */}

      <ScrollingLogos />

      {/* Style untuk animasi background shine */}
      <style jsx>{`
        @keyframes background-shine {
          from {
            background-position: 0 0;
          }
          to {
            background-position: -200% 0;
          }
        }

        .animate-background-shine {
          animation: background-shine 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
