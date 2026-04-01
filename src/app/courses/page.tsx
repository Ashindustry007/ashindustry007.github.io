
"use client";

import { academicData } from "@/lib/config";
import { Footer } from "@/components/footer";
import { ArrowLeft, Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CoursesPage() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 600], [1, 0.1]);
  const bgImage = PlaceHolderImages.find(img => img.id === "courses-bg");

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Background Layers */}
      <motion.div 
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://uobfpmgknyqxdsdvqcfe.supabase.co/storage/v1/object/public/Portfolio/Whisk_f82dab339ee581d98b64e81ba16dadbdeg-ezgif.com-png-to-webp-converter.webp')`,
          opacity: bgOpacity 
        }}
      />
      {/* Left-to-right gradient for text readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-r from-background via-background/40 to-transparent pointer-events-none" />
      {/* Bottom fade gradient */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />

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
              Academic Foundation
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-32 px-8 border-b border-white/5 overflow-hidden">
          {bgImage?.imageUrl && (
            <div className="absolute inset-0 z-0">
              <Image
                src={bgImage.imageUrl}
                alt="Education Background"
                fill
                className="object-cover opacity-40 grayscale-[0.2] brightness-125"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
            </div>
          )}
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 justify-between items-center gap-12">
            <div className="space-y-6">
              <span className="text-primary font-mono text-xs uppercase tracking-widest block">Education Path</span>
              <h1 className="text-5xl md:text-7xl font-headline font-bold leading-none uppercase">
                Academic <br />
                <span className="text-outline text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>
                  Excellence
                </span>
              </h1>
              <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider max-w-lg leading-relaxed">
                A comprehensive journey from electrical engineering fundamentals to advanced specialization in artificial intelligence and computer science.
              </p>
            </div>
            
            <div className="hidden md:flex flex-col items-end text-right space-y-4">
               <div className="h-px w-24 bg-primary/40" />
               <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary/60">UC San Diego / OUTR</p>
            </div>
          </div>
        </section>

        {/* Study Sections */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="graduate" className="space-y-16">
              <div className="flex justify-center">
                <TabsList className="bg-white/5 border border-white/10 p-1 rounded-full h-14 backdrop-blur-lg">
                  <TabsTrigger value="graduate" className="rounded-full px-8 data-[state=active]:bg-primary data-[state=active]:text-black font-headline uppercase text-xs tracking-widest transition-all">
                    Graduate (UCSD)
                  </TabsTrigger>
                  <TabsTrigger value="undergrad" className="rounded-full px-8 data-[state=active]:bg-primary data-[state=active]:text-black font-headline uppercase text-xs tracking-widest transition-all">
                    Undergraduate (OUTR)
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="graduate" className="space-y-12 animate-in fade-in duration-700">
                <div className="flex flex-col md:grid md:grid-cols-2 justify-between items-start md:items-center gap-8 border-b border-white/5 pb-12">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-headline font-bold">{academicData.graduate.university}</h2>
                    <p className="text-xl text-primary/80 font-headline">{academicData.graduate.degree} in {academicData.graduate.branch}</p>
                  </div>
                  <div className="md:justify-self-end bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 backdrop-blur-md">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Award className="text-primary" size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] text-primary/40 font-mono uppercase tracking-widest block">Current GPA</span>
                      <p className="text-2xl font-headline font-bold text-white">{academicData.graduate.cgpa}</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {academicData.graduate.terms.map((term, idx) => (
                    <div key={idx} className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-primary/30 transition-all duration-500">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-xl font-headline font-bold text-white group-hover:text-primary transition-colors">{term.id}</h3>
                        <div className="text-right">
                          <span className="text-[10px] text-primary/40 font-mono uppercase tracking-widest block">Status</span>
                          <p className="text-sm font-mono font-bold text-white/60">{term.id.includes('Spring') ? 'In Progress' : 'Completed'}</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {term.courses.map((course, cIdx) => (
                          <li key={cIdx} className="text-[11px] text-white/40 leading-relaxed font-medium flex items-start gap-2">
                            <span className="text-primary mt-1">▹</span>
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="undergrad" className="space-y-12 animate-in fade-in duration-700">
                <div className="flex flex-col md:grid md:grid-cols-2 justify-between items-start md:items-center gap-8 border-b border-white/5 pb-12">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-headline font-bold">{academicData.undergraduate.university}</h2>
                    <p className="text-xl text-primary/80 font-headline">{academicData.undergraduate.degree} in {academicData.undergraduate.branch}</p>
                  </div>
                  <div className="md:justify-self-end bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 backdrop-blur-md">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Award className="text-primary" size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] text-primary/40 font-mono uppercase tracking-widest block">Final CGPA</span>
                      <p className="text-2xl font-headline font-bold text-white">{academicData.undergraduate.cgpa}</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                  {academicData.undergraduate.semesters.map((sem, idx) => (
                    <div key={idx} className="group p-6 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-primary/30 transition-all duration-500">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-headline font-bold text-white group-hover:text-primary transition-colors">{sem.id}</h3>
                        <p className="text-[10px] font-mono font-bold text-white/40">{sem.sgpa}</p>
                      </div>
                      <ul className="space-y-2">
                        {sem.courses.map((course, cIdx) => (
                          <li key={cIdx} className="text-[10px] text-white/30 leading-tight">
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Specializations & Additional Courses */}
        <section className="py-24 px-8 border-t border-white/5 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="space-y-4">
                <span className="text-primary font-mono text-xs uppercase tracking-widest block">Certifications</span>
                <h2 className="text-4xl font-headline font-bold uppercase">Specializations & <br /> Additional Courses</h2>
              </div>
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest max-w-xs text-right">
                Professional development and external research specializations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicData.additionalCourses.map((course, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md hover:border-primary/40 transition-all duration-500 group flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <ExternalLink className="text-primary" size={16} />
                    </div>
                    <span className="text-[10px] font-mono text-white/30">{course.date}</span>
                  </div>
                  <h4 className="text-lg font-headline font-bold text-white group-hover:text-primary transition-colors mb-2 leading-tight">
                    {course.title}
                  </h4>
                  <p className="text-[11px] text-primary/60 font-mono uppercase tracking-wider mb-3">
                    {course.provider}
                  </p>
                  {course.description && (
                    <p className="text-[10px] text-muted-foreground leading-relaxed border-t border-white/5 pt-3 mt-auto">
                      {course.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
