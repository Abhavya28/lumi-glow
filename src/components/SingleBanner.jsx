import React from "react";

const scrollingText = [
  " 30-day Free Returns ",
  " Secure Checkout ",
  " Vegan and Cruelty-free ",
  " Clean Ingredients ",
  " Free Shipping ₹299 ",
  " NEW COLLECTION ",
];

const Banner = () => {
  return (
    <div className="relative w-full pt-5 pb-20 overflow-hidden">
      {/* Diagonal Blue Banner */}
      <div className="absolute w-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/80">
        <div className="whitespace-nowrap animate-marquee inline-block">
          {[...scrollingText, ...scrollingText].map((item, index) => (
            <React.Fragment key={index}>
              <span className="mx-6 text-white text-lg font-medium">
                {item}
              </span>

              <span className="mx-6 text-white text-lg font-medium">★</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
