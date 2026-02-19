"use client";

import { motion } from "framer-motion";

const WhoItsFor = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white text-black text-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Designed for Serious Learners
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">

        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-[#10B981]">
            For K–12 Students
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>Concept mastery across core subjects</li>
            <li>Curriculum-aligned learning paths</li>
            <li>Visual reinforcement of classroom lessons</li>
            <li>Confidence-building exercises</li>
            <li>Parent insight dashboard</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-[#10B981]">
            For Undergraduate Students
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>Deep curriculum reinforcement</li>
            <li>Foundational strengthening modules</li>
            <li>Applied problem-solving labs</li>
            <li>Academic skill acceleration</li>
            <li>Concept-to-application bridging</li>
          </ul>
        </div>

      </div>

    </section>
  );
};

export default WhoItsFor;
