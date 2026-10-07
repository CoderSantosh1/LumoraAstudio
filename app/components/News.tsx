"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CalendarDays } from "lucide-react";

const blogs = [
  {
    date: "25 SEP 2023",
    title: "Beginners guide to start your photography journey",
    author: "Ashton William",
    image: "/Home/GoldenHourPhotographer.png",
    avatar: "/Home/Avatar-1.jpg",
  },
  {
    date: "22 SEP 2023",
    title: "Twenty photography tips to make photos amazing",
    author: "Olivia Rose",
    image: "/Home/CanonDSLR.png",
    avatar: "/Home/Avatar-2.jpg",
  },
  {
    date: "22 SEP 2023",
    title: "What Norway is best spots For Photography",
    author: "Justin Burke",
    image: "/Home/SunsetMountain.png",
    avatar: "/Home/Avatar-2.jpg",
  },
  {
    date: "18 SEP 2023",
    title: "Essential editing tips to enhance your photos",
    author: "Emma Clarke",
    image: "/Home/WarmPhotography.png",
    avatar: "/Home/avatar-1.jpg",
  },
];

export default function News() {
  return (
    <section className="relative overflow-hidden bg-[#0b0a09] py-20 lg:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-[45%] bg-[radial-gradient(circle_at_top_right,rgba(151,103,44,0.13),transparent_65%)]" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[400px] bg-[radial-gradient(circle,rgba(120,80,35,0.08),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-14">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* Label */}
            <div className="mb-2 flex items-center gap-5">
              <span className="font-sans text-[12px] font-medium tracking-[0.23em] text-[#dca653]">
                LATEST NEWS
              </span>

              <span className="h-px w-[120px] bg-[#806039]" />
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[48px] leading-[0.95] text-white sm:text-[57px]">
              Our Photography
            </h2>

            <h3 className="mt-1 font-serif text-[46px] italic leading-none text-[#dca653] sm:text-[54px]">
              Related Blog
            </h3>
          </div>

          {/* RIGHT DESCRIPTION + ARROWS */}
          <div className="flex items-start justify-between gap-6 lg:pt-8">
            <p className="max-w-[520px] font-sans text-[15px] leading-6 text-white/70">
              We&apos;re deeply passionate about{" "}
              <strong className="font-semibold text-white">
                capturing your lovely memories
              </strong>{" "}
              in cameras and convey your love for every moment of life as a
              whole.
            </p>

            {/* Navigation */}
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <button
                type="button"
                aria-label="Previous blogs"
                className="flex h-[43px] w-[43px] items-center justify-center rounded-full border border-[#a8793b] text-[#dca653] transition-all duration-300 hover:bg-[#dca653] hover:text-black"
              >
                <ArrowLeft size={18} strokeWidth={1.5} />
              </button>

              <button
                type="button"
                aria-label="Next blogs"
                className="flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#e4b15c] text-black transition-all duration-300 hover:bg-[#f2c879]"
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* BLOG CARDS */}
        {/* ================================================= */}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="group relative overflow-hidden rounded-[15px] border border-[#76552d] bg-[#11100e] transition-all duration-500 hover:-translate-y-1 hover:border-[#dca653]"
            >
              {/* IMAGE */}
              <Link
                href="/blog"
                className="relative block h-[195px] overflow-hidden"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </Link>

              {/* CONTENT */}
              <div className="px-5 pb-5 pt-4">
                {/* DATE */}
                <div className="inline-flex items-center gap-2 rounded-[3px] border border-[#9d7136] px-2.5 py-1 text-[11px] font-medium text-[#dca653]">
                  <CalendarDays
                    size={12}
                    strokeWidth={1.7}
                  />

                  {blog.date}
                </div>

                {/* TITLE */}
                <Link href="/blog">
                  <h3 className="mt-4 min-h-[60px] font-serif text-[21px] leading-[1.12] text-white transition-colors duration-300 group-hover:text-[#dca653]">
                    {blog.title}
                  </h3>
                </Link>

                {/* AUTHOR + ARROW */}
                <div className="mt-5 flex items-center justify-between">
                  {/* Author */}
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div className="relative h-[32px] w-[32px] shrink-0 overflow-hidden rounded-full border border-[#76552d]">
                      <Image
                        src={blog.avatar}
                        alt={blog.author}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>

                    <p className="truncate text-[12px] text-white/70">
                      By{" "}
                      <span className="text-white">
                        {blog.author}
                      </span>
                    </p>
                  </div>

                  {/* Arrow */}
                  <Link
                    href="/blog"
                    aria-label={`Read ${blog.title}`}
                    className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-[#a8793b] text-[#dca653] transition-all duration-300 hover:bg-[#dca653] hover:text-black"
                  >
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* MOBILE NAVIGATION */}
        <div className="mt-7 flex justify-center gap-3 lg:hidden">
          <button
            type="button"
            aria-label="Previous blogs"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#a8793b] text-[#dca653]"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            aria-label="Next blogs"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4b15c] text-black"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}