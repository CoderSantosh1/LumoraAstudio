import { Suspense } from "react";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import BlogDetail from "@/app/components/BlogDetail";
import { blogPosts, findBlogPost } from "@/app/components/siteData";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function BlogContent({ slug }: { slug: string }) {
  const post = findBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogDetail post={post} />;
}

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <>
      <PageHero title="Blog Detail" />
      <Suspense fallback={<div className="min-h-[600px] bg-[#0d0b09]" />}>
        {params.then(({ slug }) => (
          <BlogContent slug={slug} />
        ))}
      </Suspense>
    </>
  );
}
