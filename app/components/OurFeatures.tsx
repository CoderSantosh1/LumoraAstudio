import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { WhyChooseUsVariant } from "@/types";
import CountUp from "./CountUp";
import { icons } from "./icons";
import { scriptFont } from "./siteData";

export default function OurFeatures({ data }: { data: WhyChooseUsVariant }) {
  const { features, infoCard } = data;

  return (
    <section className="relative overflow-hidden bg-[#0b0a09] py-12 lg:min-h-[660px] lg:py-12">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-[55%] bg-[radial-gradient(circle_at_70%_35%,rgba(154,104,45,0.15),transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-14">

        <div className="grid lg:grid-cols-[40%_60%]">

          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}
          <div data-reveal="left" className="relative z-20">

            {/* Section Label */}
            <div className="mb-2 flex items-center gap-5">
              <span className="font-sans text-[12px] font-medium tracking-[0.22em] text-[#dca653]">
                {data.subtitle}
              </span>

              <span className="h-px w-[115px] bg-[#805e35]" />
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[52px] leading-[0.95] text-white sm:text-[60px]">
              {data.title1}{" "}
              <span className="font-normal text-[#dca653]" style={scriptFont}>
                {data.titleScript}
              </span>
            </h2>

            {/* Intro */}
            <p className="mt-5 max-w-[440px] font-sans text-[15px] leading-6 text-white/70">
              {data.description}
            </p>

            {/* Feature List */}
            <div className="mt-5 max-w-[410px]">
              {features.map((feature, index) => {
                const Icon = icons[feature.icon];

                return (
                  <div
                    key={feature.title}
                    className={`group flex items-center gap-5 py-4 ${
                      index !== features.length - 1
                        ? "border-b border-white/[0.08]"
                        : ""
                    }`}
                  >
                    {/* Icon */}
                    <div className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full border border-[#b27b32] text-[#dca653] transition-all duration-300 group-hover:bg-[#dca653] group-hover:text-black">
                      <Icon size={27} strokeWidth={1.5} />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-[20px] leading-tight text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-1 max-w-[250px] font-sans text-[13px] leading-5 text-white/50">
                        {feature.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <Link
                      href="#"
                      className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-[#9b6e32] text-[#dca653] transition-all duration-300 hover:bg-[#dca653] hover:text-black"
                    >
                      <ArrowRight size={19} strokeWidth={1.5} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}
          <div data-reveal="right" className="relative mt-16 min-h-[570px] lg:mt-0">

            {/* Main Wedding Image */}
            <div className="absolute right-[4%] top-0 z-10 w-[72%]">
              <div className="relative aspect-[1.08/1] overflow-hidden border border-[#c39450]">
                <Image
                  src={data.mainImage.src}
                  alt={data.mainImage.alt}
                  fill
                  sizes="(max-width: 1024px) 70vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Top Gold Decoration */}
            <div className="absolute right-[72%] top-[28px] z-0 h-[65px] w-[120px] bg-[#dca653]" />

            {/* Middle Content Card */}
            <div className="absolute left-[0%] top-[70px] z-20 w-[40%] border border-[#9a713c] bg-[#0d0c0b] px-7 py-7 shadow-2xl">
              <p className="text-[11px] tracking-[0.18em] text-[#dca653]">
                {infoCard.subtitle}
              </p>

              <h3 className="mt-3 font-serif text-[26px] leading-[1.05] text-white">
                {infoCard.titleLines[0]}
                <br />
                {infoCard.titleLines[1]}
              </h3>

              <div className="my-5 h-[2px] w-[34px] bg-[#dca653]" />

              <p className="font-sans text-[13px] leading-5 text-white/55">
                {infoCard.description}
              </p>

              <Link
                href={infoCard.button.url}
                className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-[#dca653] transition hover:text-white"
              >
                {infoCard.button.text}
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Camera Image */}
            <div className="absolute bottom-[30px] left-[24%] z-30 w-[30%]">
              <div className="relative aspect-[1.25/1] overflow-hidden border border-[#dca653]">
                <Image
                  src={data.smallImage.src}
                  alt={data.smallImage.alt}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom Gold Decoration */}
            <div className="absolute bottom-[88px] right-[0%] z-0 h-[78px] w-[100px] bg-[#dca653]" />

            {/* ================================================= */}
            {/* STATS */}
            {/* ================================================= */}
            <div className="absolute bottom-[28px] right-0 z-40 flex gap-3">
              {data.stats.map((stat) => {
                const Icon = icons[stat.icon];

                return (
                  <div
                    key={stat.id}
                    className={`flex h-[130px] w-[155px] flex-col items-center justify-center border ${
                      stat.highlight
                        ? "border-[#dca653] bg-[#e4b86c]"
                        : "border-[#a8793b] bg-[#0e0d0c]"
                    }`}
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                      className={`mb-1 ${stat.highlight ? "text-black" : "text-[#dca653]"}`}
                    />

                    <span
                      className={`font-serif text-[38px] leading-none ${stat.highlight ? "text-black" : "text-white"}`}
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
          </div>
        </div>
      </div>
    </section>
  );
}