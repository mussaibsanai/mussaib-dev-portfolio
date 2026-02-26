import { projects, siteConfig } from "@/data/site";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Camera,
  CheckCircle2,
  Layers,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: project.image
        ? [{ url: project.image, width: 1200, height: 630 }]
        : undefined,
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    author: { "@type": "Person", name: siteConfig.name },
    keywords: project.stack.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen pt-24 pb-20 px-6">
        <div className="max-w-[960px] mx-auto">
          {/* Back link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-dark-500 hover:text-primary-500 transition-colors mb-8 group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Projects
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-[12px] font-bold uppercase tracking-wider"
                style={{ color: project.color }}
              >
                {project.type}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-dark-300 dark:bg-dark-600" />
              <span className="text-[12px] text-dark-500 font-medium">
                {project.status}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-dark-900 dark:text-white mb-4">
              {project.title}
            </h1>

            <p className="text-lg text-dark-500 dark:text-dark-400 leading-relaxed max-w-[700px]">
              {project.longDescription || project.description}
            </p>

            {/* Action buttons */}
            <div className="flex items-center gap-3 mt-6">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)`,
                    boxShadow: `0 4px 15px ${project.color}30`,
                  }}
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-dark-200 dark:border-dark-700 text-sm font-semibold text-dark-900 dark:text-white hover:border-primary-500 hover:text-primary-500 transition-all"
                >
                  <Github size={15} /> Source Code
                </a>
              )}
            </div>
          </header>

          {/* Hero Screenshot */}
          <div
            className="rounded-2xl overflow-hidden mb-12 border border-dark-200 dark:border-dark-800"
            style={{
              background: `linear-gradient(135deg, ${project.color}08, ${project.color}03)`,
            }}
          >
            <div className="aspect-video flex items-center justify-center relative">
              {/* Dot grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, ${project.color} 1px, transparent 0)`,
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="flex flex-col items-center gap-3 relative z-10">
                {/* <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `${project.color}15`,
                    border: `1px solid ${project.color}25`,
                  }}
                >
                  <Camera size={28} style={{ color: project.color }} />
                </div>
                <p
                  className="text-sm font-semibold font-mono"
                  style={{ color: project.color }}
                >
                  Project Screenshot
                </p> */}
               
                  <img src={project.image} alt={project.title} className="w-full h-auto object-cover rounded-md" />
               
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main content — Features */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
                <CheckCircle2
                  size={24}
                  style={{ color: project.color }}
                />
                Key Features
              </h2>

              <div className="space-y-4">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 hover:border-primary-500/20 transition-colors"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold"
                      style={{
                        background: `${project.color}12`,
                        color: project.color,
                      }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-[15px] text-dark-600 dark:text-dark-300 leading-relaxed pt-1">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Additional screenshots placeholder */}
              {project.screenshots.length > 0 &&  <h2 className="font-display text-2xl font-bold text-dark-900 dark:text-white mt-12 mb-6 flex items-center gap-3">
                <Camera size={24} style={{ color: project.color }} />
                Screenshots
              </h2>}

              {project.screenshots.length > 0 && (<div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className="aspect-video rounded-xl border border-dark-200 dark:border-dark-800 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}06, ${project.color}02)`,
                    }}
                  >
                    <div className="text-center">
                      <Camera
                        size={20}
                        className="mx-auto mb-1.5"
                        style={{ color: `${project.color}60` }}
                      />
                      <p
                        className="text-[11px] font-mono font-medium"
                        style={{ color: `${project.color}80` }}
                      >
                        Screenshot {num}
                      </p>
                    </div>
                  </div>
                ))}
              </div>)}
            </div>

            {/* Sidebar — Tech Stack & Info */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <div className="bg-white dark:bg-dark-900 rounded-2xl border border-dark-200 dark:border-dark-800 p-6">
                <h3 className="font-display text-lg font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-2">
                  <Layers size={18} style={{ color: project.color }} />
                  Tech Stack
                </h3>
                <div className="flex flex-col gap-2.5">
                  {project.stack.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-dark-50 dark:bg-dark-950 border border-dark-100 dark:border-dark-800"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: project.color }}
                      />
                      <span className="text-[14px] font-medium font-mono text-dark-700 dark:text-dark-200">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-white dark:bg-dark-900 rounded-2xl border border-dark-200 dark:border-dark-800 p-6">
                <h3 className="font-display text-lg font-bold text-dark-900 dark:text-white mb-4">
                  Project Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[11px] text-dark-500 uppercase tracking-wider font-semibold mb-1">
                      Type
                    </p>
                    <p className="text-[14px] font-medium text-dark-900 dark:text-white">
                      {project.type}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-dark-500 uppercase tracking-wider font-semibold mb-1">
                      Status
                    </p>
                    <p className="text-[14px] font-medium text-dark-900 dark:text-white">
                      {project.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-dark-500 uppercase tracking-wider font-semibold mb-1">
                      Technologies
                    </p>
                    <p className="text-[14px] font-medium text-dark-900 dark:text-white">
                      {project.stack.length} tools used
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div
                className="rounded-2xl p-6 text-center"
                style={{
                  background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)`,
                  border: `1px solid ${project.color}20`,
                }}
              >
                <p className="text-[15px] font-semibold text-dark-900 dark:text-white mb-2">
                  Need something similar?
                </p>
                <p className="text-[13px] text-dark-500 mb-4">
                  I can build this for your business — faster than you think.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: project.color,
                    boxShadow: `0 4px 12px ${project.color}30`,
                  }}
                >
                  Let&apos;s Talk <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Project Navigation */}
          <div className="border-t border-dark-200 dark:border-dark-800 pt-8 grid grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group bg-white dark:bg-dark-900 rounded-2xl border border-dark-200 dark:border-dark-800 p-5 hover:border-primary-500/30 transition-all"
              >
                <span className="text-[11px] text-dark-500 uppercase tracking-wider flex items-center gap-1">
                  <ArrowLeft size={12} /> Previous Project
                </span>
                <p className="text-[15px] font-semibold text-dark-900 dark:text-white mt-1.5 group-hover:text-primary-500 transition-colors">
                  {prevProject.title}
                </p>
                <span
                  className="text-[12px] font-medium mt-1 inline-block"
                  style={{ color: prevProject.color }}
                >
                  {prevProject.type}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group bg-white dark:bg-dark-900 rounded-2xl border border-dark-200 dark:border-dark-800 p-5 hover:border-primary-500/30 transition-all text-right"
              >
                <span className="text-[11px] text-dark-500 uppercase tracking-wider flex items-center gap-1 justify-end">
                  Next Project <ArrowRight size={12} />
                </span>
                <p className="text-[15px] font-semibold text-dark-900 dark:text-white mt-1.5 group-hover:text-primary-500 transition-colors">
                  {nextProject.title}
                </p>
                <span
                  className="text-[12px] font-medium mt-1 inline-block"
                  style={{ color: nextProject.color }}
                >
                  {nextProject.type}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
