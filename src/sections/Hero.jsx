import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div>
          <img
          src="/hero.jpeg"
          alt="hero image"
          className="w-full h-full object-cover opacity-90"
        />
        </div>
      </div>
    </section>
  );
};

export default Hero;
