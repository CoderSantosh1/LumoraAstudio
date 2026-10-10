"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import type { Testimonial, TestimonialsVariant } from "@/types";
import { useSlider } from "./useSlider";

const arrowClass =
  "flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-[#b17c35] bg-[#0b0a09] text-[#dca653] transition-all duration-300 hover:bg-[#dca653] hover:text-black disabled:opacity-40";

export default function TestMonial({ data }: { data: TestimonialsVariant }) {
  const testimonials = data.testimonials;
  const slider = useSlider(testimonials.length, { base: 1, md: 2, lg: 3 }, 6000);

  const prevButton = (
    <button
      type="button"
      aria-label="Previous testimonial"
      onClick={slider.prev}
      disabled={!slider.canSlide}
      className={arrowClass}
    >
      <ChevronLeft size={22} strokeWidth={1.5} />
    </button>
  );

  const nextButton = (
    <button
      type="button"
      aria-label="Next testimonial"
      onClick={slider.next}
      disabled={!slider.canSlide}
      className={arrowClass}
    >
      <ChevronRight size={22} strokeWidth={1.5} />
    </button>
  );

  return (
    <section className="relative overflow-hidden bg-[#0b0a09] py-12 lg:py-14">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,83,35,0.10),transparent_65%)]" />

        <div className="absolute left-[-200px] top-0 h-full w-[450px] bg-[radial-gradient(circle,rgba(130,85,30,0.10),transparent_65%)]" />

        <div className="absolute right-[-200px] top-0 h-full w-[450px] bg-[radial-gradient(circle,rgba(130,85,30,0.10),transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-14">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}
        <div data-reveal="up" className="grid items-start gap-8 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* Label */}
            <div className="mb-3 flex items-center gap-5">
              <span className="font-sans text-[12px] font-medium tracking-[0.25em] text-[#dca653]">
                {data.subtitle}
              </span>

              <span className="h-px w-[70px] bg-[#806039]" />
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[46px] leading-[0.98] text-white sm:text-[52px]">
              {data.title1}
            </h2>

            <h3 className="-mt-2 font-script text-[50px] leading-[1.1] text-[#dca653] sm:text-[60px]">
              {data.titleScript}
            </h3>
          </div>

          {/* RIGHT DESCRIPTION */}
          <div className="lg:pt-12">
            <p className="max-w-[560px] font-sans text-[15px] leading-6 text-white/70">
              {data.description[0]}
              <br />
              {data.description[1]}
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* SLIDER: 3 cards on desktop, 2 on tablet, 1 on mobile */}
        {/* ================================================= */}
        <div
          data-reveal="up"
          className="mt-10 lg:grid lg:grid-cols-[50px_minmax(0,1fr)_50px] lg:items-center lg:gap-3"
          {...slider.pauseHandlers}
        >
          <div className="hidden lg:block">{prevButton}</div>

          <div className="min-w-0 overflow-hidden">
            <div
              className="-mx-2.5 flex transition-transform duration-700 ease-in-out"
              style={slider.trackStyle}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="shrink-0 basis-full px-2.5 md:basis-1/2 lg:basis-1/3"
                  aria-hidden={
                    index < slider.start || index >= slider.start + slider.visible
                  }
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">{nextButton}</div>

          {/* Mobile / tablet arrows */}
          <div className="mt-7 flex justify-center gap-4 lg:hidden">
            {prevButton}
            {nextButton}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================= */
/* TESTIMONIAL CARD */
/* ================================================= */

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="group relative h-full min-h-[265px] overflow-hidden rounded-[7px] border border-[#684e2e] bg-[#0e0d0b] transition-all duration-300 hover:border-[#b17c35]">
      <div className="relative h-full px-8 py-7">
        {/* Stars + Quote */}
        <div className="flex items-start justify-between">
          <div
            className="flex gap-[3px]"
            aria-label={`${testimonial.rating} out of 5 stars`}
          >
            {Array.from({ length: testimonial.rating }, (_, i) => i + 1).map(
              (star) => (
                <Star
                  key={star}
                  size={16}
                  fill="#e31b14"
                  strokeWidth={0}
                  className="text-[#e31b14]"
                />
              ),
            )}
          </div>

          <Quote
            size={40}
            strokeWidth={0}
            fill="currentColor"
            className="text-white/[0.15]"
          />
        </div>

        {/* Review */}
        <p className="mt-5 font-sans text-[13px] leading-[1.65] text-white/75">
          &quot;{testimonial.text}&quot;
        </p>

        {/* Divider */}
        <div className="mt-5 h-px w-full bg-white/[0.10]" />

        {/* Client */}
        <div className="mt-5">
          <h4 className="font-sans text-[14px] font-semibold text-white">
            {testimonial.name}
          </h4>

          <p className="mt-1 font-sans text-[12px] text-white/40">
            {testimonial.location}
          </p>
        </div>
      </div>
    </article>
  );
}
