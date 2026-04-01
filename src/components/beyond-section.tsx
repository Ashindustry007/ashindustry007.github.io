
"use client";

import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowUpRight } from "lucide-react";

export function BeyondSection() {
  const categories = [
    {
      title: "Academic Foundation",
      link: "/courses",
      imageKey: "academic-thumbnail",
      desc: "Coursework and fundamental research papers."
    },
    {
      title: "Beyond the Classroom",
      link: "/extracurriculars",
      imageKey: "extracurricular-thumbnail",
      desc: "Awards, technical clubs, and community impact."
    },
    {
      title: "Through the Lens",
      link: "/photography",
      imageKey: "photography-thumbnail",
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
          {categories.map((cat, idx) => {
            const imgData = PlaceHolderImages.find(img => img.id === cat.imageKey);
            return (
              <Link key={idx} href={cat.link} className="group relative h-[450px] overflow-hidden rounded-2xl block">
                <Image
                  src={imgData?.imageUrl || ""}
                  alt={cat.title}
                  fill
                  className="object-cover grayscale-0 brightness-50 group-hover:scale-110 transition-all duration-1000"
                  data-ai-hint={imgData?.imageHint}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
