
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
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const criticalLoadedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const totalFrames = siteConfig.framesCount;
    const KEYFRAME_STEP = 8; // Load every 8th frame for the "Fast Spin" entry
    
    const loadImage = (index: number) => {
      return new Promise<void>((resolve) => {
        if (imagesRef.current[index]) {
          resolve();
          return;
        }

        const img = new Image();
        const idx = index.toString().padStart(3, "0");
        img.src = `${siteConfig.framesBaseUrl}${idx}${siteConfig.framesSuffix}`;
        img.onload = () => {
          imagesRef.current[index] = img;
          resolve();
        };
        img.onerror = () => {
          resolve();
        };
      });
    };

    const startLoading = async () => {
      // 1. Identify Keyframes (0, 8, 16, 24... 192)
      const keyframes: number[] = [];
      for (let i = 0; i < totalFrames; i += KEYFRAME_STEP) {
        keyframes.push(i);
      }
      if (keyframes[keyframes.length - 1] !== totalFrames - 1) {
        keyframes.push(totalFrames - 1);
      }

      // 2. Load Keyframes in parallel for instant functional entry
      let loadedKeyframes = 0;
      const keyframePromises = keyframes.map(async (frameIdx) => {
        await loadImage(frameIdx);
        loadedKeyframes++;
        const progress = Math.min(100, Math.round((loadedKeyframes / keyframes.length) * 100));
        setLoadProgress(progress);
      });

      await Promise.all(keyframePromises);
      
      // 3. Unlock the site immediately after keyframes are ready
      criticalLoadedRef.current = true;
      setTimeout(() => setLoading(false), 300);

      // 4. Silently fill in the "Gap Frames" (1-7, 9-15, etc.) in background
      // We process these in throttled batches to prevent main-thread lag
      const gapFrames: number[] = [];
      for (let i = 0; i < totalFrames; i++) {
        if (!imagesRef.current[i]) {
          gapFrames.push(i);
        }
      }

      const batchSize = 6;
      for (let i = 0; i < gapFrames.length; i += batchSize) {
        const batch = gapFrames.slice(i, i + batchSize).map(loadImage);
        
        if ('requestIdleCallback' in window) {
          await new Promise(resolve => {
            (window as any).requestIdleCallback(async () => {
              await Promise.all(batch);
              setTimeout(resolve, 50); // Small breath for main thread
            });
          });
        } else {
          await Promise.all(batch);
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
    };

    startLoading();
  }, []);

  return (
    <main className="relative min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen 
            key="loader"
            progress={loadProgress}
            onComplete={() => setLoading(false)} 
          />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ParallaxHero sharedImages={imagesRef.current} />
            <div id="about">
              <AboutSection />
            </div>
            <ExperienceSection />
            <ProjectsSection />
            <BeyondSection />
            <CTASection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
