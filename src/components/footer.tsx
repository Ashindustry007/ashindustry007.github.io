
"use client";

import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="py-12 px-8 bg-[#161412] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-headline font-bold uppercase tracking-wider text-primary">
            {siteConfig.name} {siteConfig.surname}
          </h3>
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-[0.3em]">
            AI Engineer & MSCS Student
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-widest font-medium text-white/50">
          <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
          <Link href="/extracurriculars" className="hover:text-primary transition-colors">Extracurriculars</Link>
          <Link href="/photography" className="hover:text-primary transition-colors">Photography</Link>
          <Link href="mailto:contact@ashish.me" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        <div className="flex space-x-6 text-white/30">
          <Link href={siteConfig.socials.github} className="hover:text-primary transition-colors">
            <Github size={18} />
          </Link>
          <Link href={siteConfig.socials.linkedin} className="hover:text-primary transition-colors">
            <Linkedin size={18} />
          </Link>
          <Link href={siteConfig.socials.instagram} className="hover:text-primary transition-colors">
            <Instagram size={18} />
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/20">
        <p>© {new Date().getFullYear()} Panda Portfolio. Built for Intelligence.</p>
        <p>UCSD / OUTR</p>
      </div>
    </footer>
  );
}
