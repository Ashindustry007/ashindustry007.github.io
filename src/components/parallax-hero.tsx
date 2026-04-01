
"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/config";
import { Github, Linkedin, Instagram, MousePointer2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ParallaxHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // Preload into ref for canvas drawing
    for (let i = 0; i < siteConfig.framesCount; i++) {
      const img = new Image();
      const idx = i.toString().padStart(3, "0");
      img.src = `${siteConfig.framesBaseUrl}${idx}${siteConfig.framesSuffix}`;
      imagesRef.current[i] = img;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 1.5; // Stretch scroll for better feel
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
      // Fit image to canvas maintaining aspect ratio (cover)
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
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative z-10 grid h-full w-full grid-cols-1 md:grid-cols-2 px-8 py-16">
          {/* Identity Block */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-1">
              <span className="text-primary font-headline text-sm uppercase tracking-widest block">
                Welcome to the portfolio of
              </span>
              <h1 className="text-7xl md:text-9xl font-headline font-bold leading-tight uppercase">
                {siteConfig.name} <br />
                <span className="text-outline text-transparent" style={{ WebkitTextStroke: '2px white' }}>
                  {siteConfig.surname}
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-8">
              {siteConfig.skills.map((skill) => (
                <div key={skill.id} className="flex flex-col">
                  <span className="text-[10px] text-primary/60 font-mono tracking-tighter">
                    {skill.id}
                  </span>
                  <span className="text-xs font-headline uppercase tracking-wide">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Value Proposition Block */}
          <div className="flex flex-col justify-center items-end text-right md:pr-12">
            <div className="max-w-md space-y-4">
              <h2 className="text-3xl font-headline font-bold text-primary">
                {siteConfig.subheadline}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {siteConfig.intro}
              </p>
            </div>
          </div>

          {/* Socials & Navigation */}
          <div className="absolute bottom-12 left-0 w-full flex flex-col items-center space-y-8">
            <div className="flex space-x-8 text-white/50">
              <Link href={siteConfig.socials.github} className="hover:text-primary transition-colors">
                <Github size={20} />
              </Link>
              <Link href={siteConfig.socials.linkedin} className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href={siteConfig.socials.instagram} className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
            </div>

            <nav className="flex space-x-12 uppercase text-[10px] tracking-[0.2em] font-medium text-white/70">
              <Link href="/photography.html" className="hover:text-primary transition-colors hover:underline underline-offset-8">
                [Photography]
              </Link>
              <Link href="/extracurricular.html" className="hover:text-primary transition-colors hover:underline underline-offset-8">
                [Extracurriculars]
              </Link>
              <Link href="/courses.html" className="hover:text-primary transition-colors hover:underline underline-offset-8">
                [Coursework]
              </Link>
            </nav>
            
            <div className="animate-bounce mt-4">
              <MousePointer2 className="text-primary/40 rotate-180" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
