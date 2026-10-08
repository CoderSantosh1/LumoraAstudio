import Image from "next/image";
import {
  CalendarDays,
  ChartNoAxesColumn,
  Check,
  FolderOpen,
} from "lucide-react";
import type { BlogPost, BlogsVariant } from "@/types";
import { scriptFont } from "./siteData";

export default function BlogDetail({
  data,
  post,
}: {
  data: BlogsVariant;
  post: BlogPost;
}) {
  const { bodyText, concepts, conceptsTitle, introImage, mainImage, bottomImage } = data.detail;

  return (
    <article className="relative overflow-hidden bg-[#0d0b09]">
      {/* ================================================= */}
      {/* INTRO */}
      {/* ================================================= */}
      <div className="relative overflow-hidden">
        {/* Background camera */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] md:block">
          <Image
            src={introImage}
            alt=""
            fill
            sizes="45vw"
            className="object-cover object-left"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0b09] via-[#0d0b09]/30 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0b09] to-transparent" />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(151,103,44,0.16),transparent_60%)]" />

        <div data-reveal="left" className="relative mx-auto max-w-[1400px] px-6 pb-6 pt-16 lg:px-[70px] lg:pt-24">
          {/* Date */}
          <div className="inline-flex items-center gap-2.5 rounded-[10px] bg-[#f2bd6b] px-4 py-2 font-sans text-[17px] font-semibold text-[#17120b]">
            <CalendarDays size={18} strokeWidth={1.8} />
            {post.date}
          </div>

          {/* Title */}
          <h1 className="mt-3 max-w-[920px] font-serif text-[36px] font-semibold leading-[1.1] text-white sm:text-[48px] lg:text-[54px]">
            {post.titleLead}
          </h1>

          <p
            className="mt-1 text-[34px] leading-[1.3] text-[#e8b264] sm:text-[46px] lg:text-[52px]"
            style={scriptFont}
          >
            {post.titleScript}
          </p>

          {/* Meta */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 font-sans text-[16px] text-white/90 sm:text-[17px]">
            <div className="flex items-center gap-4">
              <div className="relative h-[50px] w-[50px] overflow-hidden rounded-full border-2 border-[#76552d]">
                <Image
                  src={post.avatar}
                  alt={post.author}
                  fill
                  sizes="50px"
                  className="object-cover"
                />
              </div>
              {post.author}
            </div>

            <span className="hidden h-7 w-px bg-white/25 sm:block" />

            <div className="flex items-center gap-3">
              <CalendarDays size={21} strokeWidth={1.5} className="text-[#e8b264]" />
              {post.fullDate}
            </div>

            <span className="hidden h-7 w-px bg-white/25 sm:block" />

            <div className="flex items-center gap-3">
              <FolderOpen size={21} strokeWidth={1.5} className="text-[#e8b264]" />
              {post.category}
            </div>

            <span className="hidden h-7 w-px bg-white/25 sm:block" />

            <div className="flex items-center gap-3">
              <ChartNoAxesColumn size={21} strokeWidth={2} className="text-[#e8b264]" />
              {post.views}
            </div>
          </div>

          <p className="mt-6 max-w-[1100px] font-sans text-[17px] leading-[1.6] text-white/85 sm:text-[19px]">
            {bodyText}
          </p>
        </div>
      </div>

      {/* ================================================= */}
      {/* BODY */}
      {/* ================================================= */}
      <div className="relative mx-auto max-w-[1400px] px-6 pb-16 lg:px-[70px]">
        <div data-reveal="zoom" className="relative h-[280px] overflow-hidden rounded-[10px] border border-[#5c4428] sm:h-[400px] lg:h-[476px]">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1210px"
            className="object-cover"
          />
        </div>

        <h2 className="mt-7 font-serif text-[34px] font-semibold text-white sm:text-[40px]">
          {conceptsTitle}
        </h2>

        <div className="mt-2 h-[4px] w-[68px] bg-[#e8b264]" />

        <p className="mt-6 max-w-[1170px] font-sans text-[17px] leading-[1.75] text-white/85 sm:text-[19px]">
          {bodyText}
        </p>

        {/* Concept list */}
        <ul data-reveal="up" className="mt-6 rounded-[10px] border border-[#8d6a3d] px-6 py-2 sm:px-11">
          {concepts.map((concept, index) => (
            <li
              key={concept}
              className={`flex items-center gap-7 py-4 ${
                index !== concepts.length - 1 ? "border-b border-white/[0.09]" : ""
              }`}
            >
              <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#f2c87e] text-[#17120b]">
                <Check size={20} strokeWidth={2.5} />
              </span>

              <span className="font-sans text-[15px] leading-6 text-white/85 sm:text-[17px]">
                {concept}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-[1170px] font-sans text-[17px] leading-[1.75] text-white/85 sm:text-[19px]">
          {bodyText}
        </p>

        <div data-reveal="zoom" className="relative mt-6 h-[260px] overflow-hidden rounded-[10px] sm:h-[380px] lg:h-[444px]">
          <Image
            src={bottomImage.src}
            alt={bottomImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1210px"
            className="object-cover"
          />
        </div>

        <p className="mt-6 max-w-[1170px] font-sans text-[17px] leading-[1.75] text-white/85 sm:text-[19px]">
          {bodyText}
        </p>
      </div>
    </article>
  );
}
