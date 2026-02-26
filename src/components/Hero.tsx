"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ArrowRight, Play, X } from "lucide-react";

/*
 * ────────────────────────────────────────────────
 *  CONFIGURE THESE TWO VALUES:
 *
 *  videoUrl   → Set your Loom/YouTube/HeyGen embed URL here.
 *               Leave as "" to show profile picture instead.
 *
 *  profileImg → Path to your profile photo in /public/images/
 *               Place your photo there and update the path.
 * ────────────────────────────────────────────────
 */
const VIDEO_URL = ""; // e.g. "https://www.youtube.com/embed/xxxxx" or "https://www.loom.com/embed/xxxxx"
const PROFILE_IMAGE = "/images/profile.jpg"; // Place your photo at /public/images/profile.jpg

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const hasVideo = VIDEO_URL.length > 0;

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary-500/[0.06] dark:bg-primary-500/[0.08] blur-3xl pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-500/[0.04] dark:bg-purple-500/[0.06] blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              {/* Available badge */}
              <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-slow" />
                <span className="text-[13px] font-medium text-primary-500">
                  Available for projects
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-[56px] font-extrabold leading-[1.08] tracking-tight mb-5 animate-fade-up animation-delay-100">
                I&apos;m{" "}
                <span className="gradient-text">Mussaib Rasheed</span>
              </h1>

              <p className="text-xl font-medium text-dark-500 dark:text-dark-400 mb-3 animate-fade-up animation-delay-200">
                Full-Stack &amp; Mobile Developer
              </p>

              <p className="text-base text-dark-500 dark:text-dark-400 leading-relaxed mb-8 max-w-[520px] animate-fade-up animation-delay-200">
                5 years turning ideas into shipped products. I&apos;ve built and
                launched 5–8 production applications across fintech, e-commerce,
                SaaS, and more — from first commit to real users at scale. I
                don&apos;t just write code.{" "}
                <strong className="text-dark-900 dark:text-white">
                  I build businesses.
                </strong>
              </p>

              {/* Stats */}
              <div className="flex gap-8 mb-9 animate-fade-up animation-delay-300">
                {[
                  { num: "5+", label: "Years Experience" },
                  { num: "7+", label: "Products Shipped" },
                  { num: "5+", label: "Industries" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-3xl font-extrabold text-primary-500">
                      {stat.num}
                    </div>
                    <div className="text-[13px] text-dark-500 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex gap-3 flex-wrap animate-fade-up animation-delay-400">
                <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                  Let&apos;s Work Together <ArrowRight size={16} />
                </a>
                <a href="#projects" className="btn-secondary inline-block">
                  View My Work
                </a>
              </div>
            </div>

            {/* Right — Video OR Profile Picture */}
            <div className="flex justify-center animate-fade-up animation-delay-300">
              {hasVideo ? (
                /* ───── VIDEO AVAILABLE: Show thumbnail with play button ───── */
                <div
                  className="w-full max-w-[420px] aspect-video rounded-2xl bg-gradient-to-br from-dark-100 to-dark-50 dark:from-dark-900 dark:to-dark-950 border border-dark-200 dark:border-dark-800 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl dark:shadow-black/30 group cursor-pointer"
                  onClick={() => setVideoOpen(true)}
                >
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
                      backgroundSize: "30px 30px",
                    }}
                  />

                  {/* Play button */}
                  <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg shadow-primary-500/30 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </div>
                  <p className="text-sm font-semibold text-dark-500 dark:text-dark-400 relative z-10">
                    Watch My Introduction
                  </p>
                  <p className="text-xs text-dark-400 dark:text-dark-500 mt-1 relative z-10">
                    2 min &bull; Who I am &amp; how I work
                  </p>
                </div>
              ) : (
                /* ───── NO VIDEO: Show profile picture ───── */
                <div className="w-full max-w-[380px] relative">
                  {/* Decorative ring behind the image */}
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary-500/20 via-purple-500/10 to-primary-500/5 blur-sm" />
                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary-500/30 to-purple-500/20" />

                  <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl dark:shadow-black/40 aspect-[4/5] bg-gradient-to-br from-dark-100 to-dark-50 dark:from-dark-900 dark:to-dark-950">
                    {/* Profile image */}
                    <Image
                      src={PROFILE_IMAGE}
                      alt="Mussaib Rasheed — Full-Stack & Mobile Developer"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 380px"
                      onError={(e) => {
                        // If image fails to load, hide it and show fallback
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />

                    {/* Fallback if image not found — shows initials */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                          backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
                          backgroundSize: "30px 30px",
                        }}
                      />
                      {/* <span className="font-display text-8xl font-extrabold text-primary-500/20 select-none">
                        MR
                      </span> */}
                    </div>

                    {/* Bottom gradient overlay with name */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 pt-16">
                      <p className="text-white font-display font-bold text-lg">
                        Mussaib Rasheed
                      </p>
                      <p className="text-white/70 text-sm">
                        Full-Stack &amp; Mobile Developer
                      </p>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-3 -right-3 bg-white dark:bg-dark-900 rounded-2xl px-4 py-3 shadow-xl border border-dark-200 dark:border-dark-800 z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[13px] font-semibold text-dark-900 dark:text-white">
                        Open to work
                      </span>
                    </div>
                  </div>

                  {/* Floating tech badge */}
                  <div className="absolute -top-2 -left-2 bg-white dark:bg-dark-900 rounded-xl px-3 py-2 shadow-xl border border-dark-200 dark:border-dark-800 z-10">
                    <span className="text-[12px] font-mono font-semibold text-primary-500">
                      5+ yrs
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ───── VIDEO MODAL ───── */}
      {videoOpen && hasVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-[900px] aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            <iframe
              src={VIDEO_URL}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Introduction Video — Mussaib Rasheed"
            />
          </div>
        </div>
      )}
    </>
  );
}
