"use client";

import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  ChevronDown,
  LayoutGrid,
  Mail,
  MapPin,
  MessageSquare,
  Pencil,
  Phone,
  UserRound,
} from "lucide-react";
import { contactDetails, inquiryOptions, socialLinks } from "@/data";
import type { SocialPlatform } from "@/types";
import { scriptFont } from "./siteData";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: `${contactDetails.addressLine1}, ${contactDetails.addressLine2}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactDetails.phone,
    href: contactDetails.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
  },
];

const fieldClass =
  "w-full rounded-[4px] border border-[#6e5532] bg-transparent pl-[56px] pr-4 font-sans text-[14px] text-white outline-none transition-colors placeholder:text-white/60 focus:border-[#dca653]";

/* Brand icons (lucide-react no longer ships brand icons) */
const socialIcons: Record<SocialPlatform, ReactNode> = {
  facebook: (
    <svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="currentColor" aria-hidden="true">
      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor" aria-hidden="true">
      <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  ),
  pinterest: (
    <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M8.5 22l3.2-13" />
      <path d="M10.7 14.2c.5 1 1.5 1.5 2.6 1.5 2.7 0 4.5-2.4 4.5-5.3 0-2.9-2.4-4.9-5.5-4.9-3.5 0-5.6 2.4-5.6 5.2 0 1.1.4 2.1 1 2.6" />
    </svg>
  ),
  dribbble: (
    <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72M19.13 5.09c-3.5 4.18-8.55 5.38-16.88 5.18M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    </svg>
  ),
};

function Field({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-[18px] top-[13px] text-[#f0b65f]">
        {icon}
      </span>
      {children}
    </div>
  );
}

function InfoCard() {
  return (
    <div className="rounded-[4px] border border-[#5c4428] bg-[#0d0b09]/95 px-6 pb-3 pt-5 backdrop-blur-sm sm:px-8">
      <div className="flex items-center gap-3">
        <span className="h-px w-[50px] bg-[#b07d3a]" />

        <span className="font-sans text-[12px] tracking-[0.18em] text-[#dca653]">
          GET IN TOUCH
        </span>

        <span className="h-px w-[50px] bg-[#b07d3a]" />
      </div>

      <h3 className="mt-3 font-serif text-[32px] leading-none text-white sm:text-[36px]">
        Let&apos;s Create
      </h3>

      <p
        className="text-[30px] leading-[1.35] text-[#dca653] sm:text-[34px]"
        style={scriptFont}
      >
        Beautiful Memories
      </p>

      <p className="mt-2 font-sans text-[12.5px] leading-[1.55] text-white/85">
        Have a question, want to book a session, or need more information?
        Feel free to reach out — we&apos;d love to hear from you.
      </p>

      <ul className="mt-3 space-y-2.5">
        {contactInfo.map(({ icon: Icon, label, value, href }) => (
          <li key={label} className="flex items-center gap-5">
            <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#f2b65e] text-[#17120b]">
              <Icon size={16} strokeWidth={2.2} fill={label === "Phone" ? "currentColor" : "none"} />
            </span>

            <div>
              <p className="font-sans text-[12px] font-medium text-[#f2b65e]">
                {label}
              </p>

              {href ? (
                <a
                  href={href}
                  className="font-sans text-[13px] text-white transition-colors hover:text-[#dca653]"
                >
                  {value}
                </a>
              ) : (
                <p className="font-sans text-[13px] text-white">{value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-white/15 pt-3 sm:gap-4">
        <span className="mr-4 basis-full font-sans text-[13px] font-medium text-white sm:basis-auto">
          Follow Us
        </span>

        {socialLinks.map((social) => (
          <a
            key={social.platform}
            href={social.href}
            aria-label={social.label}
            className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#6e5532] text-[#f0b65f] transition-all duration-300 hover:border-[#dca653] hover:bg-[#dca653] hover:text-black"
          >
            {socialIcons[social.platform]}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ContactUs() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#0b0a09]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(151,103,44,0.12),transparent_55%)]" />

        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-6 py-14 lg:grid-cols-[minmax(0,674px)_minmax(0,1fr)] lg:gap-14 lg:px-[31px] lg:pb-12 lg:pt-12">
          {/* ================================================= */}
          {/* LEFT - IMAGE + INFO CARD */}
          {/* ================================================= */}

          {/* Mobile / tablet: banner image with card below */}
          <div data-reveal="left" className="md:hidden">
            <div className="relative aspect-[674/213] overflow-hidden rounded-t-[4px]">
              <Image
                src="/Contact/ContactPhotographerTop.png"
                alt="Photographer capturing a moment at golden hour"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <InfoCard />
          </div>

          {/* Desktop: card overlaid on the photo, as in the reference */}
          <div data-reveal="left" className="relative hidden aspect-[674/634] w-full overflow-hidden rounded-[4px] md:block">
            <Image
              src="/Contact/ContactPhotographer.png"
              alt="Photographer capturing a moment at golden hour"
              fill
              sizes="(max-width: 1024px) 100vw, 674px"
              className="object-cover"
            />

            <div className="absolute bottom-[2.8%] left-[7%] top-[34.4%] w-[70%] [&>div]:h-full">
              <InfoCard />
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT - FORM */}
          {/* ================================================= */}
          <div data-reveal="right" className="relative lg:pr-[10px] lg:pt-8">
            <div className="flex items-center gap-5">
              <span className="font-sans text-[13px] tracking-[0.2em] text-[#dca653]">
                CONTACT US
              </span>

              <span className="h-[2px] w-[68px] bg-[#b07d3a]" />
            </div>

            <h2 className="mt-3 flex flex-wrap items-baseline gap-x-4 font-serif text-[40px] leading-tight text-white sm:text-[48px]">
              Drop Me a
              <span className="text-[44px] text-[#dca653] sm:text-[52px]" style={scriptFont}>
                Line
              </span>
            </h2>

            <p className="mt-3 max-w-[520px] font-sans text-[15px] leading-[1.55] text-white/85">
              Have a question, want to book a session, or need more
              information? Fill out the form below and we&apos;ll get back to
              you as soon as possible.
            </p>

            {sent && (
              <p
                role="status"
                className="mt-5 rounded-[4px] border border-[#dca653]/60 bg-[#dca653]/10 px-4 py-3 font-sans text-[14px] text-[#f2c87e]"
              >
                Thank you! Your message has been noted.
              </p>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-[18px]">
                <Field icon={<UserRound size={19} strokeWidth={1.5} />}>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name*"
                    aria-label="Your Name"
                    className={`${fieldClass} h-[44px]`}
                  />
                </Field>

                <Field icon={<Mail size={19} strokeWidth={1.5} />}>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email*"
                    aria-label="Your Email"
                    className={`${fieldClass} h-[44px]`}
                  />
                </Field>
              </div>

              <Field icon={<Pencil size={18} strokeWidth={1.5} />}>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  aria-label="Subject"
                  className={`${fieldClass} h-[44px]`}
                />
              </Field>

              <Field icon={<LayoutGrid size={19} strokeWidth={1.5} />}>
                <select
                  name="topic"
                  required
                  defaultValue=""
                  aria-label="Select an option"
                  className={`${fieldClass} h-[44px] cursor-pointer appearance-none`}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {inquiryOptions.map((option) => (
                    <option key={option} value={option} className="bg-[#14110e]">
                      {option}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/80"
                />
              </Field>

              <Field icon={<MessageSquare size={19} strokeWidth={1.5} />}>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your Message*"
                  aria-label="Your Message"
                  className={`${fieldClass} min-h-[94px] resize-y pt-[12px]`}
                />
              </Field>

              <p className="pt-2 font-sans text-[12px] italic text-white/70">
                * All fields are required!
              </p>

              <button
                type="submit"
                className="group mt-2 inline-flex h-[48px] items-center gap-8 rounded-[2px] bg-[#f6bd60] pl-6 pr-1 font-serif text-[17px] font-semibold text-[#17120b] transition-colors duration-300 hover:bg-[#ffcd7a]"
              >
                Send Message
                <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#0b0a09] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={17} strokeWidth={1.7} />
                </span>
              </button>
            </form>

            {/* Camera line-art decoration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[-30px] right-0 hidden h-[160px] w-[235px] lg:block"
            >
              <Image
                src="/Contact/CameraSketch.png"
                alt=""
                fill
                sizes="235px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* MAP */}
      {/* ================================================= */}
      {/* Satellite + labels view, zoomed out to country level, as in the reference */}
      <section className="relative h-[420px] w-full overflow-hidden bg-[#0b0a09] lg:h-[640px]">
        <iframe
          title={`Lumora Astudio location - ${contactDetails.mapQuery}`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(contactDetails.mapQuery)}&t=h&z=${contactDetails.mapZoom}&output=embed`}
          className="h-full w-full border-0 [filter:brightness(0.82)_saturate(0.9)]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Blend the top edge into the dark section above */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-[#0b0a09]/70 to-transparent" />
      </section>
    </>
  );
}
