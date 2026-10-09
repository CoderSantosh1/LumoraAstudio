import Image from "next/image";

export default function PageHero({
  title,
  image = "/About/HeroImage.png",
}: {
  title: string;
  image?: string;
}) {
  return (
    <section className="relative h-[340px] w-full overflow-hidden lg:h-[380px]">
      {/* Background image, shown as-is (no overlays or effects) */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={`Lumora Astudio ${title}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 pt-20">
        <h1 data-reveal="up" className="text-center font-serif text-[44px] leading-none text-white sm:text-[60px] lg:text-[64px]">
          {title}
        </h1>
      </div>
    </section>
  );
}
