import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolioItems } from "@/data";
import { scriptFont, revealDelay } from "./siteData";

export default function PortfolioGrid() {
  return (
    <section className="relative overflow-hidden bg-[#0b0a09] py-16 lg:pb-14 lg:pt-14">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(151,103,44,0.22),transparent_65%)]" />

        <div className="absolute right-0 top-0 h-[360px] w-[35%] bg-[radial-gradient(circle_at_80%_30%,rgba(201,140,60,0.14),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-16">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}
        <div data-reveal="up" className="mx-auto max-w-[760px] text-center">
          <div className="flex items-center justify-center gap-6">
            <span className="h-px w-[55px] bg-[#b07d3a]" />

            <span className="font-sans text-[14px] font-medium tracking-[0.25em] text-[#dca653]">
              OUR PORTFOLIO
            </span>

            <span className="h-px w-[55px] bg-[#b07d3a]" />
          </div>

          <h2 className="mt-3 font-serif text-[42px] leading-tight text-white sm:text-[54px]">
            Lumora Astudio
          </h2>

          <p
            className="text-[34px] leading-[1.35] text-[#dca653] sm:text-[48px]"
            style={scriptFont}
          >
            All of Your beautiful memories
          </p>

          <p className="mt-3 font-sans text-[16px] leading-[1.8] text-white/85 sm:text-[18px]">
            We capture real moments, genuine emotions and timeless stories
            through our lens.
            <br className="hidden sm:block" /> Explore our latest work and see
            how we turn moments into beautiful memories.
          </p>
        </div>

        {/* ================================================= */}
        {/* GRID */}
        {/* ================================================= */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Link
              key={item.slug}
              data-reveal="up"
              style={revealDelay(index % 3)}
              href={`/portfolio/${item.slug}`}
              className="group relative block h-[320px] overflow-hidden rounded-[4px] border border-[#5c4428] transition-colors duration-300 hover:border-[#dca653] lg:h-[335px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 pb-5">
                <h3 className="font-serif text-[20px] text-white">
                  {item.title}
                </h3>

                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-[#e3ad5c] text-[#e3ad5c] transition-all duration-300 group-hover:bg-[#e3ad5c] group-hover:text-black">
                  <ArrowRight size={18} strokeWidth={1.8} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
