"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  { type: "image", src: "/uploads/2025/10/Hand-Tools.gif", alt: "Hand Tools" },
  { type: "video", src: "/uploads/2025/10/banner-2.mp4", alt: "Power Tools" },
  { type: "video", src: "/uploads/2025/10/banner-4.mp4", alt: "Hardware" },
  {
    type: "video",
    src: "/uploads/2025/10/banner-3.mp4",
    alt: "Electrical Accessories",
  },
] as const;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, []);

  const show = (index: number) =>
    setActive((index + slides.length) % slides.length);

  return (
    <section
      aria-label="Featured product highlights"
      onTouchStart={(event) => {
        touchStart.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance =
          (event.changedTouches[0]?.clientX ?? touchStart.current) -
          touchStart.current;
        if (Math.abs(distance) > 45) show(active + (distance < 0 ? 1 : -1));
        touchStart.current = null;
      }}
      className="hero-stage relative aspect-[16/9] w-full overflow-hidden bg-black sm:aspect-[16/7] lg:aspect-[16/6.2]"
    >
      <div className="pointer-events-none absolute inset-0 z-[15] bg-gradient-to-t from-black/45 via-transparent to-black/10" />

      {slides.map((slide, index) => {
        const isActive = active === index;
        return (
          <div
            key={slide.src}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              isActive
                ? "z-10 scale-100 opacity-100"
                : "pointer-events-none z-0 scale-[1.04] opacity-0"
            }`}
          >
            {slide.type === "image" ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                unoptimized
                sizes="100vw"
                className={`object-cover object-center brightness-[1.04] saturate-[1.06] transition-transform duration-[6500ms] ease-out ${
                  isActive ? "hero-kenburns scale-[1.04]" : "scale-100"
                }`}
              />
            ) : isActive ? (
              <video
                key={slide.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={slide.alt}
                className="h-full w-full object-cover object-center brightness-[1.08] saturate-[1.08]"
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : null}
          </div>
        );
      })}

      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-3 pb-3 pt-10 sm:px-8 sm:pb-5 sm:pt-14">
        <div className="pr-12 sm:pr-16">
          <p className="hero-eyebrow text-[11px] font-bold uppercase tracking-[0.18em] text-[#ffb128] sm:text-xs sm:tracking-[0.22em]">
            Al Nakiya Trading
          </p>
          <p className="mt-1 text-base font-bold leading-snug text-white drop-shadow sm:mt-1.5 sm:text-2xl">
            {slides[active]?.alt}
          </p>
        </div>
        <div className="mt-3 flex justify-center gap-2.5 sm:mt-4">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => show(index)}
              className={`h-2.5 rounded-full border border-white/80 transition-all ${
                active === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => show(active - 1)}
        className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-2xl text-white backdrop-blur-sm transition hover:scale-105 hover:bg-white/40 hover:text-black sm:left-4 sm:h-12 sm:w-12 sm:text-3xl"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => show(active + 1)}
        className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-2xl text-white backdrop-blur-sm transition hover:scale-105 hover:bg-white/40 hover:text-black sm:right-4 sm:h-12 sm:w-12 sm:text-3xl"
      >
        ›
      </button>
    </section>
  );
}
