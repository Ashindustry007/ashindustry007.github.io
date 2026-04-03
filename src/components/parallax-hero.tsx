
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { siteConfig } from "@/lib/config";
import { Github, Linkedin, Instagram, MousePointer2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ParallaxHeroProps {
  sharedImages: HTMLImageElement[];
}

export function ParallaxHero({ sharedImages }: ParallaxHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [canvasOpacity, setCanvasOpacity] = useState(0);
  
  const firstFrameUrl = `${siteConfig.framesBaseUrl}000${siteConfig.framesSuffix}`;

  const renderFrame = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, img: HTMLImageElement) => {
    if (!img) return;
    
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

    // Force draw immediately
    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 1.5;
      const rawIdx = Math.floor((scrollY / maxScroll) * (siteConfig.framesCount - 1));
      const idx = Math.min(siteConfig.framesCount - 1, Math.max(0, rawIdx));
      setFrameIndex(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial draw and frame index updates
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = sharedImages[frameIndex];
    if (img && (img.complete || img.naturalWidth > 0)) {
      renderFrame(ctx, canvas, img);
      if (canvasOpacity === 0) {
        setCanvasOpacity(1);
      }
    }
  }, [frameIndex, sharedImages, renderFrame, canvasOpacity]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const ctx = canvas.getContext("2d", { alpha: false });
      const img = sharedImages[frameIndex];
      if (ctx && img) {
        renderFrame(ctx, canvas, img);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex, sharedImages, renderFrame]);

  return (
    <div className="relative h-[250vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden rounded-b-[4rem] bg-background shadow-2xl">
        {/* Background Fallback (High Quality Static Image) */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={firstFrameUrl}
            alt="Hero Background Fallback"
            fill
            priority
            className="object-cover opacity-100"
            unoptimized={true} /* We keep the frame sequence unoptimized to avoid Vercel processing overhead on 192 frames */
          />
        </div>

        {/* Cinematic Sequence Canvas */}
        <canvas
          ref={canvasRef}
          style={{ opacity: canvasOpacity }}
          className="absolute inset-0 h-full w-full object-cover z-10 transition-opacity duration-700 pointer-events-none"
        />
        
        <div className="absolute inset-0 hero-gradient opacity-30 z-20" />

        <div className="relative z-30 grid h-full w-full grid-cols-1 md:grid-cols-2 px-12 py-16 pointer-events-none">
          <div className="flex flex-col justify-center pointer-events-auto">
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
            </div>
          </div>

          <div className="flex flex-col justify-center items-end text-right space-y-8 pointer-events-auto">
            <div className="max-w-xs md:max-w-sm space-y-4">
              <h2 className="text-lg md:text-xl font-headline font-bold text-primary uppercase tracking-widest leading-tight">
                {siteConfig.subheadline}
              </h2>
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed opacity-80">
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

          <div className="absolute bottom-10 left-0 w-full flex flex-col items-center space-y-8 pointer-events-auto">
            <div className="flex space-x-8 text-white/20">
              <Link href={siteConfig.socials.github} target="_blank" className="hover:text-primary transition-all duration-300">
                <Github size={14} />
              </Link>
              <Link href={siteConfig.socials.linkedin} target="_blank" className="hover:text-primary transition-all duration-300">
                <Linkedin size={14} />
              </Link>
              <Link href={siteConfig.socials.instagram} target="_blank" className="hover:text-primary transition-all duration-300">
                <Instagram size={14} />
              </Link>
            </div>

            <nav className="flex space-x-8 uppercase text-[8px] tracking-[0.2em] font-medium text-white/30">
              <Link href="/photography/" className="hover:text-primary transition-colors">
                Photography
              </Link>
              <Link href="/extracurriculars/" className="hover:text-primary transition-colors">
                Extracurriculars
              </Link>
              <Link href="/courses/" className="hover:text-primary transition-colors">
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
