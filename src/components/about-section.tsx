
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function AboutSection() {
  const avatar = PlaceHolderImages.find(img => img.id === "avatar");

  return (
    <section className="py-32 px-8 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all duration-700" />
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={avatar?.imageUrl || ""}
              alt={avatar?.description || "About Ashish"}
              width={800}
              height={800}
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              data-ai-hint="man portrait"
            />
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-primary font-mono text-xs uppercase tracking-widest block">About Me</span>
            <h2 className="text-5xl font-headline font-bold">
              Shaping the Future of <br />
              <span className="text-primary">AI-Powered Creation</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am an AI Engineer currently pursuing my MSCS at UC San Diego, driven by the challenge of bridging the gap between theoretical research and scalable, real-world systems. My focus lies at the intersection of Computer Vision and Agentic AI.
            </p>
            <p>
              With a foundation from OUTR (B.Tech), I have spent my academic and professional career developing intelligent pipelines that solve complex problems—from healthcare audio bio-markers to cancer risk assessment via spatial transcriptomics.
            </p>
          </div>

          <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-headline font-bold text-white mb-2">Education</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">MSCS @ UC San Diego</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">B.Tech @ OUTR</p>
            </div>
            <div>
              <h4 className="font-headline font-bold text-white mb-2">Focus</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Deep Learning / RAG</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Agentic AI Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
