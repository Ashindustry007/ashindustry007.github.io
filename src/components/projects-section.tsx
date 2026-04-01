
"use client";

import { projects } from "@/lib/config";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <section className="py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-primary font-mono text-xs uppercase tracking-widest block">Work</span>
            <h2 className="text-5xl font-headline font-bold uppercase">Featured Projects</h2>
          </div>
          <p className="max-w-md text-muted-foreground text-right">
            Selected works showcasing expertise in deep learning, audio analysis, and high-performance AI architectures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const imgData = PlaceHolderImages.find(img => img.id === project.imageKey);
            return (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6">
                  <Image
                    src={imgData?.imageUrl || ""}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    data-ai-hint={imgData?.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-2xl font-headline font-bold group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
