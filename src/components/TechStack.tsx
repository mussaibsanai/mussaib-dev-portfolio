"use client";

import { techStack } from "@/data/site";
import { useEffect, useRef, useState } from "react";

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold font-mono text-dark-900 dark:text-white">
          {name}
        </span>
        <span className="text-[13px] text-dark-500 font-medium">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-dark-200 dark:bg-dark-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-purple-500 transition-all duration-[1500ms] ease-out"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section id="stack" className="py-24 bg-dark-50 dark:bg-[#080E1A]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">
            My Tech <span className="gradient-text">Arsenal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category} className="card p-8">
              <h3 className="font-display text-lg font-bold text-primary-500 mb-6">
                {category}
              </h3>
              <div className="flex flex-col gap-5">
                {techs.map((tech) => (
                  <SkillBar
                    key={tech.name}
                    name={tech.name}
                    level={tech.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
