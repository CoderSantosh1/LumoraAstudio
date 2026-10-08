import Image from "next/image";
import Link from "next/link";
import type { AboutUsVariant } from "@/types";
import { scriptFont } from "./siteData";

export default function Aboutus({ data }: { data: AboutUsVariant }) {
  return (
    <section className="relative overflow-hidden bg-[#0b0a09] py-20 lg:py-24">
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-8 lg:px-16">

        {/* ================= LEFT CONTENT ================= */}
        <div data-reveal="left" className="relative z-10 max-w-[610px]">

          {/* Section Label */}
          <div className="mb-7 flex items-center gap-5">
            <span className="font-sans text-[13px] font-medium tracking-[0.2em] text-white">
              {data.subtitle}
            </span>

            <span className="h-px w-36 bg-[#8d6a3d]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-[32px] leading-[1.08] text-white sm:text-[38px] lg:text-[40px]">
            {data.title1}
            <br />

            <span
              className="font-light italic text-[#d9a04a]"
              style={scriptFont}
            >
              {data.titleScript}
            </span>{" "}
            {data.title2}
          </h2>

          {/* Gold underline */}
          <div className="mt-6 h-[4px] w-[100px] bg-[#e0a84d]" />

          {/* Paragraph */}
          <div className="mt-7 space-y-5 font-sans text-[16px] leading-7 text-white/75">
            {data.descriptions.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* Button */}
          <Link
            href={data.button.url}
            className="group mt-8 inline-flex items-center gap-5 border border-[#d49b40] px-9 py-4 font-sans text-[15px] font-semibold text-[#e2b15d] transition-all duration-300 hover:bg-[#d49b40] hover:text-black"
          >
            {data.button.text}

            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div data-reveal="right" className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[520px]">
          <div className="absolute left-0 top-1/2 aspect-[1680/920] w-full -translate-y-1/2 lg:left-[-288px] lg:w-[920px]">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              sizes="(min-width: 1024px) 920px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}