"use client";

import { motion } from "framer-motion";

const WhoItsFor = () => {
  return (
    <section className="w-full section bg-white text-black relative overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/5 to-transparent pointer-events-none" />

      <div className="container text-center relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading mb-12"
        >
          Designed for Serious Learners
        </motion.h2>

        {/* SaaS Segmentation Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {/* K-12 Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition text-left"
          >
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
          </motion.div>

          {/* UG Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition text-left"
          >
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
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhoItsFor;
