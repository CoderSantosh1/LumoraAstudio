import { Suspense } from "react";
import { notFound } from "next/navigation";
import PageSections from "@/app/components/PageSections";
import BlogDetail from "@/app/components/BlogDetail";
import { blogPosts, findBlogPost, getPageSectionData } from "@/data";
import type { BlogsVariant } from "@/types";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function BlogContent({ slug }: { slug: string }) {
  const post = findBlogPost(slug);

  if (!post) {
    notFound();
  }

  const data = getPageSectionData("blogDetail", "BlogDetail") as BlogsVariant;

  return <BlogDetail data={data} post={post} />;
}

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <PageSections
      page="blogDetail"
      slots={{
        BlogDetail: (
          <Suspense fallback={<div className="min-h-[600px] bg-[#0d0b09]" />}>
            {params.then(({ slug }) => (
              <BlogContent slug={slug} />
            ))}
          </Suspense>
        ),
      }}
    />
  );
}
