
"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { siteConfig } from "@/lib/config";

interface LoadingScreenProps {
  onComplete: () => void;
  preloadedImages: HTMLImageElement[];
}

export function LoadingScreen({ onComplete, preloadedImages }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const totalFrames = siteConfig.framesCount;
  // We only block the UI for the first 30 frames to get the user in fast
  const CRITICAL_BATCH = 30; 

  useEffect(() => {
    let loadedCount = 0;
    let isComplete = false;

    const updateProgress = () => {
      loadedCount++;
      // Calculate progress relative to the critical batch for the UI
      const currentProgress = Math.min(100, Math.round((loadedCount / CRITICAL_BATCH) * 100));
      setProgress(currentProgress);
      
      if (loadedCount >= CRITICAL_BATCH && !isComplete) {
        isComplete = true;
        setTimeout(onComplete, 500);
      }
    };

    // Check images that are already in the cache or currently loading
    preloadedImages.forEach((img, index) => {
      if (index < CRITICAL_BATCH) {
        if (img.complete) {
          updateProgress();
        } else {
          img.onload = updateProgress;
          img.onerror = updateProgress;
        }
      }
    });

    // Fallback timer to prevent getting stuck
    const timer = setTimeout(() => {
      if (!isComplete) onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete, preloadedImages, CRITICAL_BATCH]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background p-6">
      <div className="mb-8 flex items-center space-x-4 text-primary">
        <div className="h-12 w-12 border-4 border-t-transparent border-primary rounded-full animate-spin" />
        <div className="flex flex-col">
          <span className="text-2xl font-headline font-bold uppercase tracking-widest leading-none">Panda Portfolio</span>
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-50 mt-1">Initializing Experience</span>
        </div>
      </div>
      <div className="w-full max-w-md space-y-4">
        <div className="flex justify-between text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-mono">
          <span>Loading cinematic assets</span>
          <span className="text-primary">{progress}%</span>
        </div>
        <Progress value={progress} className="h-1 bg-white/5" />
        <p className="text-center text-[8px] text-white/20 uppercase tracking-widest font-mono">
          Optimized for performance • Streaming {totalFrames} frames
        </p>
      </div>
    </div>
  );
}
