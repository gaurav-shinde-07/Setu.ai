"use client";

import { motion } from "framer-motion";

const Results = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white text-black text-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        What Changes Over Time
      </motion.h2>

      <ul className="space-y-4 text-lg text-gray-700 max-w-2xl mx-auto">
        <li>Explain concepts independently</li>
        <li>Apply knowledge confidently</li>
        <li>Ask deeper questions</li>
        <li>Reduce dependence on memorization</li>
        <li>Develop stronger academic self-belief</li>
      </ul>

      <p className="mt-10 text-[#10B981] font-semibold">
        Understanding compounds.
      </p>

    </section>
  );
};

export default Results;
