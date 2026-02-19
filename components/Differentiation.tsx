"use client";

import { motion } from "framer-motion";

const Differentiation = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white text-black text-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10"
      >
        What Makes Setu AI Different
      </motion.h2>

      <div className="space-y-4 text-lg max-w-3xl mx-auto text-gray-700">
        <p>Most platforms optimize for speed. We optimize for depth.</p>
        <p>Most focus on content volume. We focus on conceptual clarity.</p>
        <p>Most chase exam outcomes. We build intellectual confidence.</p>
      </div>

      <div className="mt-10 space-y-2 font-semibold">
        <p className="text-[#10B981]">• Concept-first learning</p>
        <p className="text-[#10B981]">• Adaptive progression</p>
        <p className="text-[#10B981]">• Skill-based reinforcement</p>
      </div>

    </section>
  );
};

export default Differentiation;
