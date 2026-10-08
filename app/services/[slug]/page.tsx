import { Suspense } from "react";
import { notFound } from "next/navigation";
import PageSections from "@/app/components/PageSections";
import ServiceDetail from "@/app/components/ServiceDetail";
import { findService, getPageSectionData, services } from "@/data";
import type { ServiceDetailVariant } from "@/types";

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

  const data = getPageSectionData(
    "serviceDetail",
    "ServiceDetail",
  ) as ServiceDetailVariant;

  return <ServiceDetail data={data} service={service} />;
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <PageSections
      page="serviceDetail"
      slots={{
        ServiceDetail: (
          <Suspense fallback={<div className="min-h-[600px] bg-[#0b0a09]" />}>
            {params.then(({ slug }) => (
              <ServiceContent slug={slug} />
            ))}
          </Suspense>
        ),
      }}
    />
  );
}
