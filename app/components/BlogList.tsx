"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { BlogsVariant } from "@/types";
import { scriptFont, revealDelay } from "./siteData";

const POSTS_PER_PAGE = 8;

export default function BlogList({
  data,
  subtitle = data.subtitle,
}: {
  data: BlogsVariant;
  /* Overrides the section label, e.g. "LATEST BLOG" on the blog page */
  subtitle?: string;
}) {
  const blogPosts = data.blogs;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const visiblePosts = blogPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  const goToPage = (nextPage: number) => {
    setPage(Math.min(Math.max(nextPage, 1), totalPages));
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0a09] py-12 lg:py-12">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[70%] w-[55%] bg-[radial-gradient(circle_at_80%_20%,rgba(151,103,44,0.2),transparent_65%)]" />

        <div className="absolute left-0 top-0 h-[60%] w-[45%] bg-[radial-gradient(circle_at_20%_10%,rgba(120,80,35,0.14),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-[76px]">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}
        <div data-reveal="up" className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-2 flex items-center gap-5">
              <span className="font-serif text-[15px] tracking-[0.08em] text-[#dca653]">
                {subtitle}
              </span>

              <span className="h-px w-[128px] bg-[#9c7339]" />
            </div>

            <h2 className="font-serif text-[46px] leading-[0.95] text-white sm:text-[58px]">
              {data.title1}
            </h2>

            <h3
              className="mt-1 text-[42px] leading-[1.15] text-[#dca653] sm:text-[50px]"
              style={scriptFont}
            >
              {data.titleScript}
            </h3>
          </div>

          <div className="flex items-start justify-between gap-6 lg:pt-10">
            <p className="max-w-[470px] font-serif text-[15px] leading-6 text-white/75">
              {data.descriptionLead}{" "}
              <strong className="font-semibold text-white">
                {data.descriptionHighlight}
              </strong>{" "}
              {data.descriptionEnd}
            </p>

            <div className="hidden shrink-0 items-center gap-3 pt-6 lg:flex">
              <button
                type="button"
                aria-label="Previous page"
                onClick={() => goToPage(page - 1)}
                className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#a8793b] text-white transition-all duration-300 hover:bg-[#dca653] hover:text-black"
              >
                <ArrowLeft size={18} strokeWidth={1.5} />
              </button>

              <button
                type="button"
                aria-label="Next page"
                onClick={() => goToPage(page + 1)}
                className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#a8793b] text-white transition-all duration-300 hover:bg-[#dca653] hover:text-black"
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* BLOG CARDS */}
        {/* ================================================= */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visiblePosts.map((post, index) => (
            <article
              key={post.slug}
              data-reveal="up"
              style={revealDelay(index % 4)}
              className="group relative overflow-hidden rounded-[6px] border border-[#b5853f] bg-[#100e0c] transition-all duration-500 hover:-translate-y-1 hover:border-[#dca653]"
            >
              {/* IMAGE */}
              <Link
                href={`/blog/${post.slug}`}
                className="relative block h-[172px] overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={`${post.titleLead} ${post.titleScript}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              {/* CONTENT */}
              <div className="relative px-5 pb-3.5">
                {/* DATE */}
                <div className="-mt-[13px] inline-flex items-center gap-2 rounded-[3px] border border-[#c28d43] bg-[#100e0c] px-2.5 py-[3px] font-serif text-[12px] text-[#e7b867]">
                  <CalendarDays size={12} strokeWidth={1.7} />
                  {post.date}
                </div>

                {/* TITLE */}
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="mt-3 min-h-[50px] font-serif text-[19px] leading-[1.25] text-white transition-colors duration-300 group-hover:text-[#dca653]">
                    {post.titleLead} {post.titleScript}
                  </h3>
                </Link>

                {/* AUTHOR + ARROW */}
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div className="relative h-[32px] w-[32px] shrink-0 overflow-hidden rounded-full border border-[#76552d]">
                      <Image
                        src={post.avatar}
                        alt={post.author}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>

                    <p className="truncate font-serif text-[13px] text-white/80">
                      By {post.author}
                    </p>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`Read ${post.titleLead} ${post.titleScript}`}
                    className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-[#c28d43] text-[#e7b867] transition-all duration-300 hover:bg-[#dca653] hover:text-black"
                  >
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================================================= */}
        {/* PAGINATION */}
        {/* ================================================= */}
        <nav
          aria-label="Blog pagination"
          className="mt-6 flex items-center justify-center gap-3"
        >
          <button
            type="button"
            aria-label="Previous page"
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
                aria-label={`Page ${pageNumber}`}
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
            aria-label="Next page"
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            className="flex h-[37px] w-[37px] items-center justify-center rounded-full border border-[#a8793b] text-[#e7b867] transition-colors hover:bg-[#dca653] hover:text-black disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#e7b867]"
          >
            <ChevronRight size={16} />
          </button>
        </nav>
      </div>
    </section>
  );
}
