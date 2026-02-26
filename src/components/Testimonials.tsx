"use client";

import { testimonials } from "@/data/site";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <p className="section-label">Testimonials</p>
        <h2 className="section-title mb-12">
          Client <span className="gradient-text">Stories</span>
        </h2>

        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="card p-10 md:p-12 relative"
            style={{
              borderStyle: testimonial.placeholder ? "dashed" : "solid",
            }}
          >
            {/* Quote mark */}
            <div className="absolute top-4 left-8 text-5xl text-primary-500/20 font-serif select-none">
              &ldquo;
            </div>

            <p className="text-lg text-dark-500 dark:text-dark-400 leading-relaxed italic mb-6">
              {testimonial.text}
            </p>

            <div>
              <p className="text-[15px] font-bold text-dark-900 dark:text-white">
                {testimonial.author}
              </p>
              <p className="text-[13px] text-dark-500">{testimonial.role}</p>
            </div>

            {testimonial.placeholder && (
              <div className="mt-6 inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 px-5 py-2.5 rounded-xl text-[13px] text-primary-500 font-medium">
                <Star size={14} fill="currentColor" />
                This spot is waiting for your first 5-star review
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
