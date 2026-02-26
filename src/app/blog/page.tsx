import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on web development, mobile apps, and building products that ship. Written by Mussaib Rasheed.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label">Blog</p>
          <h1 className="section-title mb-4">
            Thoughts on <span className="gradient-text">Building</span>
          </h1>
          <p className="text-base text-dark-500 dark:text-dark-400 max-w-[600px]">
            Practical insights on web development, mobile apps, architecture
            decisions, and shipping products that actually work.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="card p-12 text-center">
            <div className="text-4xl mb-4">✍️</div>
            <h3 className="font-display text-xl font-bold mb-2 text-dark-900 dark:text-white">
              First posts coming soon
            </h3>
            <p className="text-sm text-dark-500 dark:text-dark-400 max-w-[400px] mx-auto">
              I&apos;m writing about my experience building products, technical
              deep-dives, and lessons learned from 5 years of shipping code.
              Check back soon.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="card card-hover p-7 group cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1.5 text-[12px] text-dark-500">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-dark-400" />
                    <span className="flex items-center gap-1.5 text-[12px] text-dark-500">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5 flex-wrap">
                      {post.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-primary-500 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
