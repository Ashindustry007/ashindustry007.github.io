
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface LoadingScreenProps {
  progress: number;
  onComplete: () => void;
}

const statusMessages = [
  "Initializing neural engines...",
  "Calibrating visual optics...",
  "Syncing cinematic frames...",
  "Optimizing agentic architectures...",
  "Rendering digital canvas...",
  "Ready for sequence launch."
];

export function LoadingScreen({ progress }: LoadingScreenProps) {
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((prev) => (prev + 1) % statusMessages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 opacity-50" />
      
      {/* Animated Orb/Lens Thingy */}
      <div className="relative mb-16">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 rounded-full border border-primary/20 flex items-center justify-center p-4"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-full h-full rounded-full border-t-2 border-primary shadow-[0_0_20px_rgba(255,128,0,0.3)]"
          />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            key={progress}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl font-headline font-bold text-white tracking-tighter"
          >
            {progress}%
          </motion.span>
        </div>
      </div>

      {/* Quote Section */}
      <div className="text-center space-y-8 max-w-xl px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <p className="text-lg md:text-xl font-headline font-medium text-white/90 italic tracking-tight">
            "Good things take time, better things take a little longer."
          </p>
          <div className="h-px w-12 bg-primary mx-auto opacity-50" />
        </motion.div>

        <div className="w-full space-y-4">
          <div className="flex justify-between items-end mb-2">
            <AnimatePresence mode="wait">
              <motion.span 
                key={statusMessages[statusIdx]}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]"
              >
                {statusMessages[statusIdx]}
              </motion.span>
            </AnimatePresence>
            <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
              Buffering Experience
            </span>
          </div>
          
          <div className="relative h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <motion.p 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]"
        >
          Panda Portfolio System • v2.0-Production
        </motion.p>
      </div>
    </motion.div>
  );
}
