import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.name],
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: post.image
        ? [{ url: post.image, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

// Simple markdown to HTML converter (for basic rendering without MDX)
function markdownToHtml(markdown: string): string {
  let html = markdown
    // Code blocks
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Headers
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    // Bold and italic
    .replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    // Images
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy" />')
    // Blockquotes
    .replace(/^> (.*$)/gm, "<blockquote>$1</blockquote>")
    // Unordered lists
    .replace(/^[\-\*] (.*$)/gm, "<li>$1</li>")
    // Line breaks into paragraphs
    .replace(/\n\n/g, "</p><p>")
    // Wrap in paragraphs
    .replace(/^(?!<[h|p|u|o|l|b|pre|img|li])/gm, "");

  // Wrap loose li elements
  html = html.replace(/(<li>[\s\S]*?<\/li>)+/g, "<ul>$&</ul>");
  // Clean up double ul wrapping
  html = html.replace(/<\/ul>\s*<ul>/g, "");

  return `<p>${html}</p>`;
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const htmlContent = markdownToHtml(post.content);

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-[720px] mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-dark-500 hover:text-primary-500 transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          {/* Post header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center gap-1.5 text-[13px] text-dark-500">
                <Calendar size={13} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="w-1 h-1 rounded-full bg-dark-400" />
              <span className="flex items-center gap-1.5 text-[13px] text-dark-500">
                <Clock size={13} />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-dark-900 dark:text-white mb-4">
              {post.title}
            </h1>

            <p className="text-lg text-dark-500 dark:text-dark-400 leading-relaxed">
              {post.description}
            </p>

            {post.tags.length > 0 && (
              <div className="flex gap-1.5 flex-wrap mt-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Divider */}
          <hr className="border-dark-200 dark:border-dark-800 mb-10" />

          {/* Content */}
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Post navigation */}
          <div className="mt-16 pt-8 border-t border-dark-200 dark:border-dark-800 grid grid-cols-2 gap-4">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="card p-5 group hover:border-primary-500/30 transition-all"
              >
                <span className="text-[11px] text-dark-500 uppercase tracking-wider flex items-center gap-1">
                  <ArrowLeft size={12} /> Previous
                </span>
                <p className="text-sm font-semibold text-dark-900 dark:text-white mt-1 group-hover:text-primary-500 transition-colors">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="card p-5 group hover:border-primary-500/30 transition-all text-right"
              >
                <span className="text-[11px] text-dark-500 uppercase tracking-wider flex items-center gap-1 justify-end">
                  Next <ArrowRight size={12} />
                </span>
                <p className="text-sm font-semibold text-dark-900 dark:text-white mt-1 group-hover:text-primary-500 transition-colors">
                  {nextPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </article>
    </>
  );
}
