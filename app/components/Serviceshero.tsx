import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="relative h-[340px] w-full overflow-hidden lg:h-[380px]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/About/HeroImage.png"
          alt="Lumora Astudio Services"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Cinematic dark overlay */}
        <div className="absolute inset-0 bg-[#080b0b]/30" />

        {/* Warm cinematic tone */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,10,0.18),rgba(18,15,10,0.08),rgba(8,10,8,0.22))]" />

        {/* Bottom blend */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b0a09]/65 to-transparent" />
      </div>

      {/* Heading */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 data-reveal="up" className="mt-3 font-serif text-[48px] leading-none text-white sm:text-[60px] lg:text-[64px]">
          Service
        </h1>
      </div>
    </section>
  );
}