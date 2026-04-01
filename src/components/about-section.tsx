
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

export function AboutSection() {
  const avatar = PlaceHolderImages.find(img => img.id === "avatar");

  return (
    <section className="py-32 px-8 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl group-hover:bg-primary/30 transition-all duration-700" />
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02]">
            {avatar?.imageUrl && (
              <Image
                src={avatar.imageUrl}
                alt={avatar.description || "About Ashish"}
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                data-ai-hint="man portrait"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <span className="text-primary font-mono text-xs uppercase tracking-widest block">About Me</span>
            <h2 className="text-3xl font-headline font-bold leading-tight">
              Shaping the Future of <br />
              <span className="text-primary">AI-Powered Creation</span>
            </h2>
          </div>
          
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              I am an AI Engineer currently pursuing my MSCS at UC San Diego, driven by the challenge of bridging the gap between theoretical research and scalable, real-world systems. My focus lies at the intersection of Computer Vision and Agentic AI.
            </p>
            <p>
              With a foundation from OUTR (B.Tech), I have spent my academic and professional career developing intelligent pipelines that solve complex problems—from healthcare audio bio-markers to cancer risk assessment via spatial transcriptomics.
            </p>
          </div>

          <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <h4 className="text-xs font-headline font-bold text-white uppercase tracking-wider">Education</h4>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">MSCS @ UC San Diego</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">B.Tech @ OUTR</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-headline font-bold text-white uppercase tracking-wider">Focus</h4>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Deep Learning / Computer vision</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Agentic AI Systems</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
