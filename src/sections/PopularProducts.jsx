import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
import { motion } from "framer-motion";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col gap-5 justify-start">
        <h2 className="text-4xl font-palanquin font-bold">
          Our
          <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray  ">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product) => (
            <motion.div
              key={product.name}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }} // Define hover animations
            >
              <PopularProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
