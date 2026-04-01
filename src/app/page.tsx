
"use client";

import { useState } from "react";
import { LoadingScreen } from "@/components/loading-screen";
import { ParallaxHero } from "@/components/parallax-hero";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { BeyondSection } from "@/components/beyond-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <main className="relative min-h-screen bg-background">
      <ParallaxHero />
      <div id="about">
        <AboutSection />
      </div>
      <ExperienceSection />
      <ProjectsSection />
      <BeyondSection />
      <CTASection />
      <Footer />
    </main>
  );
}
