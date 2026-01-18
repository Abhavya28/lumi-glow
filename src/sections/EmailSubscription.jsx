import React, { useState } from "react";
import Button from "@/components/Button";

const EmailSubscription = () => {
  const [isEmail, setIsEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Subscribed email:", isEmail);
    setIsEmail("");
  };

  return (
    <section className="py-10">
      <div className="container mx-auto text-center pb-10">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 hover:text-primary-foreground/90">
          Get Exclusive Offers & Tips
        </h2>
        <p className="text-slate-700 mb-8">
          Subscribe to our newsletter to receive the latest skincare tips and special discounts
        </p>

        {/* Input + Button */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            value={isEmail}
            onChange={(e) => setIsEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-slate-800"
            required
          />
          <Button
            type="submit"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default EmailSubscription;
