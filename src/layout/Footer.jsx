import React from "react";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#d4ecf2] py-16">
      <div className="container mx-auto px-6 text-slate-800">
        {/* Brand & Description */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0 mb-12">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">LumiGlow</h3>
            <p className="text-slate-700 max-w-sm">
              LumiGlow creates skincare products that are gentle, effective, and designed to give your skin a natural glow. Minimal, honest, and luxurious.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-20">
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-slate-700">
                <li>About Us</li>
                <li>Products</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-slate-700">
                <li>FAQ</li>
                <li>Shipping & Returns</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter + Social */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 border-t border-slate-300 pt-6">
          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-slate-800"
            />
            <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Instagram className="w-6 h-6 cursor-pointer text-slate-800 hover:text-primary transition" />
            <Twitter className="w-6 h-6 cursor-pointer text-slate-800 hover:text-primary transition" />
            <Facebook className="w-6 h-6 cursor-pointer text-slate-800 hover:text-primary transition" />
            <Linkedin className="w-6 h-6 cursor-pointer text-slate-800 hover:text-primary transition" />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-slate-600 mt-8">
          &copy; {new Date().getFullYear()} LumiGlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
