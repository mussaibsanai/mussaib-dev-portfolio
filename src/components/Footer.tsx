import Link from "next/link";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-dark-200 dark:border-dark-800 py-8 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-dark-500">
          © {new Date().getFullYear()} Mussaib Rasheed. Built with Next.js &amp;
          shipped fast.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-500 hover:text-primary-500 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-500 hover:text-primary-500 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={siteConfig.links.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-500 hover:text-primary-500 transition-colors flex items-center gap-1 text-[13px] font-medium"
          >
            Upwork <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
