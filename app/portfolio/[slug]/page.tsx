import { Suspense } from "react";
import { notFound } from "next/navigation";
import PageSections from "@/app/components/PageSections";
import PortfolioDetail from "@/app/components/PortfolioDetail";
import { findPortfolioItem, getPageSectionData, portfolioItems } from "@/data";
import type { PortfolioDetailVariant } from "@/types";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

function PortfolioContent({ slug }: { slug: string }) {
  const item = findPortfolioItem(slug);

  if (!item) {
    notFound();
  }

  const data = getPageSectionData(
    "portfolioDetail",
    "PortfolioDetail",
  ) as PortfolioDetailVariant;

  return <PortfolioDetail data={data} item={item} />;
}

export default function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <PageSections
      page="portfolioDetail"
      slots={{
        PortfolioDetail: (
          <Suspense fallback={<div className="min-h-[600px] bg-[#0d0c0b]" />}>
            {params.then(({ slug }) => (
              <PortfolioContent slug={slug} />
            ))}
          </Suspense>
        ),
      }}
    />
  );
}
