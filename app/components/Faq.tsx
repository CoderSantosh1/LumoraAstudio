"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, MessageCircleQuestionMark } from "lucide-react";
import type { FaqVariant } from "@/types";
import { scriptFont } from "./siteData";

export default function Faq({ data }: { data: FaqVariant }) {
  const { faqGroups, card } = data;
  const [openItem, setOpenItem] = useState<string | null>("0-0");

  return (
    <section className="relative overflow-hidden bg-[#0b0a09]">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(151,103,44,0.16),transparent_55%)]" />

        <div className="absolute right-0 top-0 h-full w-[45%] bg-[radial-gradient(circle_at_70%_30%,rgba(151,103,44,0.18),transparent_65%)]" />
      </div>

      {/* Photographer image - top right */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-[260px] w-[36%] lg:block">
        <Image
          src={data.image}
          alt=""
          fill
          sizes="36vw"
          className="object-cover object-left-top"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0a09] via-transparent to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b0a09] to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-9 lg:px-[106px] lg:pb-16 lg:pt-11">
        {/* ================================================= */}
        {/* LEFT - QUESTIONS */}
        {/* ================================================= */}
        <div data-reveal="left" className="min-w-0">
          <div className="flex items-center gap-4">
            <span className="font-sans text-[13px] tracking-[0.1em] text-[#dca653]">
              {data.subtitle}
            </span>

            <span className="h-px w-[105px] bg-[#b07d3a]" />
          </div>

          <h2 className="mt-1 flex flex-wrap items-baseline gap-x-4 font-serif text-[36px] font-semibold leading-tight text-white sm:text-[46px]">
            {data.title1}
            <span
              className="font-normal text-[#dca653]"
              style={scriptFont}
            >
              {data.titleScript}
            </span>
          </h2>

          <p className="mt-2 max-w-[620px] font-sans text-[15px] leading-[1.45] text-white/85">
            {data.description}
          </p>

          <h3 className="mt-7 font-serif text-[23px] font-semibold text-white">
            {data.groupTitle}
          </h3>

          <div className="mt-2 h-[3px] w-[34px] bg-[#e3ad5c]" />

          {/* Accordion groups */}
          <div className="mt-5 space-y-3">
            {faqGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-1.5">
                {group.map((faq, index) => {
                  const id = `${groupIndex}-${index}`;
                  const isOpen = openItem === id;

                  return (
                    <div
                      key={id}
                      className={`overflow-hidden rounded-[4px] border transition-colors ${
                        isOpen
                          ? "border-[#f2c47e] bg-[#0e0d0b]"
                          : "border-white/25 bg-[#0e0d0b]/80 hover:border-[#dca653]/60"
                      }`}
                    >
                      <h4>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${id}`}
                          onClick={() => setOpenItem(isOpen ? null : id)}
                          className={`flex w-full items-center gap-6 px-4 py-[7px] text-left transition-colors ${
                            isOpen ? "bg-[#f8cd88] text-[#17120b]" : "text-white"
                          }`}
                        >
                          <span className="flex h-[29px] w-[29px] shrink-0 items-center justify-center rounded-full bg-[#f5b85c] font-sans text-[12px] font-semibold text-[#17120b]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="flex-1 font-sans text-[13px] font-medium">
                            {faq.question}
                          </span>

                          <span
                            className={`flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                              isOpen
                                ? "rotate-180 border-[#17120b] text-[#17120b]"
                                : "border-[#dca653] text-[#dca653]"
                            }`}
                          >
                            <ChevronDown size={13} strokeWidth={2} />
                          </span>
                        </button>
                      </h4>

                      <div
                        id={`faq-panel-${id}`}
                        role="region"
                        hidden={!isOpen}
                        className="px-[70px] pb-3 pt-3 font-sans text-[12px] leading-[1.55] text-white/85"
                      >
                        {faq.answer}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT - INFO CARD */}
        {/* ================================================= */}
        <aside data-reveal="right" className="self-end overflow-hidden rounded-[6px] border border-[#5c4428] bg-[#0e0d0b]/90 lg:mb-[-10px]">
          <div className="relative h-[205px]">
            <Image
              src={card.image.src}
              alt={card.image.alt}
              fill
              sizes="380px"
              className="object-cover"
            />
          </div>

          <div className="px-7 pb-7 pt-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif text-[32px] font-bold leading-none text-white">
                  {card.title}
                </h3>

                <div className="mt-3 h-[3px] w-[34px] bg-[#e3ad5c]" />
              </div>

              <MessageCircleQuestionMark
                size={36}
                strokeWidth={1.3}
                className="text-[#e3ad5c]"
              />
            </div>

            <p className="mt-4 font-sans text-[15px] leading-[1.4] text-white/85">
              {card.description}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
