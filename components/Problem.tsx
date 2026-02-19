"use client";

import { motion } from "framer-motion";

const Problem = () => {
  return (
    <section className="w-full section bg-white text-black">
      <div className="container text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading mb-12"
        >
          Most Students Study. Few Truly Understand.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="card text-left">
            <p className="text-gray-700">
              Memorize definitions without internalizing meaning
            </p>
          </div>

          <div className="card text-left">
            <p className="text-gray-700">
              Score well but forget weeks later
            </p>
          </div>

          <div className="card text-left">
            <p className="text-gray-700">
              Struggle to explain concepts independently
            </p>
          </div>

          <div className="card text-left">
            <p className="text-gray-700">
              Lack confidence in applying knowledge
            </p>
          </div>

        </div>

        <p className="mt-12 text-gray-600 max-w-xl mx-auto text-lg">
          The result? Surface learning. Short-term performance. Long-term gaps.
          <br /><br />
          <span className="text-[#10B981] font-semibold">
            Setu AI transforms passive memorization into active understanding.
          </span>
        </p>

      </div>
    </section>
  );
};

export default Problem;
