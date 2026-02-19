"use client";

import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="w-full py-24 px-6 md:px-20 bg-white text-black text-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Build Understanding That Lasts.
      </motion.h2>

      <p className="text-gray-600 mb-8">
        Move beyond repetition. Start learning with clarity.
      </p>

      <button className="bg-[#10B981] hover:bg-green-600 px-6 py-3 rounded-md text-white transition">
        Start Free Trial
      </button>

    </section>
  );
};

export default FinalCTA;
