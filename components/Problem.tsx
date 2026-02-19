"use client";

import { motion } from "framer-motion";

const Problem = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white text-black text-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10"
      >
        Most Students Study. Few Truly Understand.
      </motion.h2>

      <ul className="space-y-4 text-lg text-gray-700 max-w-2xl mx-auto">
        <li>Memorize definitions without internalizing meaning</li>
        <li>Score well but forget weeks later</li>
        <li>Struggle to explain concepts independently</li>
        <li>Lack confidence in applying knowledge</li>
      </ul>

      <p className="mt-10 text-gray-600 max-w-xl mx-auto">
        The result? Surface learning. Short-term performance. Long-term gaps.
        <br /><br />
        <span className="text-[#10B981] font-semibold">
          Setu AI transforms passive memorization into active understanding.
        </span>
      </p>

    </section>
  );
};

export default Problem;
