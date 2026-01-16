import React from "react";
import Button from "@/components/Button";
import { Droplet, HeartHandshake, ShieldHalf, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Droplet,
    title: "Deep Hydration",
    description:
      "Formulated to lock in moisture and keep your skin hydrated throughout the day",
  },
  {
    icon: HeartHandshake,
    title: "Skin First Formula",
    description:
      "Gentle ingredients that respect and strengthen your skin barrier.",
  },
  {
    icon: ShieldHalf,
    title: "Minimal & Honest",
    description: "No exaggerated claims, just skincare that delivers results.",
  },
  {
    icon: Sparkles,
    title: "Radiant Glow",
    description:
      "Ingredients that nourish your skin and bring out its natural glow.",
  },
];

const About = () => {
  return (
    <section className="text-foreground bg-white">
      {/* Hero */}
      <div className="container mx-auto px-6 pt-20 pb-20 items-center flex flex-col">
        <div className="space-y-4 animate-fade-in pb-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary hover:text-primary/90">
            About LumiGlow
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            LumiGlow was created with a simple idea to keep skin hydrated
            without overwhelming it. We believe skincare should feel light,
            effective, and honest.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every product is designed to support your skin barrier and bring out
            a natural glow that lasts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl animate-fade-in hover:border-primary hover:bg-primary/5 transition-all duration-800 max-w-xs mx-auto"
              style={{ animationDelay: `${(idx + 1) * 200}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
