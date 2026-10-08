"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { HeroVariant } from "@/types";
import { scriptFont } from "./siteData";

export default function Hero({ data }: { data: HeroVariant }) {
  const slides = data.slides;
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [activeSlide, isPaused, slides.length]);

  const moveSlide = (direction: number) => {
    setActiveSlide((currentSlide) =>
      (currentSlide + direction + slides.length) % slides.length,
    );
  };

  return (
    <section
      aria-label="Photography studio highlights"
      className="relative min-h-[max(100svh,640px)] w-full overflow-hidden bg-[#090807]"
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 top-20 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative h-full w-full shrink-0">
              <Image
                src={slide}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/5" />

      {/* Bottom Dark Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[max(100svh,640px)] max-w-[1400px] items-center px-6 pt-20 lg:px-16">
        <div data-reveal="left" className="max-w-[740px]">

          {/* Small Heading */}
          <div className="mb-5 flex items-center gap-4">
            <span className="font-sans text-[12px] font-medium tracking-[0.3em] text-[#d9a44c] sm:text-[14px]">
              {data.subtitle}
            </span>

            <span className="h-[2px] w-12 bg-[#d9a44c]" />
          </div>

          {/* Main Heading */}
          <h1 className="max-w-[740px] font-serif text-[42px] leading-[0.95] tracking-normal text-white sm:text-[54px] md:text-[62px] lg:text-[68px]">
            {data.title1}
            <span
              className="ml-2 inline-block font-light italic text-[#d9a44c]"
              style={scriptFont}
            >
              {data.titleScript}
            </span>
            <br />
            {data.title2}
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[570px] font-sans text-[16px] leading-7 text-white/85 sm:text-[18px]">
            {data.description.map((line, index) => (
              <span key={line}>
                {index > 0 && <br className="hidden sm:block" />}
                {index > 0 && " "}
                {line}
              </span>
            ))}
          </p>

          {/* CTA */}
          <Link
            href={data.button.url}
            className="mt-8 inline-flex items-center gap-4 rounded-[4px] bg-[#e5b45e] px-8 py-4 font-sans text-[15px] font-semibold text-[#17120b] transition-all duration-300 hover:bg-[#f0c879] hover:shadow-[0_8px_30px_rgba(229,180,94,0.25)]"
          >
            {data.button.text}
            <span className="text-[20px] leading-none">→</span>
          </Link>
        </div>
      </div>

      {/* Slider Controls */}
      <div
        className="absolute bottom-6 left-0 right-0 z-20 mx-auto flex max-w-[1400px] items-center px-6 lg:px-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* Previous */}
        <button
          type="button"
          onClick={() => moveSlide(-1)}
          className="group flex items-center gap-4"
          aria-label="Previous slide"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-white transition-all duration-300 group-hover:border-[#d9a44c] group-hover:text-[#d9a44c]">
            ←
          </span>

          <span className="hidden text-[11px] tracking-[0.3em] text-white/70 sm:block">
            PREV
          </span>
        </button>

        {/* Line + Dots */}
        <div className="mx-auto flex flex-1 items-center justify-center gap-4 px-6">

          <span className="hidden h-px flex-1 bg-white/20 lg:block" />

          <div className="flex items-center gap-1">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
                className={`flex h-7 w-7 items-center justify-center rounded-full border transition-colors ${
                  activeSlide === index
                    ? "border-[#d9a44c]"
                    : "border-transparent"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    activeSlide === index ? "bg-[#d9a44c]" : "bg-white"
                  }`}
                />
              </button>
            ))}
          </div>

          <span className="hidden h-px flex-1 bg-white/20 lg:block" />
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={() => moveSlide(1)}
          className="group flex items-center gap-4"
          aria-label="Next slide"
        >
          <span className="hidden text-[11px] tracking-[0.3em] text-white/70 sm:block">
            NEXT
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-white transition-all duration-300 group-hover:border-[#d9a44c] group-hover:text-[#d9a44c]">
            →
          </span>
        </button>
      </div>
    </section>
  );
}