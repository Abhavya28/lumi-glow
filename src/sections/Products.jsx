import React, { useState } from "react";
import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowBigRightDash,
  Heart,
  ShoppingCart,
} from "lucide-react";
import Button from "@/components/Button";

const featuredProducts = [
  {
    id: 1,
    name: "LumiGlow Hydrating Face Cream",
    price: 499,
    image: "/products/facecream.jpeg",
  },
  {
    id: 2,
    name: "LumiGlow Skin Glow Serum",
    price: 699,
    image: "/products/serum.jpeg",
  },
  {
    id: 3,
    name: "LumiGlow Gentle Cleanser",
    price: 399,
    image: "/products/cleanser.jpeg",
  },
  {
    id: 4,
    name: "LumiGlow Revitalizing Eye Cream",
    price: 599,
    image: "/products/eyecream.jpeg",
  },
];

const Products = () => {
  const [liked, setLiked] = useState([]);

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section id="products" className="bg-white">
      <div className="container mx-auto px-6 animate-fade-in flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12 hover:text-primary-foreground/90">
          Our Top Sellers
        </h2>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, idx) => {
              return (
                <div
                  key={product.id}
                  className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105`}
                >
                  <div className="w-full flex justify-between items-center mb-4">
                    <span className="font-semibold text-slate-600">
                      #{product.id}
                    </span>
                    <Heart
                      className="w-6 h-6 cursor-pointer transition-all duration-200"
                      stroke={
                        liked.includes(product.id) ? "red" : "currentColor"
                      }
                      fill={liked.includes(product.id) ? "red" : "none"}
                      onClick={() => toggleLike(product.id)}
                    />
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-40 h-40 object-contain mb-4"
                  />

                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 text-center">
                    {product.name}
                  </h3>

                  <p className="text-slate-700 font-medium mb-4 text-center">
                    ₹{product.price}
                  </p>

                  <Button className="px-8 py-2 text-lg font-semibold bg-red-500 text-white hover:bg-red-500/90">
                    Add to Cart
                    <ShoppingCart />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
