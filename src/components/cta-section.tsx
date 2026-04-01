
"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-40 px-8 bg-background border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-5xl md:text-7xl font-headline font-bold leading-tight uppercase">
          Let&apos;s Build <br />
          <span className="text-primary">Intelligent Systems</span> <br />
          Together
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button asChild size="lg" className="h-14 px-10 rounded-full font-headline uppercase tracking-widest text-sm transition-all hover:scale-105 bg-primary text-black hover:bg-primary/90">
            <Link href={siteConfig.socials.github}>View GitHub Repo</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-10 rounded-full font-headline uppercase tracking-widest text-sm transition-all hover:scale-105 border-white/20 hover:border-primary">
            <Link href={`mailto:contact@ashish.me`}>Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
