"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { revealDelay } from "./siteData";
import type { ServicesVariant } from "@/types";

/* The home page pages through four at a time; the services page shows all */
const SERVICES_PER_PAGE = 4;

export default function Services({
  data,
  showAll = false,
}: {
  data: ServicesVariant;
  showAll?: boolean;
}) {
  const services = data.services;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(services.length / SERVICES_PER_PAGE);

  const visibleServices = showAll
    ? services
    : services.slice(
        (page - 1) * SERVICES_PER_PAGE,
        page * SERVICES_PER_PAGE,
      );

  const goToPage = (nextPage: number) => {
    setPage(Math.min(Math.max(nextPage, 1), totalPages));
  };

  return (
    <section className="relative overflow-hidden bg-[#0a0908] py-10 ">
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[50%] bg-[radial-gradient(circle_at_top_right,rgba(151,103,44,0.13),transparent_65%)]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-14">
        {/* ================= HEADER ================= */}
        <div data-reveal="up" className="mb-10 grid items-start gap-8 lg:grid-cols-[1fr_0.95fr]">
          {/* Left */}
          <div>
            <div className="mb-1 flex items-center gap-5">
              <span className="font-sans text-[12px] font-medium tracking-[0.25em] text-[#dca653]">
                {data.subtitle}
              </span>

              <span className="h-px w-[115px] bg-[#805e35]" />
            </div>

            <h2 className="font-serif text-[48px] leading-[0.95] tracking-[-1px] text-white sm:text-[56px]">
              {data.title1}
            </h2>

            <h3 className="mt-1 font-serif text-[47px] leading-[0.95] italic text-[#dca653] sm:text-[54px]">
              {data.titleScript}
            </h3>
          </div>

          {/* Right */}
          <div className="lg:pt-5 lg:pl-5">
            <p className="max-w-[570px] font-sans text-[15px] leading-[1.6] text-white/70">
              {data.descriptionLead}{" "}
              <strong className="font-semibold text-white">
                {data.descriptionHighlight}
              </strong>{" "}
              {data.descriptionEnd}
            </p>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleServices.map((service, index) => (
            <article
                key={service.number}
                data-reveal="up"
                style={revealDelay(index % 4)}
                className="group relative overflow-hidden rounded-[20px] border border-[#76552d] bg-[#11100e]"
            >
                {/* IMAGE */}
                <div className="relative h-[205px] overflow-hidden">
                <Image
                    src={service.cardImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#11100e]/70" />

                {/* Curved bottom */}
                <div className="absolute -bottom-[30px] left-[-8%] h-[60px] w-[116%] rounded-[50%] bg-[#11100e]" />
                </div>

                {/* CONTENT */}
                <div className="relative px-5 pb-7">

                {/* NUMBER */}
                <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#a8793b] bg-[#11100e] font-serif text-[13px] text-[#dca653]">
                    {service.number}
                </div>

                {/* TITLE + ARROW */}
                <div className="mt-5 flex items-start justify-between gap-3">

                    {/* Title */}
                    <h3 className="font-serif text-[23px] leading-[1.02] text-white">
                    {service.titleLines[0]}
                    <br />
                    {service.titleLines[1]}
                    </h3>

                    {/* Forward Arrow */}
                    <Link
                    href={`/services/${service.slug}`}
                    aria-label={`View ${service.title}`}
                    className="mt-[-2px] flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#a8793b] text-[20px] text-[#dca653] transition-all duration-300 hover:bg-[#dca653] hover:text-black"
                    >
                    →
                    </Link>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-4 min-h-[72px] text-[14px] leading-[1.55] text-white/60">
                    {service.description}
                </p>

                {/* GOLD LINE */}
                <div className="mt-5 h-px w-[80px] bg-gradient-to-r from-[#dca653] to-transparent transition-all duration-500 group-hover:w-[130px]" />
                </div>
            </article>
            ))}
        </div>

        {/* ================= PAGINATION (home page) ================= */}
        {!showAll && totalPages > 1 && (
          <nav
            aria-label="Services pagination"
            className="mt-8 flex items-center justify-center gap-3"
          >
            <button
              type="button"
              aria-label="Previous services"
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              className="flex h-[37px] w-[37px] items-center justify-center rounded-full border border-[#a8793b] text-[#e7b867] transition-colors hover:bg-[#dca653] hover:text-black disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#e7b867]"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  aria-label={`Services page ${pageNumber}`}
                  aria-current={pageNumber === page ? "page" : undefined}
                  onClick={() => goToPage(pageNumber)}
                  className={`flex h-[37px] w-[37px] items-center justify-center rounded-full font-serif text-[16px] transition-colors ${
                    pageNumber === page
                      ? "bg-[#f2b864] text-black"
                      : "border border-white/15 text-white hover:border-[#dca653] hover:text-[#dca653]"
                  }`}
                >
                  {pageNumber}
                </button>
              ),
            )}

            <button
              type="button"
              aria-label="Next services"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              className="flex h-[37px] w-[37px] items-center justify-center rounded-full border border-[#a8793b] text-[#e7b867] transition-colors hover:bg-[#dca653] hover:text-black disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#e7b867]"
            >
              <ChevronRight size={16} />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}