
"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { siteConfig } from "@/lib/config";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const totalFrames = siteConfig.framesCount;

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    const updateProgress = () => {
      loadedCount++;
      const currentProgress = Math.round((loadedCount / totalFrames) * 100);
      setProgress(currentProgress);
      if (loadedCount === totalFrames) {
        setTimeout(onComplete, 500);
      }
    };

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(3, "0");
      img.src = `${siteConfig.framesBaseUrl}${frameIndex}${siteConfig.framesSuffix}`;
      img.onload = updateProgress;
      img.onerror = updateProgress; // Continue even if one fails
      images.push(img);
    }
  }, [onComplete, totalFrames]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background p-6">
      <div className="mb-8 flex items-center space-x-2 text-primary">
        <div className="h-10 w-10 border-4 border-t-transparent border-primary rounded-full animate-spin" />
        <span className="text-2xl font-headline font-bold uppercase tracking-widest">Panda Portfolio</span>
      </div>
      <div className="w-full max-w-md space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-wider">
          <span>Loading cinematic experience</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-1" />
      </div>
    </div>
  );
}
