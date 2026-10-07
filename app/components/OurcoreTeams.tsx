"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Globe,
} from "lucide-react";

const teamMembers = [
  {
    name: "Nelson Jameson",
    role: "PHOTOGRAPHER",
    image: "/About/NelsonJameson.png",
  },
  {
    name: "Ellie Duncan",
    role: "PHOTOGRAPHER",
    image: "/About/EllieDuncan.png",
  },
  {
    name: "Maxim Alexander",
    role: "CEO, KIMONO AGENCY",
    image: "/About/MaximAlexander.png",
  },
  {
    name: "Sarah Mitchell",
    role: "PHOTOGRAPHER",
    image: "/About/SarahMitchell.png",
  },
  {
    name: "David Wilson",
    role: "PHOTOGRAPHER",
    image: "/About/DavidWilson.png",
  },
];

const socialLinks = [
  {
    type: "facebook",
    href: "#",
    label: "Facebook",
  },
  {
    type: "instagram",
    href: "#",
    label: "Instagram",
  },
  {
    type: "youtube",
    href: "#",
    label: "YouTube",
  },
  {
    type: "globe",
    href: "#",
    label: "Website",
  },
];

export default function OurcoreTeams() {
  return (
    <section className="relative overflow-hidden bg-[#0b0a09] py-16 lg:py-20">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-[48%] bg-[radial-gradient(circle_at_80%_35%,rgba(143,96,43,0.16),transparent_65%)]" />

        <div className="absolute bottom-0 left-0 h-[250px] w-[45%] bg-[radial-gradient(circle_at_left_bottom,rgba(111,75,35,0.12),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-14">

        {/* ================= HEADER ================= */}

        <div className="grid items-start gap-8 lg:grid-cols-[45%_55%]">

          {/* LEFT HEADING */}
          <div>
            <div className="mb-2 flex items-center gap-5">
              <span className="font-sans text-[12px] font-medium tracking-[0.22em] text-[#dca653]">
                OUR TEAM
              </span>

              <span className="h-px w-[125px] bg-[#806039]" />
            </div>

            <h2 className="font-serif text-[45px] leading-[0.98] text-white sm:text-[55px] lg:text-[58px]">
              Our Core Team of
            </h2>

            <h3 className="mt-1 font-serif text-[45px] italic leading-none text-[#dca653] sm:text-[52px] lg:text-[55px]">
              Photographers
            </h3>
          </div>

          {/* RIGHT DESCRIPTION + ARROWS */}
          <div className="flex items-start justify-between gap-6 lg:pt-8">
            <p className="max-w-[570px] font-sans text-[14px] leading-6 text-white/65 sm:text-[15px]">
              We&apos;re deeply passionate about{" "}
              <strong className="font-semibold text-white">
                capturing your lovely memories
              </strong>{" "}
              in cameras and convey your love for every moment of life as a
              whole.
            </p>

            {/* Desktop arrows */}
            <div className="hidden shrink-0 items-center gap-3 md:flex">
              <button
                type="button"
                aria-label="Previous team member"
                className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#9b6e32] text-[#dca653] transition-all duration-300 hover:bg-[#dca653] hover:text-black"
              >
                <ArrowLeft size={19} strokeWidth={1.5} />
              </button>

              <button
                type="button"
                aria-label="Next team member"
                className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#dca653] bg-[#e4b66a] text-black transition-all duration-300 hover:bg-[#dca653]"
              >
                <ArrowRight size={19} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= TEAM CARDS ================= */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group relative overflow-hidden border border-[#76552d] bg-[#0e0d0b] transition-all duration-500 hover:-translate-y-1 hover:border-[#dca653]"
            >
              {/* ================= IMAGE ================= */}

              <div className="relative aspect-[0.88/1] overflow-hidden border-b border-[#76552d]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Gold corner lines */}
                <span className="absolute left-0 top-0 h-[3px] w-[38px] bg-[#dca653]" />

                <span className="absolute bottom-0 right-0 h-[3px] w-[38px] bg-[#dca653]" />
              </div>

              {/* ================= CONTENT ================= */}

              <div className="px-5 pb-4 pt-4">

                {/* Name */}
                <h3 className="font-serif text-[21px] leading-tight text-white">
                  {member.name}
                </h3>

                {/* Role */}
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-[10px] font-medium tracking-[0.15em] text-[#dca653]">
                    {member.role}
                  </span>

                  <span className="h-px w-[40px] bg-[#806039]" />
                </div>

                {/* ================= SOCIAL ICONS ================= */}

                <div className="mt-4 flex items-center gap-3">

                  {/* Facebook */}
                  <Link
                    href="#"
                    aria-label={`${member.name} Facebook`}
                    className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#9b6e32] text-[#dca653] transition-all duration-300 hover:bg-[#dca653] hover:text-black"
                  >
                    <span className="font-serif text-[16px] font-bold">
                      f
                    </span>
                  </Link>

                  {/* Instagram */}
                  <Link
                    href="#"
                    aria-label={`${member.name} Instagram`}
                    className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#9b6e32] text-[#dca653] transition-all duration-300 hover:bg-[#dca653] hover:text-black"
                  >
                    <span className="relative flex h-[14px] w-[14px] items-center justify-center rounded-[4px] border-[1.5px] border-current">
                      <span className="h-[5px] w-[5px] rounded-full border border-current" />
                      <span className="absolute right-[1.5px] top-[1.5px] h-[2px] w-[2px] rounded-full bg-current" />
                    </span>
                  </Link>

                  {/* YouTube */}
                  <Link
                    href="#"
                    aria-label={`${member.name} YouTube`}
                    className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#9b6e32] text-[#dca653] transition-all duration-300 hover:bg-[#dca653] hover:text-black"
                  >
                    <span className="flex h-[12px] w-[17px] items-center justify-center rounded-[4px] bg-current">
                      <span className="ml-[1px] h-0 w-0 border-y-[3px] border-l-[5px] border-y-transparent border-l-[#0e0d0b]" />
                    </span>
                  </Link>

                  {/* Website */}
                  <Link
                    href="#"
                    aria-label={`${member.name} Website`}
                    className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#9b6e32] text-[#dca653] transition-all duration-300 hover:bg-[#dca653] hover:text-black"
                  >
                    <Globe
                      size={14}
                      strokeWidth={1.5}
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= MOBILE ARROWS ================= */}

        <div className="mt-7 flex justify-center gap-3 md:hidden">
          <button
            type="button"
            aria-label="Previous team member"
            className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#9b6e32] text-[#dca653]"
          >
            <ArrowLeft size={19} />
          </button>

          <button
            type="button"
            aria-label="Next team member"
            className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#dca653] bg-[#e4b66a] text-black"
          >
            <ArrowRight size={19} />
          </button>
        </div>

      </div>
    </section>
  );
}