"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { portfolioProject } from "@/data";
import type { PortfolioItem } from "@/types";
import { icons } from "./icons";
import { scriptFont, revealDelay } from "./siteData";

const project = portfolioProject;
const { bodyText, concepts, gallery } = project;

export default function PortfolioDetail({ item }: { item: PortfolioItem }) {
  const slides = [project.coverImage, item.image, ...gallery.slice(0, 3)];
  const [activeSlide, setActiveSlide] = useState(0);

  const moveSlide = (direction: number) => {
    setActiveSlide(
      (current) => (current + direction + slides.length) % slides.length,
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#0d0c0b] py-14">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-[60px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_370px]">
          {/* ================================================= */}
          {/* LEFT - SLIDER + INTRO */}
          {/* ================================================= */}
          <div data-reveal="left" className="min-w-0">
            <div className="relative h-[300px] overflow-hidden rounded-[8px] border border-[#5c4428] sm:h-[400px] lg:h-[452px]">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={`${slide}-${index}`} className="relative h-full w-full shrink-0">
                    <Image
                      src={slide}
                      alt={`${item.title} ${index + 1}`}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 830px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <button
                type="button"
                aria-label="Previous image"
                onClick={() => moveSlide(-1)}
                className="absolute left-6 top-1/2 flex h-[55px] w-[55px] -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-[#e3ad5c] transition-colors hover:bg-[#e3ad5c] hover:text-black"
              >
                <ChevronLeft size={30} strokeWidth={2} />
              </button>

              <button
                type="button"
                aria-label="Next image"
                onClick={() => moveSlide(1)}
                className="absolute right-6 top-1/2 flex h-[55px] w-[55px] -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-[#e3ad5c] transition-colors hover:bg-[#e3ad5c] hover:text-black"
              >
                <ChevronRight size={30} strokeWidth={2} />
              </button>
            </div>

            {/* Category label */}
            <div className="mt-7 flex items-center gap-[76px]">
              <span className="font-sans text-[15px] tracking-[0.12em] text-[#e3ad5c]">
                {item.title.toUpperCase()}
              </span>

              <span className="hidden h-[3px] w-[52px] bg-[#e3ad5c] sm:block" />
            </div>

            <h2 className="mt-1 flex flex-wrap items-baseline gap-x-5 font-serif text-[40px] font-semibold leading-tight text-white sm:text-[54px]">
              {project.client}
              <span
                className="font-normal text-[#e3ad5c]"
                style={scriptFont}
              >
                {project.headingScript}
              </span>
            </h2>

            <p className="mt-3 max-w-[1050px] font-sans text-[16px] leading-[1.75] text-white/85 sm:text-[17px] lg:max-w-none lg:pr-0">
              {bodyText}
            </p>
          </div>

          {/* ================================================= */}
          {/* RIGHT - PROJECT DETAILS */}
          {/* ================================================= */}
          <aside data-reveal="right" className="self-start rounded-[10px] border border-[#76552d] bg-[#0f0e0c] px-5 pb-4 pt-4">
            <h3 className="flex items-baseline gap-2.5 font-sans text-[28px] font-semibold text-white">
              Project
              <span className="text-[34px] font-normal text-[#e3ad5c]" style={scriptFont}>
                Details
              </span>
            </h3>

            <div className="mt-1 h-[3px] w-[54px] bg-[#e3ad5c]" />

            <dl className="mt-5 border-t border-white/[0.12]">
              {project.info.map(({ icon, label, value }) => {
                const Icon = icons[icon];

                return (
                  <div
                    key={label}
                    className="flex items-center gap-4 border-b border-white/[0.12] py-3"
                  >
                    <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#e3ad5c] text-[#e3ad5c]">
                      <Icon size={16} strokeWidth={1.6} />
                    </span>

                    <dt className="w-[128px] shrink-0 font-sans text-[14px] font-semibold text-white">
                      {label}
                    </dt>

                    <dd className="font-sans text-[14px] text-white/85">
                      {value}
                    </dd>
                  </div>
                );
              })}

              <div className="flex items-center gap-4 border-b border-white/[0.12] py-3">
                <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#e3ad5c] text-[#e3ad5c]">
                  <Star size={16} strokeWidth={1.6} />
                </span>

                <dt className="w-[128px] shrink-0 font-sans text-[14px] font-semibold text-white">
                  CLIENT RATING
                </dt>

                <dd className="flex gap-[3px]" aria-label={`${project.rating} out of 5 stars`}>
                  {Array.from({ length: project.rating }, (_, i) => i + 1).map((star) => (
                    <Star
                      key={star}
                      size={17}
                      fill="#e31b14"
                      strokeWidth={0}
                      className="text-[#e31b14]"
                    />
                  ))}
                </dd>
              </div>
            </dl>

            {/* Camera gear */}
            <div className="mt-6 grid grid-cols-2 divide-x divide-white/[0.15] pb-2">
              {project.gear.map((gear) => (
                <div key={gear.brand} className="py-2 text-center">
                  <p className="font-serif text-[34px] font-bold leading-none text-white">
                    {gear.brand}
                  </p>
                  <p className="mt-2 font-sans text-[13px] text-white/80">
                    {gear.model}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* ================================================= */}
        {/* PROJECT CONCEPT */}
        {/* ================================================= */}
        <h3 className="mt-10 font-sans text-[19px] font-semibold tracking-[0.06em] text-white">
          PROJECT CONCEPT
        </h3>

        <div className="mt-2 h-[3px] w-[54px] bg-[#e3ad5c]" />

        <p className="mt-6 font-sans text-[16px] leading-[1.75] text-white/85 sm:text-[17px]">
          {bodyText}
        </p>

        <ul className="mt-4 space-y-2.5">
          {concepts.map((concept) => (
            <li key={concept} className="flex items-center gap-6">
              <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#f2b864] text-[#17120b]">
                <Check size={19} strokeWidth={2.5} />
              </span>

              <span className="font-sans text-[15px] text-white/85 sm:text-[17px]">
                {concept}
              </span>
            </li>
          ))}
        </ul>

        {/* ================================================= */}
        {/* PROJECT GALLERY */}
        {/* ================================================= */}
        <h3 className="mt-10 font-sans text-[19px] font-semibold tracking-[0.06em] text-white">
          PROJECT GALLERY
        </h3>

        <div className="mt-2 h-[3px] w-[54px] bg-[#e3ad5c]" />

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => (
            <div
              key={image}
              data-reveal="zoom"
              style={revealDelay(index % 3)}
              className="group relative h-[200px] overflow-hidden rounded-[6px] border border-[#3a2d1d]"
            >
              <Image
                src={image}
                alt={`${item.title} gallery ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <p className="mt-8 font-sans text-[16px] leading-[1.75] text-white/85 sm:text-[17px]">
          {bodyText} {bodyText}
        </p>
      </div>
    </section>
  );
}
