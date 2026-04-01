
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function BeyondSection() {
  const categories = [
    {
      title: "Academic Foundation",
      link: "/courses",
      imageUrl: "https://uobfpmgknyqxdsdvqcfe.supabase.co/storage/v1/object/public/Portfolio/Whisk_9e7edf211d8733c81c5432ff8a458bebeg-ezgif.com-png-to-webp-converter.webp",
      imageHint: "campus library",
      desc: "Coursework and fundamental research papers."
    },
    {
      title: "Beyond the Classroom",
      link: "/extracurriculars",
      imageUrl: "https://uobfpmgknyqxdsdvqcfe.supabase.co/storage/v1/object/public/Portfolio/Whisk_050fef88eeb28d78dd1491ef96f1ce80dr-ezgif.com-png-to-webp-converter.webp",
      imageHint: "adventure extra",
      desc: "Awards, technical clubs, and community impact."
    },
    {
      title: "Through the Lens",
      link: "/photography",
      imageUrl: "https://uobfpmgknyqxdsdvqcfe.supabase.co/storage/v1/object/public/Portfolio/Whisk_2fef7c40d3875ff89344a9b2ecb13813eg-ezgif.com-png-to-webp-converter.webp",
      imageHint: "cinema photo",
      desc: "Capturing the world through cinematic photography."
    }
  ];

  return (
    <section className="py-32 px-8 bg-[#161412]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-primary font-mono text-xs uppercase tracking-widest block">Interests</span>
          <h2 className="text-5xl font-headline font-bold uppercase">Beyond AI</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <Link key={idx} href={cat.link} className="group relative aspect-[4/5] overflow-hidden rounded-2xl block">
              <Image
                src={cat.imageUrl}
                alt={cat.title}
                fill
                unoptimized={true}
                className="absolute inset-0 w-full h-full object-cover object-center grayscale-0 brightness-50 group-hover:scale-110 transition-all duration-1000"
                data-ai-hint={cat.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-headline font-bold text-white group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-white/60 max-w-[200px]">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary transition-all duration-500">
                    <ArrowUpRight className="text-primary group-hover:text-black transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
