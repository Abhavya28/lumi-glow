import React from "react";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pt-20">
        <img
          src="/hero.jpeg"
          alt="Hydrating skincare hero background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/5 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-80 pl-8 relative z-10">
        <div className="flex flex-col space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold leading-tight text-primary-foreground">
            <span className="block">Everyday rituals, </span>
            <span className="block">thoughtfully simplified</span>
          </h1>

          <span className="inline-block bg-white text-primary px-4 py-2 text-2xl md:text-2xl lg:text-2xl font-bold w-fit rounded-xl">
            100 hr hydration
          </span>

          <button className="w-fit relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-white text-primary hover:bg-white/90 shadow-lg shadow-primary/25 px-6 py-3">
            <span className="relative flex items-center justify-center gap-2">
              <a href="#products">Shop Now</a>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
