import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { serviceItems, type ServiceItem } from "./siteData";

const steps = [
  "The talent at Lumora Astudio runs wide and deep. Across many markets, geographies",
  "Our team members are some of the finest professionals in the industry",
  "Organized to deliver the most specialized service possible and enriched by the geographies and typologies, our team members are some of the finest.",
];

/* Sidebar order follows the reference design */
const sidebarOrder = [
  "wedding-photography",
  "personal-portfolio",
  "product-photography",
  "event-photography",
  "studio-photography",
  "drone-cinematography",
  "wedding-cinematography",
];

export default function ServiceDetail({ service }: { service: ServiceItem }) {
  const [firstWord, ...restWords] = service.title.split(" ");
  const otherServices = [...serviceItems]
    .sort(
      (a, b) =>
        sidebarOrder.indexOf(a.slug) - sidebarOrder.indexOf(b.slug),
    )
    .filter((item) => item.slug !== service.slug)
    .slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-[#0b0a09] py-16 lg:py-16">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(151,103,44,0.18),transparent_55%)]" />

        <div className="absolute bottom-0 right-0 h-[60%] w-[45%] bg-[radial-gradient(circle_at_80%_80%,rgba(151,103,44,0.16),transparent_65%)]" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_295px] lg:px-11">
        {/* ================================================= */}
        {/* LEFT - CONTENT */}
        {/* ================================================= */}
        <div className="min-w-0">
          {/* Main Image */}
          <div className="relative h-[220px] overflow-hidden border border-[#c39450] sm:h-[280px]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 940px"
              className="object-cover"
            />
          </div>

          {/* Title */}
          <h2 className="mt-5 font-serif text-[38px] leading-tight text-white sm:text-[46px]">
            <span className="text-[#e3ad5c]">{firstWord}</span>{" "}
            {restWords.join(" ")}
          </h2>

          <div className="mt-3 h-[2px] w-[50px] bg-[#dca653]" />

          <p className="mt-6 max-w-[800px] font-sans text-[16px] leading-[1.6] text-white/85 sm:text-[17px]">
            The talent at Lumora Astudio runs wide and deep. Across many
            markets, geographies &amp; typologies, our team members are some
            of the finest professionals in the industry wide and deep. Across
            many markets, geographies and typologies, our team members are
            some of the finest.
          </p>

          {/* ================= SERVICE STEPS ================= */}
          <h3 className="mt-9 font-sans text-[18px] font-medium tracking-[0.15em] text-[#e8b264] sm:text-[20px]">
            SERVICE STEPS
          </h3>

          <div className="mt-3 h-[2px] w-[50px] bg-[#dca653]" />

          <p className="mt-5 max-w-[800px] font-sans text-[16px] leading-[1.6] text-white/85 sm:text-[17px]">
            The talent at Lumora Astudio runs wide and deep. Across many
            markets, geographies &amp; typologies, our team members are some
            of the finest professionals in the industry wide and deep.
          </p>

          <ul className="mt-4 space-y-2.5">
            {steps.map((step) => (
              <li key={step} className="flex items-start gap-4">
                <span className="mt-[1px] flex h-[29px] w-[29px] shrink-0 items-center justify-center rounded-full bg-[#ebb46a] text-[#17120b]">
                  <Check size={16} strokeWidth={2.5} />
                </span>

                <span className="max-w-[620px] font-sans text-[16px] leading-[1.5] text-white/85 sm:text-[17px]">
                  {step}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-5 max-w-[800px] font-sans text-[16px] leading-[1.6] text-white/85 sm:text-[17px]">
            The talent at Lumora Astudio runs wide and deep. Across many
            markets, geographies &amp; typologies, our team members are some
            of the finest professionals in the industry wide and deep. Across
            many markets, geographies and typologies, our team members are
            some of the finest.
          </p>
        </div>

        {/* ================================================= */}
        {/* RIGHT - OTHER SERVICES */}
        {/* ================================================= */}
        <aside className="lg:pt-5">
          <h3 className="font-serif text-[30px] leading-none text-white">
            <span className="text-[#e3ad5c]">Other</span> Services
          </h3>

          <div className="mt-4 h-[2px] w-[42px] bg-[#dca653]" />

          <div className="mt-4 space-y-4">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group flex items-center gap-3.5 rounded-[3px] border border-[#76552d] bg-[#0e0d0b]/70 p-2.5 transition-colors duration-300 hover:border-[#dca653]"
              >
                <div className="relative h-[100px] w-[100px] shrink-0 overflow-hidden">
                  <Image
                    src={item.thumb}
                    alt={item.title}
                    fill
                    sizes="100px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="min-w-0">
                  <h4 className="font-serif text-[17px] leading-tight text-white transition-colors group-hover:text-[#dca653]">
                    {item.title}
                  </h4>

                  <p className="mt-2 font-sans text-[12px] leading-[1.5] text-white/75">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
