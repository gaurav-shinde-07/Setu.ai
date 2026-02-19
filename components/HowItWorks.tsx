"use client";

import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-[#0B0F14] text-white text-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        A Structured Learning Loop
      </motion.h2>

      <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">

        <div className="p-4">
          <h3 className="text-[#10B981] font-semibold mb-2">Step 1</h3>
          <p>Diagnostic Assessment</p>
        </div>

        <div className="p-4">
          <h3 className="text-[#10B981] font-semibold mb-2">Step 2</h3>
          <p>Personalized Learning Path</p>
        </div>

        <div className="p-4">
          <h3 className="text-[#10B981] font-semibold mb-2">Step 3</h3>
          <p>Visual Concept Modules</p>
        </div>

        <div className="p-4">
          <h3 className="text-[#10B981] font-semibold mb-2">Step 4</h3>
          <p>Explain-in-Your-Own-Words Validation</p>
        </div>

        <div className="p-4">
          <h3 className="text-[#10B981] font-semibold mb-2">Step 5</h3>
          <p>Skill Reinforcement</p>
        </div>

      </div>

    </section>
  );
};

export default HowItWorks;
