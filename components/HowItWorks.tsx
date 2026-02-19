"use client";

import { motion } from "framer-motion";

const steps = [
  "Diagnostic Assessment",
  "Personalized Learning Path",
  "Visual Concept Modules",
  "Explain-in-Your-Own-Words Validation",
  "Skill Reinforcement"
];

const HowItWorks = () => {
  return (
    <section className="w-full section bg-[#0B0F14] text-white relative overflow-hidden">

      {/* Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/10 to-transparent pointer-events-none" />

      <div className="container text-center relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading mb-12"
        >
          A Structured Learning Loop
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-6 mt-10">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="card border border-gray-700 text-center"
            >
              <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#10B981] text-white font-bold">
                {index + 1}
              </div>

              <p className="text-gray-300 text-sm">
                {step}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
