import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";
import { motion, useAnimation } from "framer-motion";

const SuperQuality = () => {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: hovered ? 1.1 : 1, // Increase scale when hovered
      transition: { duration: 0.3 },
    });
  }, [hovered, controls]);

  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red "> Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div
        className="flex flex-1 justify-center items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          initial={{ opacity: 1, scale: 0.5 }}
          animate={controls}
        >
          <img
            src={shoe8}
            alt="super quality shoe"
            width={570}
            height={522}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SuperQuality;
