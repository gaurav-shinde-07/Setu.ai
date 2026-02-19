"use client";

import { motion } from "framer-motion";

const FeatureGrid = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-[#0B0F14] text-white text-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Platform Capabilities
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">

        <div className="p-6 bg-[#111827] rounded-lg">
          <h3 className="text-[#10B981] font-semibold mb-2">Visual Learning Engine</h3>
          <p className="text-gray-300">Concepts explained through structured visual frameworks.</p>
        </div>

        <div className="p-6 bg-[#111827] rounded-lg">
          <h3 className="text-[#10B981] font-semibold mb-2">Adaptive Intelligence</h3>
          <p className="text-gray-300">Real-time learning path adjustment.</p>
        </div>

        <div className="p-6 bg-[#111827] rounded-lg">
          <h3 className="text-[#10B981] font-semibold mb-2">Skill Accelerator</h3>
          <p className="text-gray-300">Critical thinking and analytical reasoning modules.</p>
        </div>

        <div className="p-6 bg-[#111827] rounded-lg">
          <h3 className="text-[#10B981] font-semibold mb-2">Progress Intelligence</h3>
          <p className="text-gray-300">Performance insights for learners and parents.</p>
        </div>

        <div className="p-6 bg-[#111827] rounded-lg">
          <h3 className="text-[#10B981] font-semibold mb-2">Curriculum Alignment</h3>
          <p className="text-gray-300">Structured to reinforce school and university programs.</p>
        </div>

        <div className="p-6 bg-[#111827] rounded-lg">
          <h3 className="text-[#10B981] font-semibold mb-2">Academic Confidence Tracking</h3>
          <p className="text-gray-300">Measure clarity, not just correctness.</p>
        </div>

      </div>

    </section>
  );
};

export default FeatureGrid;
