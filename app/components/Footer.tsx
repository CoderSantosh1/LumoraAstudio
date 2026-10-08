"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import { contactInfo, footer } from "@/data";

const quickLinks = footer.quickLinks;

const services = footer.servicesLinks;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0908] text-white">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 z-0">
        <Image
          src={footer.bgImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Slight left darkening for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
      </div>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-14 lg:px-14 lg:py-16">

        {/* 
          Desktop:
          Content intentionally stops before the camera.
          Camera area on the right remains clean.
        */}
        <div data-reveal="up" className="grid gap-10 lg:grid-cols-[280px_170px_220px_220px] lg:gap-10">

          {/* ================================================= */}
          {/* BRAND */}
          {/* ================================================= */}

          <div className="max-w-[280px]">

            {/* Logo */}
            {/* Logo */}
                <Link href="/" className="inline-block">
                <Image
                    src={footer.logo}
                    alt={footer.logoAlt}
                    width={270}
                    height={75}
                    className="h-auto w-[245px] object-contain"
                />
                </Link>

                {/* Logo Bottom Tagline */}
                <div className="mt-1 flex items-center gap-2 text-[#a89476]">
                <span className="h-px w-4 bg-[#a89476]" />

                <span className="text-[7px] tracking-[0.34em]">
                    {footer.tagline}
                </span>

                <span className="h-px w-4 bg-[#a89476]" />
                </div>
            {/* Description */}
            <p className="mt-5 max-w-[270px] font-sans text-[13px] leading-[1.65] text-white/70">
              {footer.description}
            </p>
          </div>

          {/* ================================================= */}
          {/* QUICK LINKS */}
          {/* ================================================= */}

          <div>
            <h3 className="font-serif text-[20px] text-white">
              {footer.quickLinksTitle}
            </h3>

            <div className="mt-2 h-[2px] w-[48px] bg-[#dca653]" />

            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="group flex items-center gap-3 whitespace-nowrap text-[13px] text-white/65 transition-colors duration-300 hover:text-[#dca653]"
                  >
                    <ChevronRight
                      size={13}
                      strokeWidth={2}
                      className="shrink-0 text-[#dca653] transition-transform duration-300 group-hover:translate-x-1"
                    />

                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================================= */}
          {/* SERVICES */}
          {/* ================================================= */}

          <div>
            <h3 className="font-serif text-[20px] text-white">
              {footer.servicesTitle}
            </h3>

            <div className="mt-2 h-[2px] w-[48px] bg-[#dca653]" />

            <ul className="mt-4 space-y-2.5">
              {services.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="group flex items-start gap-3 whitespace-nowrap text-[13px] leading-5 text-white/65 transition-colors duration-300 hover:text-[#dca653]"
                  >
                    <ChevronRight
                      size={13}
                      strokeWidth={2}
                      className="mt-[2px] shrink-0 text-[#dca653] transition-transform duration-300 group-hover:translate-x-1"
                    />

                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================================= */}
          {/* GET IN TOUCH */}
          {/* ================================================= */}

          <div className="max-w-[220px]">
            <h3 className="font-serif text-[20px] text-white">
              {footer.getInTouchTitle}
            </h3>

            <div className="mt-2 h-[2px] w-[48px] bg-[#dca653]" />

            <div className="mt-4 space-y-4">

              {/* ADDRESS */}
              <div className="flex items-start gap-3">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[#a8793b] text-[#dca653]">
                  <MapPin size={17} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[12px] font-medium text-[#dca653]">
                    {footer.addressTitle}
                  </p>

                  <p className="mt-1 text-[11px] leading-[1.55] text-white/65">
                    {contactInfo.addressLine1},
                    <br />
                    {contactInfo.addressLine2}
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-3">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[#a8793b] text-[#dca653]">
                  <Phone size={16} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[12px] font-medium text-[#dca653]">
                    {footer.phoneTitle}
                  </p>

                  <Link
                    href={contactInfo.phoneUrl}
                    className="mt-1 block whitespace-nowrap text-[11px] text-white/65 transition-colors hover:text-[#dca653]"
                  >
                    {contactInfo.phone}
                  </Link>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[#a8793b] text-[#dca653]">
                  <Mail size={16} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[12px] font-medium text-[#dca653]">
                    {footer.emailTitle}
                  </p>

                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="mt-1 block whitespace-nowrap text-[11px] text-white/65 transition-colors hover:text-[#dca653]"
                  >
                    {contactInfo.email}
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* COPYRIGHT */}
      {/* ================================================= */}

      <div className="relative z-10 border-t border-[#74532a] bg-black/25">
        <div className="mx-auto flex min-h-[72px] max-w-[1400px] items-center justify-center px-6 lg:px-14">
          <p className="text-center font-sans text-[12px] text-white/65">
            {footer.copyrightText}
          </p>
        </div>
      </div>

    </footer>
  );
}