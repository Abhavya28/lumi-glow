import React from "react";

const scrollingText = [
  " NEW COLLECTION ",
  " NEW COLLECTION ",
  " NEW COLLECTION ",
  " NEW COLLECTION ",
  " NEW COLLECTION ",
  " NEW COLLECTION ",
];

const Banner = () => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      {/* Diagonal Blue Banner */}
      <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-3 bg-primary">
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

      {/* Diagonal Black Banner */}
      <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-3 bg-black py-2">
        <div className="whitespace-nowrap animate-marquee-reverse inline-block">
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
