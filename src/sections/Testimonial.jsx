import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "LumiGlow completely changed my skincare routine. The gentle cleanser feels so light on my skin and still leaves my face fresh, clean, and glowing without any dryness.",
    author: "Ananya Sharma",
    role: "Skincare Enthusiast",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "I've tried so many brands, but LumiGlow's eye cream actually works. My under-eyes feel hydrated, smoother, and visibly brighter after just a few weeks of use.",
    author: "Ritika Mehra",
    role: "Beauty Blogger",
    avatar:
      "https://images.unsplash.com/photo-1744117614140-cc338a716e8d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The texture, the fragrance, and the results, everything about LumiGlow feels premium. My skin feels calm and naturally radiant every day.",
    author: "Neha Kapoor",
    role: "Lifestyle Creator",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "What I love most about LumiGlow is how gentle yet effective the products are. Even with sensitive skin, I experienced no irritation, only glow.",
    author: "Pooja Verma",
    role: "Dermatology Student",
    avatar:
      "https://plus.unsplash.com/premium_photo-1755892594572-a59873887f6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "After using LumiGlow consistently, my skin feels healthier and more balanced. It’s now a permanent part of my morning and night routine.",
    author: "Kavya Nair",
    role: "Wellness Advocate",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "LumiGlow delivers exactly what it promises — simple, effective skincare. The glow feels real, not artificial, and my confidence has definitely gone up.",
    author: "Sneha Malhotra",
    role: "Working Professional",
    avatar:
      "https://images.unsplash.com/photo-1742749648141-ba338f5d9e91?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


const Testimonials = () => {
  const [start, setStart] = useState(0);

  const next = () => {
    if (start + 2 < testimonials.length) {
      setStart(start + 2);
    }
  };

  const prev = () => {
    if (start - 2 >= 0) {
      setStart(start - 2);
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h6 className="text-0.5xl md:text-1xl font-bold text-primary-foreground text-center p-2 hover:text-primary-foreground/90">
          Loved by 17K+ Customers
        </h6>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-10 hover:text-primary-foreground/90">
          What They're Saying
        </h2>

        {/* Reviews */}
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            {testimonials.slice(start, start + 2).map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-primary-foreground/30 h-[360px] flex flex-col"
              >
                <p className="text-lg text-slate-700 mb-6 flex-1">
                  “{item.quote}”
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">
                      {item.author}
                    </p>
                    <p className="text-sm text-slate-500">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={prev}
              disabled={start === 0}
              className="p-3 rounded-full bg-white shadow hover:scale-105 transition disabled:opacity-40"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              disabled={start + 2 >= testimonials.length}
              className="p-3 rounded-full bg-white shadow hover:scale-105 transition disabled:opacity-40"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
