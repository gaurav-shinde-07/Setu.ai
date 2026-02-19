"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-20 text-center bg-[#0B0F14] pt-24">


      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white leading-tight"
      >
        Understanding, Not Just Marks.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-6 text-gray-300 max-w-2xl text-lg"
      >
        Setu AI is a concept-first learning platform for K–12 and undergraduate students — designed to deepen curriculum understanding, strengthen thinking skills, and build lasting academic confidence.
      </motion.p>

      <div className="flex gap-4 mt-8 flex-wrap justify-center">

        <button className="bg-[#10B981] hover:bg-green-600 px-6 py-3 rounded-md text-white transition">
          Start Your Learning Journey
        </button>

        <button className="border border-white px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition">
          Explore Programs
        </button>

      </div>

      <p className="mt-6 text-sm text-gray-400">
        Personalized. Visual-first. Skill-driven.
      </p>

    </section>
  );
};

export default Hero;
