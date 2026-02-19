"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center bg-[#0B0F14] section pt-24">
  <div className="container text-center">

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="heading text-white"
    >
      From Ratta to Real Understanding.
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="subheading"
    >
      Setu AI is a concept-first learning platform for K–12 and undergraduate students — designed to deepen curriculum understanding, strengthen thinking skills, and build lasting academic confidence.
    </motion.p>

    <div className="flex gap-4 mt-8 flex-wrap justify-center">
      <button className="primary-btn">
        Start Your Learning Journey
      </button>

      <button className="secondary-btn">
        Explore Programs
      </button>
    </div>

    <p className="mt-6 text-sm text-gray-500">
      Personalized. Visual-first. Skill-driven.
    </p>

  </div>
</section>

  );
};

export default Hero;
