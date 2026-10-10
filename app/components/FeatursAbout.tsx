"use client";

import Image from "next/image";
import type { WhyChooseUsVariant } from "@/types";
import CountUp from "./CountUp";
import { icons } from "./icons";
import { scriptFont } from "./siteData";

/* Positions of the two stat cards in the image collage */
const statPositions = ["right-[30%]", "right-[3%]"];

export default function FeatursAbout({ data }: { data: WhyChooseUsVariant }) {
  const { features } = data;

  return (
    <section className="relative overflow-hidden bg-[#0b0a09] py-12 lg:min-h-[640px] lg:py-10">
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(120,78,32,0.12),transparent_45%)]" />

        <div className="absolute right-0 top-0 h-full w-[50%] bg-[radial-gradient(circle_at_70%_45%,rgba(120,78,32,0.10),transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-14">
        <div className="grid items-center gap-8 lg:grid-cols-[50%_50%]">

          {/* ================================================= */}
          {/* LEFT - IMAGE COLLAGE */}
          {/* ================================================= */}

          <div data-reveal="left" className="relative min-h-[570px] lg:min-h-[590px]">

            {/* Background image / glow */}
            <div className="absolute left-0 top-0 h-full w-full opacity-30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_50%,rgba(180,125,54,0.35),transparent_55%)]" />
            </div>

            {/* Gold vertical decoration */}
            <div className="absolute left-[2%] top-[55px] z-0 h-[275px] w-[55px] bg-[#dca653] sm:w-[70px]" />

            {/* ================================================= */}
            {/* MAIN WEDDING IMAGE */}
            {/* ================================================= */}

            <div className="absolute left-[10%] top-0 z-10 w-[72%] sm:left-[10%] sm:w-[72%]">
              <div className="relative aspect-[1/1.02] overflow-hidden border border-[#c39450]">
                <Image
                  src={data.mainImage.src}
                  alt={data.mainImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 70vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* ================================================= */}
            {/* SMALL CAMERA IMAGE */}
            {/* ================================================= */}

            <div className="absolute bottom-[15px] left-[5%] z-30 w-[35%] sm:left-[5%] sm:w-[35%]">
              <div className="relative aspect-[1.3/0.95] overflow-hidden border border-[#dca653]">
                <Image
                  src={data.smallImage.src}
                  alt={data.smallImage.alt}
                  fill
                  sizes="350px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* ================================================= */}
            {/* BOTTOM GOLD DECORATION */}
            {/* ================================================= */}

            <div className="absolute bottom-[58px] right-[12%] z-0 h-[85px] w-[70px] bg-[#dca653] sm:right-[13%] sm:w-[90px]" />

            {/* ================================================= */}
            {/* STATS (50+ / 300+) */}
            {/* ================================================= */}

            {data.stats.map((stat, index) => {
              const Icon = icons[stat.icon];

              return (
                <div
                  key={stat.label}
                  className={`absolute bottom-[5px] z-40 flex h-[125px] w-[145px] flex-col items-center justify-center border sm:h-[135px] sm:w-[155px] ${statPositions[index] ?? ""} ${
                    stat.highlight
                      ? "border-[#dca653] bg-[#e5b96d]"
                      : "border-[#a8793b] bg-[#0e0d0c]"
                  }`}
                >
                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    className={`mb-1 ${stat.highlight ? "text-black" : "text-[#dca653]"}`}
                  />

                  <span
                    className={`font-serif text-[36px] leading-none ${stat.highlight ? "text-black" : "text-white"}`}
                  >
                    <CountUp value={stat.value} />
                  </span>

                  <span
                    className={`mt-1 text-[12px] ${stat.highlight ? "text-black/70" : "text-white/60"}`}
                  >
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ================================================= */}
          {/* RIGHT - WHY CHOOSE US */}
          {/* ================================================= */}

          <div data-reveal="right" className="relative z-20">

            {/* Section Label */}
            <div className="mb-2 flex items-center gap-5">
              <span className="font-sans text-[12px] font-medium tracking-[0.22em] text-[#dca653]">
                {data.subtitle}
              </span>

              <span className="h-px w-[115px] bg-[#805e35]" />
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[48px] leading-[0.95] text-white sm:text-[58px] lg:text-[60px]">
              {data.title1}{" "}
              <span className="font-normal text-[#dca653]" style={scriptFont}>
                {data.titleScript}
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[540px] font-sans text-[15px] leading-6 text-white/70">
              {data.description}
            </p>

            {/* ================================================= */}
            {/* FEATURE LIST */}
            {/* ================================================= */}

            <div className="mt-5 max-w-[540px]">
              {features.map((feature, index) => {
                const Icon = icons[feature.icon];

                return (
                  <div
                    key={feature.title}
                    className={`group flex items-center gap-5 py-4 ${
                      index !== features.length - 1
                        ? "border-b border-white/[0.09]"
                        : ""
                    }`}
                  >
                    {/* ICON */}
                    <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[#b27b32] text-[#dca653] transition-all duration-300 group-hover:bg-[#dca653] group-hover:text-black">
                      <Icon
                        size={25}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* TEXT */}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-[19px] leading-tight text-white sm:text-[20px]">
                        {feature.title}
                      </h3>

                      <p className="mt-1 max-w-[300px] font-sans text-[13px] leading-5 text-white/50">
                        {feature.description}
                      </p>
                    </div>

                   
                    
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}