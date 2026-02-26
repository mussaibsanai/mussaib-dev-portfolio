"use client";

import { services } from "@/data/site";
import {
  Globe,
  Smartphone,
  Server,
  Database,
  Rocket,
  Wrench,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Server,
  Database,
  Rocket,
  Wrench,
};

export function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-dark-50 dark:bg-[#080E1A]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label">What I Do</p>
          <h2 className="section-title">
            Services That <span className="gradient-text">Ship Results</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <div key={i} className="card card-hover p-8 group">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-5 group-hover:bg-primary-500/20 transition-colors">
                  <Icon size={22} className="text-primary-500" />
                </div>
                <h3 className="font-display text-[18px] font-bold mb-2.5 text-dark-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex gap-1.5 flex-wrap">
                  {service.techs.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
