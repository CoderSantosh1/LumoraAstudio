import { Suspense } from "react";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import PortfolioDetail from "@/app/components/PortfolioDetail";
import { findPortfolioItem, portfolioItems } from "@/data";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

function PortfolioContent({ slug }: { slug: string }) {
  const item = findPortfolioItem(slug);

  if (!item) {
    notFound();
  }

  return <PortfolioDetail item={item} />;
}

export default function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <>
      <PageHero title="Portfolio Detail" />
      <Suspense fallback={<div className="min-h-[600px] bg-[#0d0c0b]" />}>
        {params.then(({ slug }) => (
          <PortfolioContent slug={slug} />
        ))}
      </Suspense>
    </>
  );
}
