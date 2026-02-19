"use client";

import { motion } from "framer-motion";

const features = [
  "Break down complex concepts into visual models",
  "Strengthen foundational understanding",
  "Develop analytical and problem-solving skills",
  "Apply curriculum knowledge with clarity",
  "Build independent explanation ability"
];

const WhatWeDo = () => {
  return (
    <section className="w-full section bg-[#0B0F14] relative overflow-hidden">
      
      {/* Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/10 to-transparent pointer-events-none" />

      <div className="container text-center relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading text-white mb-6"
        >
          Built for Deep Academic Mastery
        </motion.h2>

        <p className="subheading mb-12">
          Setu AI helps learners transform passive study habits into active conceptual understanding through adaptive visual learning systems.
        </p>

        {/* SaaS Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="card backdrop-blur-md border border-gray-700"
            >
              <p className="text-gray-300">
                {item}
              </p>
            </motion.div>
          ))}

        </div>

        <p className="mt-12 text-gray-400 text-lg max-w-xl mx-auto">
          We don’t just prepare students for exams.
          <br />
          <span className="text-[#10B981] font-semibold">
            We prepare them to think.
          </span>
        </p>

      </div>
    </section>
  );
};

export default WhatWeDo;
