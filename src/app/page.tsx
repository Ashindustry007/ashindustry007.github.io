
"use client";

import { useState, useEffect, useRef } from "react";
import { LoadingScreen } from "@/components/loading-screen";
import { ParallaxHero } from "@/components/parallax-hero";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { BeyondSection } from "@/components/beyond-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/config";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Pre-initialize the image objects globally to prevent double-fetching
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    for (let i = 0; i < siteConfig.framesCount; i++) {
      const img = new Image();
      const idx = i.toString().padStart(3, "0");
      img.src = `${siteConfig.framesBaseUrl}${idx}${siteConfig.framesSuffix}`;
      imagesRef.current[i] = img;
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-background">
      {loading && (
        <LoadingScreen 
          onComplete={() => setLoading(false)} 
          preloadedImages={imagesRef.current}
        />
      )}
      
      <div className={loading ? "hidden" : "block"}>
        <ParallaxHero sharedImages={imagesRef.current} />
        <div id="about">
          <AboutSection />
        </div>
        <ExperienceSection />
        <ProjectsSection />
        <BeyondSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
