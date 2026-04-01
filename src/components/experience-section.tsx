
"use client";

import { experience, publications } from "@/lib/config";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="py-32 px-8 bg-[#161412]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-primary font-mono text-xs uppercase tracking-widest block">Professional Journey</span>
          <h2 className="text-5xl font-headline font-bold uppercase">Experience & Research Path</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experience.map((item, idx) => (
            <Card key={idx} className="bg-background border-white/5 hover:border-primary/50 transition-all duration-500 group flex flex-col">
              <CardHeader>
                <span className="text-primary font-mono text-sm mb-2 block">0{idx + 1}</span>
                <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
                  {item.company}
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {publications.length > 0 && (
          <div className="pt-16">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-grow bg-white/10" />
                <div className="flex items-center gap-2 text-primary">
                  <BookOpen size={16} />
                  <span className="text-xs font-mono uppercase tracking-widest">Publications</span>
                </div>
                <div className="h-px flex-grow bg-white/10" />
              </div>
              
              {publications.map((pub, idx) => (
                <div key={idx} className="text-center space-y-2">
                  <h3 className="text-lg font-headline font-bold text-white leading-snug">
                    "{pub.title}"
                  </h3>
                  <p className="text-xs text-muted-foreground italic">{pub.authors}</p>
                  <p className="text-[10px] text-primary/60 font-mono uppercase tracking-widest">
                    {pub.conference}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
