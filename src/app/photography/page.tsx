
"use client";

import { useEffect, useState } from "react";
import { siteConfig, photographyData } from "@/lib/config";
import { Footer } from "@/components/footer";
import { ArrowLeft, Instagram, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption: string;
  timestamp: string;
}

export default function PhotographyPage() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 600], [1, 0.3]);

  useEffect(() => {
    async function fetchFeed() {
      try {
        const response = await fetch('/api/instagram');
        const data = await response.json();
        
        if (response.ok && !data.error && Array.isArray(data)) {
          setPosts(data);
          setIsFallback(false);
        } else {
          // Silent fallback if API is unconfigured or fails
          throw new Error("Unconfigured");
        }
      } catch (err) {
        setIsFallback(true);
        // Fallback to high-quality curated sample data based on config
        const fallbackPosts: InstagramPost[] = photographyData.map((item) => ({
          id: item.id,
          media_url: `https://picsum.photos/seed/${item.imageSeed}/800/1000`,
          permalink: siteConfig.socials.instagram,
          caption: `${item.title} - ${item.location}`,
          timestamp: new Date().toISOString(),
        }));
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    }
    fetchFeed();
  }, []);

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
      <div className="fixed inset-0 z-0 bg-gradient-to-r from-background via-background/60 to-transparent pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10">
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
              @ash.galleryyy
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-32 px-8 border-b border-white/5 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="space-y-6 max-w-2xl">
              <span className="text-primary font-mono text-xs uppercase tracking-widest block">Visual Narratives</span>
              <h1 className="text-5xl md:text-7xl font-headline font-bold leading-none uppercase">
                Through <br />
                <span className="text-outline text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>
                  The Lens
                </span>
              </h1>
              <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider max-w-lg leading-relaxed">
                Capturing the cinematic rhythm of urban life, geometry, and the quiet moments in between.
              </p>
              
              <Link 
                href={siteConfig.socials.instagram} 
                target="_blank"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-500 group"
              >
                <Instagram size={16} className="group-hover:scale-110 transition-transform" />
                Explore @ash.galleryyy
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-24 px-8 min-h-[600px]">
          <div className="max-w-7xl mx-auto">
            {isFallback && !loading && (
              <div className="mb-12 p-3 rounded-xl bg-primary/5 border border-primary/10 text-center">
                <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-primary/60">
                  Viewing curated showcase (Live Instagram Feed Offline)
                </p>
              </div>
            )}

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              <AnimatePresence mode="popLayout">
                {loading ? (
                  Array.from({ length: 6 }).map((_, i) => (
                    <div key={`skeleton-${i}`} className="break-inside-avoid mb-8">
                      <Skeleton className="w-full h-80 rounded-2xl bg-white/5 animate-pulse" />
                      <div className="mt-4 space-y-2">
                        <Skeleton className="h-4 w-3/4 bg-white/5" />
                        <Skeleton className="h-3 w-1/2 bg-white/5" />
                      </div>
                    </div>
                  ))
                ) : (
                  posts.map((post) => (
                    <motion.div 
                      key={post.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="break-inside-avoid group relative"
                    >
                      <Link href={post.permalink} target="_blank" className="block">
                        <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] shadow-2xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-primary/10">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                          >
                            <Image
                              src={post.media_url}
                              alt={post.caption}
                              width={800}
                              height={1000}
                              unoptimized={true} // For external Instagram/Picsum URLs
                              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                              <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex justify-between items-center">
                                  <div className="h-10 w-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                                    <Instagram size={18} className="text-primary" />
                                  </div>
                                  <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <ExternalLink size={14} className="text-white/60" />
                                  </div>
                                </div>
                                
                                <p className="text-[11px] text-white/80 leading-relaxed line-clamp-3 font-medium">
                                  {post.caption || "View on Instagram"}
                                </p>
                                
                                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                                  <span className="text-[8px] font-mono text-white/30 uppercase tracking-[0.2em]">
                                    {new Date(post.timestamp).toLocaleDateString()}
                                  </span>
                                  <span className="text-[8px] font-mono text-primary uppercase tracking-[0.2em]">
                                    CINEMATIC SERIES
                                  </span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
