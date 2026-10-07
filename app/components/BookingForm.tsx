"use client";

import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock,
  House,
  Image as ImageIcon,
  LayoutGrid,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";
import { scriptFont, serviceItems } from "./siteData";

const packages = [
  "Basic Package - 2 Hours",
  "Standard Package - 4 Hours",
  "Premium Package - Full Day",
];

const fieldClass =
  "h-[56px] w-full rounded-[4px] border border-white/25 bg-black/30 pl-[62px] pr-4 font-sans text-[15px] text-white outline-none transition-colors placeholder:text-white/55 focus:border-[#dca653] [color-scheme:dark]";

function Field({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-[18px] top-1/2 -translate-y-1/2 text-[#e3ad5c]">
        {icon}
      </span>
      {children}
    </div>
  );
}

function SelectField({
  icon,
  name,
  placeholder,
  options,
  defaultValue = "",
}: {
  icon: ReactNode;
  name: string;
  placeholder?: string;
  options: string[];
  defaultValue?: string;
}) {
  return (
    <Field icon={icon}>
      <select
        name={name}
        defaultValue={defaultValue}
        aria-label={placeholder ?? name}
        className={`${fieldClass} cursor-pointer appearance-none pr-12`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#14110e]">
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={20}
        strokeWidth={1.5}
        className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/80"
      />
    </Field>
  );
}

export default function BookingForm() {
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSubmittedName(String(data.get("name") ?? ""));
    event.currentTarget.reset();
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0a09]">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Camera still-life */}
        <div className="absolute bottom-0 left-0 hidden h-[58%] w-[46%] lg:block">
          <Image
            src="/Booking/BookingCamera.png"
            alt=""
            fill
            sizes="46vw"
            className="object-cover object-top"
          />

          <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-[#0b0a09] to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-l from-[#0b0a09]/70 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(151,103,44,0.2),transparent_55%)]" />

        <div className="absolute right-0 top-0 h-full w-[40%] bg-[radial-gradient(circle_at_90%_20%,rgba(201,140,60,0.22),transparent_60%)]" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-6 py-16 lg:min-h-[900px] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:px-[52px] lg:py-[86px]">
        {/* ================================================= */}
        {/* LEFT - INTRO */}
        {/* ================================================= */}
        <div>
          <div className="mb-3 flex items-center gap-5">
            <span className="font-sans text-[14px] font-medium tracking-[0.2em] text-[#dca653]">
              BOOK APPOINTMENT
            </span>

            <span className="h-px w-[110px] bg-[#b07d3a]" />
          </div>

          <h2 className="font-serif text-[48px] leading-[1] text-white sm:text-[62px]">
            Capture Your
          </h2>

          <p
            className="text-[36px] leading-[1.4] text-[#dca653] sm:whitespace-nowrap sm:text-[48px] xl:text-[54px]"
            style={scriptFont}
          >
            Special Moments
          </p>

          <p className="mt-3 max-w-[440px] font-sans text-[17px] leading-[1.55] text-white/85">
            Book your photography session with us and let our team create
            timeless memories that you&apos;ll cherish forever.
          </p>
        </div>

        {/* ================================================= */}
        {/* RIGHT - FORM */}
        {/* ================================================= */}
        <div className="rounded-[14px] border border-[#a8793b] bg-[#0f0d0b]/85 px-5 py-10 shadow-2xl backdrop-blur-sm sm:px-9 lg:self-start">
          {/* Form Header */}
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-[60px] bg-[#8d6a3d] sm:w-[128px]" />

            <span className="font-sans text-[14px] font-medium tracking-[0.2em] text-[#dca653]">
              BOOKING FORM
            </span>

            <span className="h-px w-[60px] bg-[#8d6a3d] sm:w-[128px]" />
          </div>

          <h2 className="mt-3 text-center font-serif text-[32px] leading-tight text-white sm:text-[42px]">
            Book Your Appointment
          </h2>

          <p className="mt-3 text-center font-sans text-[15px] text-white/80">
            Please confirm that you would like to request the following
            appointment:
          </p>

          {submittedName !== null && (
            <p
              role="status"
              className="mt-6 rounded-[4px] border border-[#dca653]/60 bg-[#dca653]/10 px-4 py-3 text-center font-sans text-[14px] text-[#f2c87e]"
            >
              Thank you{submittedName ? `, ${submittedName}` : ""}! Your
              appointment request has been noted.
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field icon={<UserRound size={22} strokeWidth={1.5} />}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name*"
                  aria-label="Name"
                  className={fieldClass}
                />
              </Field>

              <Field icon={<Mail size={22} strokeWidth={1.5} />}>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="E-mail*"
                  aria-label="E-mail"
                  className={fieldClass}
                />
              </Field>

              <Field icon={<Phone size={22} strokeWidth={1.5} />}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  className={fieldClass}
                />
              </Field>

              <Field icon={<MapPin size={22} strokeWidth={1.5} />}>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  aria-label="Address"
                  className={fieldClass}
                />
              </Field>

              <SelectField
                icon={<LayoutGrid size={22} strokeWidth={1.5} />}
                name="service"
                placeholder="Service Type"
                options={serviceItems.map((service) => service.title)}
              />

              <Field icon={<CalendarDays size={22} strokeWidth={1.5} />}>
                <input
                  type="date"
                  name="date"
                  aria-label="Date"
                  className={fieldClass}
                />
              </Field>

              <Field icon={<Clock size={22} strokeWidth={1.5} />}>
                <input
                  type="time"
                  name="time"
                  aria-label="Time"
                  className={fieldClass}
                />
              </Field>

              <SelectField
                icon={<House size={22} strokeWidth={1.5} />}
                name="location"
                options={["Indoor", "Outdoor"]}
                defaultValue="Indoor"
              />

              <div className="sm:col-span-2">
                <SelectField
                  icon={<ImageIcon size={22} strokeWidth={1.5} />}
                  name="package"
                  placeholder="Select Photography Package"
                  options={packages}
                />
              </div>
            </div>

            <div className="mt-9 flex justify-center">
              <button
                type="submit"
                className="group inline-flex h-[54px] items-center gap-10 rounded-[10px] bg-[#e2ad5f] pl-[54px] pr-1 font-sans text-[16px] font-medium text-[#17120b] transition-colors duration-300 hover:bg-[#f0c27a]"
              >
                Book Appointment
                <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#0b0a09] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={20} strokeWidth={1.7} />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
