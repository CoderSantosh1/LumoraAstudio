import { Suspense } from "react";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import ServiceDetail from "@/app/components/ServiceDetail";
import { findService, services } from "@/data";

export function generateStaticParams() {
  return services.flatMap((service) => [
    { slug: service.slug },
    { slug: service.number },
  ]);
}

function ServiceContent({ slug }: { slug: string }) {
  const service = findService(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <>
      <PageHero title="Service Detail" />
      <Suspense fallback={<div className="min-h-[600px] bg-[#0b0a09]" />}>
        {params.then(({ slug }) => (
          <ServiceContent slug={slug} />
        ))}
      </Suspense>
    </>
  );
}
