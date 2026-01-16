import React from "react";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 pt-20">
        <img
          src="/hero.jpeg"
          alt="Hydrating skincare hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb- pl-20 relative z-10">
        <div className="flex flex-col space-y-6 animate-fade-in">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            ditch the dryness!
          </h1>

          <span className="inline-block bg-white text-primary px-4 py-2 text-2xl md:text-4xl lg:text-5xl font-bold w-fit rounded-xl">
            100 hr hydration
          </span>

          <Button className="w-fit">
            Shop Now
          </Button>

        </div>
      </div>

    </section>
  );
};

export default Hero;
