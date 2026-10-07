"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LetsCreatetogether() {
  return (
    <section className="relative overflow-hidden bg-[#0b0a09]">
      {/* ================================================= */}
      {/* BACKGROUND IMAGE */}
      {/* ================================================= */}

      <div className="absolute inset-0">
        <Image
          src="/About/CreatortoGether.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Left side readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090807]/80 via-[#090807]/45 to-transparent" />
      </div>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto flex min-h-[470px] max-w-[1400px] items-center px-6 py-16 lg:min-h-[490px] lg:px-14">
        <div className="max-w-[650px]">

          {/* Small heading */}
          <div className="mb-3 flex items-center gap-5">
            <span className="font-sans text-[12px] font-medium tracking-[0.22em] text-[#dca653]">
              LET&apos;S CREATE TOGETHER
            </span>

            <span className="h-px w-[125px] bg-[#b07d3a]" />
          </div>

          {/* Main heading */}
          <h2 className="font-serif text-[46px] leading-[0.98] text-white sm:text-[58px] lg:text-[60px]">
            Ready to Capture
          </h2>

          {/* Script heading */}
          <h3 className="mt-1 font-serif text-[43px] font-light italic leading-[1.05] text-[#dca653] sm:text-[52px] lg:text-[56px]">
            Your Special Moments?
          </h3>

          {/* Description */}
          <p className="mt-5 max-w-[580px] font-sans text-[15px] leading-6 text-white/75 sm:text-[16px]">
            Whether it&apos;s a wedding, event or a personal shoot, our team is
            here to turn your moments into timeless visuals.
          </p>

          {/* CTA */}
          <Link
            href="/book-a-shoot"
            className="group mt-6 inline-flex h-[62px] items-center gap-4 rounded-full border border-[#9f7137] bg-transparent pr-7 transition-all duration-300 hover:border-[#dca653] hover:bg-[#dca653]/10"
          >
            {/* Arrow circle */}
            <span className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#e5b86b] text-black transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight
                size={24}
                strokeWidth={1.7}
              />
            </span>

            <span className="font-sans text-[13px] font-medium tracking-[0.08em] text-white">
              BOOK US NOW
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}