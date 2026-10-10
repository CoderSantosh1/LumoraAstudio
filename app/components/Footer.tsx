"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import type { LinkItem } from "@/types";
import { contactInfo, footer } from "@/data";

/* Column heading with the short gold underline */
function FooterTitle({ children }: { children: ReactNode }) {
  return (
    <>
      <h3 className="font-serif text-[22px] leading-tight text-white">
        {children}
      </h3>
      <div className="mt-2.5 h-[3px] w-[46px] bg-[#e3ad5c]" />
    </>
  );
}

function FooterLinks({ links }: { links: LinkItem[] }) {
  return (
    <ul className="mt-5 space-y-[11px]">
      {links.map((item) => (
        <li key={item.id}>
          <Link
            href={item.url}
            className="group flex items-center gap-4 whitespace-nowrap font-sans text-[14.5px] text-white/85 transition-colors duration-300 hover:text-[#e3ad5c]"
          >
            <ChevronRight
              size={15}
              strokeWidth={2}
              className="shrink-0 text-[#e3ad5c] transition-transform duration-300 group-hover:translate-x-1"
            />
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ContactRow({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#e3ad5c] text-[#e3ad5c]">
        {icon}
      </div>

      <div className="font-sans text-[13px] leading-[1.45]">
        <p className="font-medium text-[#e3ad5c]">{title}</p>
        <div className="text-white/85">{children}</div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0d0b09] text-white">
      {/* ================================================= */}
      {/* MAIN AREA (background image) */}
      {/* ================================================= */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src={footer.bgImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Even dim so the photo stays visible */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Darker behind the text columns, clear over the camera on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-14 lg:px-[70px] lg:py-[72px]">
          {/* Content stops before the camera on the right of the photo */}
          <div
            data-reveal="up"
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[290px_140px_200px_240px] lg:gap-[47px]"
          >
            {/* ================= BRAND ================= */}
            <div className="max-w-[290px]">
              <Link href="/" className="inline-block">
                <Image
                  src={footer.logo}
                  alt={footer.logoAlt}
                  width={270}
                  height={75}
                  className="h-auto w-[260px] object-contain"
                />
              </Link>

              {/* Tagline under the logo */}
              <div className="mt-1 flex w-[260px] items-center gap-2 text-[#c9b48f]">
                <span className="h-px w-3 shrink-0 bg-[#c9b48f]" />
                <span className="whitespace-nowrap text-[7.5px] tracking-[0.22em]">
                  {footer.tagline}
                </span>
                <span className="h-px w-3 shrink-0 bg-[#c9b48f]" />
              </div>

              <p className="mt-5 max-w-[255px] font-sans text-[15px] leading-[1.5] text-white/85">
                {footer.description}
              </p>
            </div>

            {/* ================= QUICK LINKS ================= */}
            <div>
              <FooterTitle>{footer.quickLinksTitle}</FooterTitle>
              <FooterLinks links={footer.quickLinks} />
            </div>

            {/* ================= SERVICES ================= */}
            <div>
              <FooterTitle>{footer.servicesTitle}</FooterTitle>
              <FooterLinks links={footer.servicesLinks} />
            </div>

            {/* ================= GET IN TOUCH ================= */}
            <div className="max-w-[240px]">
              <FooterTitle>{footer.getInTouchTitle}</FooterTitle>

              <div className="mt-5 space-y-[18px]">
                <ContactRow
                  icon={<MapPin size={18} strokeWidth={1.8} />}
                  title={footer.addressTitle}
                >
                  {contactInfo.addressLine1},
                  <br />
                  {contactInfo.addressLine2}
                </ContactRow>

                <ContactRow
                  icon={<Phone size={17} strokeWidth={1.8} />}
                  title={footer.phoneTitle}
                >
                  <Link
                    href={contactInfo.phoneUrl}
                    className="whitespace-nowrap transition-colors hover:text-[#e3ad5c]"
                  >
                    {contactInfo.phone}
                  </Link>
                </ContactRow>

                <ContactRow
                  icon={<Mail size={17} strokeWidth={1.8} />}
                  title={footer.emailTitle}
                >
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="whitespace-nowrap transition-colors hover:text-[#e3ad5c]"
                  >
                    {contactInfo.email}
                  </Link>
                </ContactRow>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* COPYRIGHT */}
      {/* ================================================= */}
      <div className="relative z-10 border-t border-[#74532a] bg-[#100e0c]">
        <div className="mx-auto flex min-h-[80px] max-w-[1400px] items-center justify-center px-6 lg:px-14">
          <p className="text-center font-sans text-[13px] text-white/80">
            {footer.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
}
