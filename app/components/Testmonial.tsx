"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import type { Testimonial, TestimonialsVariant } from "@/types";

type NavigationDirection = "left" | "right";

export default function TestMonial({ data }: { data: TestimonialsVariant }) {
  const testimonials = data.testimonials;

  return (
    <section className="relative overflow-hidden bg-[#0b0a09] py-20 lg:py-24">
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

            <h3 className="mt-1 font-serif text-[45px] italic leading-none text-[#dca653] sm:text-[50px]">
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
        {/* DESKTOP TESTIMONIAL CAROUSEL */}
        {/* ================================================= */}
        <div data-reveal="up" className="mt-10 hidden items-center gap-3 lg:grid lg:grid-cols-[50px_minmax(0,1fr)_50px]">
          {/* ================= LEFT ARROW ================= */}
          <button
            type="button"
            aria-label="Previous testimonial"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#b17c35] bg-[#0b0a09] text-[#dca653] transition-all duration-300 hover:bg-[#dca653] hover:text-black"
          >
            <ChevronLeft size={22} strokeWidth={1.5} />
          </button>

          {/* ================= CARDS ================= */}
          <div className="grid min-w-0 grid-cols-3 gap-5">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="group relative min-h-[265px] overflow-hidden rounded-[7px] border border-[#684e2e] bg-[#0e0d0b] transition-all duration-300 hover:border-[#b17c35]"
              >
                {/* SINGLE INNER CONTAINER */}
                <div className="relative h-full px-8 py-7">
                  {/* TOP ROW */}
                  <div className="flex items-start justify-between">
                    {/* Stars */}
                    <div className="flex gap-[3px]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          fill="#e31b14"
                          strokeWidth={0}
                          className="text-[#e31b14]"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <Quote
                      size={40}
                      strokeWidth={0}
                      fill="currentColor"
                      className="text-white/[0.15]"
                    />
                  </div>

                  {/* REVIEW */}
                  <p className="mt-5 font-sans text-[13px] leading-[1.65] text-white/75">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* DIVIDER */}
                  <div className="mt-5 h-px w-full bg-white/[0.10]" />

                  {/* CLIENT */}
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
            ))}
          </div>

          {/* ================= RIGHT ARROW ================= */}
          <button
            type="button"
            aria-label="Next testimonial"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#b17c35] bg-[#0b0a09] text-[#dca653] transition-all duration-300 hover:bg-[#dca653] hover:text-black"
          >
            <ChevronRight size={22} strokeWidth={1.5} />
          </button>
        </div>

        {/* ================================================= */}
        {/* TABLET */}
        {/* ================================================= */}
        <div data-reveal="up" className="mt-10 hidden md:grid lg:hidden">
          <div className="grid grid-cols-2 gap-5">
            {testimonials.slice(0, 2).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>

          {/* Tablet arrows */}
          <div className="mt-7 flex justify-center gap-4">
            <NavigationButton direction="left" />
            <NavigationButton direction="right" />
          </div>
        </div>

        {/* ================================================= */}
        {/* MOBILE */}
        {/* ================================================= */}
        <div data-reveal="up" className="mt-10 md:hidden">
          <TestimonialCard testimonial={testimonials[0]} />

          <div className="mt-7 flex justify-center gap-4">
            <NavigationButton direction="left" />
            <NavigationButton direction="right" />
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
    <article className="relative min-h-[265px] overflow-hidden rounded-[7px] border border-[#684e2e] bg-[#0e0d0b]">
      <div className="relative h-full px-8 py-7">
        {/* Stars + Quote */}
        <div className="flex items-start justify-between">
          <div className="flex gap-[3px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                fill="#e31b14"
                strokeWidth={0}
                className="text-[#e31b14]"
              />
            ))}
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

/* ================================================= */
/* NAVIGATION BUTTON */
/* ================================================= */

function NavigationButton({ direction }: { direction: NavigationDirection }) {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      aria-label={isLeft ? "Previous testimonial" : "Next testimonial"}
      className="flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#b17c35] bg-[#0b0a09] text-[#dca653] transition-all duration-300 hover:bg-[#dca653] hover:text-black"
    >
      {isLeft ? (
        <ChevronLeft size={20} strokeWidth={1.5} />
      ) : (
        <ChevronRight size={20} strokeWidth={1.5} />
      )}
    </button>
  );
}