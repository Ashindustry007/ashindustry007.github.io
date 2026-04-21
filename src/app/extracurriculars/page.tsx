"use client";

import { extracurriculars } from "@/lib/config";
import { Footer } from "@/components/footer";
import { ArrowLeft, Award, Heart, Camera, Code } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ExtracurricularsPage() {
  const { scrollY } = useScroll();
  // Increased opacity range to keep the background more visible
  const bgOpacity = useTransform(scrollY, [0, 800], [0.95, 0.4]);

  const getIcon = (category: string) => {
    switch (category) {
      case "Tech & Competitive Programming": return <Code className="text-primary" size={24} />;
      case "Arts & Media": return <Camera className="text-primary" size={24} />;
      case "Adventure & Community Impact": return <Heart className="text-primary" size={24} />;
      default: return <Award className="text-primary" size={24} />;
    }
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Background Layers */}
      <motion.div 
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://uobfpmgknyqxdsdvqcfe.supabase.co/storage/v1/object/public/Portfolio/Whisk_e2dcaa7c302f8248dbc4a95e628ab799eg-ezgif.com-png-to-webp-converter.webp')`,
          opacity: bgOpacity 
        }}
      />
      {/* Lightened gradients to increase background clarity */}
      <div className="fixed inset-0 z-0 bg-gradient-to-r from-background/70 via-background/40 to-transparent pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none" />

      {/* Wrapped Content Layer */}
      <div className="relative z-10">
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
              Life Beyond Tech
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-32 px-8 border-b border-white/5 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="space-y-6 max-w-2xl">
              <span className="text-primary font-mono text-xs uppercase tracking-widest block">Experiences</span>
              <h1 className="text-5xl md:text-7xl font-headline font-bold leading-none uppercase">
                Beyond the <br />
                <span className="text-outline text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>
                  Classroom
                </span>
              </h1>
              <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider max-w-lg leading-relaxed">
                Exploring the world through competitive programming, visual arts, and community service.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto space-y-24">
            {extracurriculars.map((category, catIdx) => (
              <div key={catIdx} className="space-y-12">
                <div className="flex items-center gap-6">
                  <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                    {getIcon(category.category)}
                  </div>
                  <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">
                    {category.category}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group p-8 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md hover:border-primary/40 transition-all duration-500 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-headline font-bold text-white group-hover:text-primary transition-colors leading-tight">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-[13px] text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-primary" />
                        <span className="text-[9px] font-mono uppercase tracking-widest text-primary/60">Achievement</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
