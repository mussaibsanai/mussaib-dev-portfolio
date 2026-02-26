"use client";

import { useState } from "react";
import { projects } from "@/data/site";
import { ExternalLink, Github, Camera, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">
            Projects I&apos;ve <span className="gradient-text">Shipped</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Link
              key={i}
              href={`/projects/${project.slug}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`card overflow-hidden transition-all duration-350 group cursor-pointer ${
                hovered === i ? "-translate-y-1" : ""
              } ${i === projects.length - 1 && projects.length % 2 !== 0 ? "md:col-span-2" : ""}`}
              style={{
                borderColor:
                  hovered === i ? project.color + "40" : undefined,
                boxShadow:
                  hovered === i ? `0 20px 40px ${project.color}12` : undefined,
              }}
            >
              {/* Image placeholder */}
              <div
                className="h-[280px] md:h-[340px] flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.color}12, ${project.color}04)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, ${project.color} 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />
                <div
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-black/20 dark:bg-black/30 backdrop-blur-sm border text-[13px] font-semibold font-mono"
                  style={{
                    borderColor: project.color + "30",
                    color: project.color,
                  }}
                >
                  <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
    />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <span className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/90 dark:bg-black/70 text-sm font-semibold text-dark-900 dark:text-white backdrop-blur-sm">
                    View Details <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider"
                    style={{ color: project.color }}
                  >
                    {project.type}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-dark-400" />
                  <span className="text-[11px] text-dark-500 font-medium">
                    {project.status}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="tag">+{project.stack.length - 4}</span>
                    )}
                  </div>

                  <span className="text-primary-500 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
