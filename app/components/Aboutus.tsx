import Image from "next/image";
import Link from "next/link";
import type { AboutUsVariant } from "@/types";
import { scriptFont } from "./siteData";

export default function Aboutus({ data }: { data: AboutUsVariant }) {
  return (
    <section className="relative overflow-hidden bg-[#0b0a09] py-12 lg:py-16">
      {/* Background glow, not a background image */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-[55%] bg-[radial-gradient(ellipse_at_70%_45%,rgba(145,96,43,0.13),transparent_70%)]" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-6 sm:px-10 lg:grid-cols-[48%_52%] lg:gap-5 lg:px-16">
        {/* LEFT CONTENT */}
        <div data-reveal="left" className="relative z-10 max-w-[610px]">
          <div className="mb-7 flex items-center gap-5">
            <span className="font-sans text-[13px] font-medium tracking-[0.2em] text-white">
              {data.subtitle}
            </span>
            <span className="h-px w-36 bg-[#8d6a3d]" />
          </div>

          <h2 className="font-serif text-[32px] leading-[1.08] text-white sm:text-[38px] lg:text-[40px]">
            {data.title1}
            <br />
            <span
              className="font-normal text-[#d9a04a]"
              style={scriptFont}
            >
              {data.titleScript}
            </span>{" "}
            {data.title2}
          </h2>

          <div className="mt-6 h-[4px] w-[100px] bg-[#e0a84d]" />

          <div className="mt-7 space-y-5 font-sans text-[16px] leading-7 text-white/75">
            {data.descriptions.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

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

        {/* RIGHT SIDE — TWO SEPARATE IMAGES */}
        <div
          data-reveal="right"
          className="relative mx-auto mt-5 min-h-[390px] w-full max-w-[700px] sm:min-h-[480px] lg:mt-0 lg:min-h-[510px]"
        >
          {/* Top gold decorative block */}
          <div className="absolute left-[10%] top-[4%] z-0 h-[80px] w-[120px] bg-[#e5b66a] sm:h-[90px] sm:w-[135px]" />

          {/* MAIN PHOTOGRAPHER IMAGE */}
          <div className="absolute right-[4%] top-[8%] z-10 h-[65%] w-[80%] border border-[#d9a04a]">
            <Image
              src="/About/PhotographerStudio.png"
              alt="Photographer working in a professional studio"
              fill
              sizes="(max-width: 768px) 75vw, 500px"
              className="object-cover object-center"
            />
          </div>

          {/* Bottom gold decorative block */}
          <div className="absolute bottom-[20%] right-[0%] z-0 h-[85px] w-[100px] bg-[#e5b66a] sm:h-[100px] sm:w-[120px]" />

          {/* SMALL CAMERA IMAGE */}
          <div className="absolute bottom-[10%] left-[0%] z-20 h-[34%] w-[39%] border-2 border-[#d9a04a] bg-[#0b0a09]">
            <Image
              src="/About/CameraDetail.png"
              alt="Professional camera detail"
              fill
              sizes="(max-width: 768px) 40vw, 260px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}