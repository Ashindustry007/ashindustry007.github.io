
"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/config";
import { Github, Linkedin, Instagram, MousePointer2 } from "lucide-react";
import Link from "next/link";

export function ParallaxHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    for (let i = 0; i < siteConfig.framesCount; i++) {
      const img = new Image();
      const idx = i.toString().padStart(3, "0");
      img.src = `${siteConfig.framesBaseUrl}${idx}${siteConfig.framesSuffix}`;
      imagesRef.current[i] = img;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 1.5;
      const rawIdx = Math.floor((scrollY / maxScroll) * siteConfig.framesCount);
      const idx = Math.min(siteConfig.framesCount - 1, Math.max(0, rawIdx));
      setFrameIndex(idx);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (img && img.complete) {
      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = img.width / img.height;
      let drawW, drawH, drawX, drawY;

      if (canvasAspect > imgAspect) {
        drawW = canvas.width;
        drawH = canvas.width / imgAspect;
        drawX = 0;
        drawY = (canvas.height - drawH) / 2;
      } else {
        drawH = canvas.height;
        drawW = canvas.height * imgAspect;
        drawY = 0;
        drawX = (canvas.width - drawW) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    }
  }, [frameIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-[250vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden rounded-b-[4rem] bg-background shadow-2xl">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        />
        {/* Adjusted opacity of gradient to make the character sequence more visible */}
        <div className="absolute inset-0 hero-gradient opacity-30" />

        <div className="relative z-10 grid h-full w-full grid-cols-1 md:grid-cols-2 px-12 py-16">
          {/* Identity Block */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em] block opacity-80">
                Hey, my name is
              </span>
              <h1 className="text-6xl md:text-8xl font-headline font-bold leading-none uppercase tracking-tighter">
                {siteConfig.name} <br />
                <span className="text-outline text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>
                  {siteConfig.surname}
                </span>
              </h1>
              <div className="pt-4">
                <p className="text-xs md:text-sm font-mono text-primary/80 uppercase tracking-[0.2em] font-bold">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Value Proposition Block */}
          <div className="flex flex-col justify-center items-end text-right space-y-8">
            <div className="max-w-xs space-y-4">
              <h2 className="text-xs font-headline font-bold text-primary uppercase tracking-widest">
                {siteConfig.subheadline}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed opacity-80">
                {siteConfig.intro}
              </p>
            </div>

            <div className="flex flex-wrap justify-end gap-x-6 gap-y-3 max-w-xs">
              {siteConfig.skills.map((skill) => (
                <div key={skill.id} className="flex flex-col items-end">
                  <span className="text-[6px] text-primary/40 font-mono tracking-widest mb-0.5">
                    {skill.id}
                  </span>
                  <span className="text-[8px] font-headline uppercase tracking-[0.1em] text-white/60">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Socials & Navigation */}
          <div className="absolute bottom-10 left-0 w-full flex flex-col items-center space-y-8">
            <div className="flex space-x-8 text-white/20">
              <Link href={siteConfig.socials.github} className="hover:text-primary transition-all duration-300">
                <Github size={14} />
              </Link>
              <Link href={siteConfig.socials.linkedin} className="hover:text-primary transition-all duration-300">
                <Linkedin size={14} />
              </Link>
              <Link href={siteConfig.socials.instagram} className="hover:text-primary transition-all duration-300">
                <Instagram size={14} />
              </Link>
            </div>

            <nav className="flex space-x-8 uppercase text-[8px] tracking-[0.2em] font-medium text-white/30">
              <Link href="/photography" className="hover:text-primary transition-colors">
                Photography
              </Link>
              <Link href="/extracurriculars" className="hover:text-primary transition-colors">
                Extracurriculars
              </Link>
              <Link href="/courses" className="hover:text-primary transition-colors">
                Coursework
              </Link>
            </nav>
            
            <div className="animate-bounce mt-2 opacity-30">
              <MousePointer2 className="text-primary rotate-180" size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
