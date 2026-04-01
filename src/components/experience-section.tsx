
"use client";

import { experience } from "@/lib/config";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
            <Card key={idx} className="bg-background border-white/5 hover:border-primary/50 transition-all duration-500 group">
              <CardHeader>
                <span className="text-primary font-mono text-sm mb-2 block">0{idx + 1}</span>
                <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
                  {item.company}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
