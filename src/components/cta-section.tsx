
"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative py-48 px-8 bg-background border-t border-white/5 overflow-hidden group">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 opacity-60 transition-opacity duration-700">
        <Image
          src="https://uobfpmgknyqxdsdvqcfe.supabase.co/storage/v1/object/public/Portfolio/15d1e769-a062-4f93-9554-bf19ab63428e.png"
          alt="CTA Background"
          fill
          unoptimized={true}
          className="object-cover object-right grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
        />
        {/* Left-to-right gradient to ensure text legibility - further softened for image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
        {/* Top and bottom fades for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-12"
        >
          <div className="space-y-4">
            <span className="text-primary font-mono text-xs uppercase tracking-[0.4em] block">Final Call</span>
            <h2 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] uppercase tracking-tighter">
              Let&apos;s Build <br />
              <span className="text-primary">Intelligent Systems</span> <br />
              Together
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-start items-center gap-6">
            <Button asChild size="lg" className="h-14 px-10 rounded-full font-headline uppercase tracking-widest text-sm transition-all hover:scale-105 bg-primary text-black hover:bg-primary/90 shadow-2xl shadow-primary/20">
              <Link href={siteConfig.socials.github}>View GitHub Repo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10 rounded-full font-headline uppercase tracking-widest text-sm transition-all hover:scale-105 border-white/20 hover:border-primary backdrop-blur-sm">
              <Link href={`mailto:contact@ashish.me`}>Contact Me</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
