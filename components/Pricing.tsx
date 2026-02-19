"use client";

import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-[#0B0F14] text-white text-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Flexible Plans for Focused Growth
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div className="p-6 bg-[#111827] rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Monthly Plan</h3>
          <p className="text-gray-300 mb-6">Ideal for short-term learning needs</p>
          <button className="bg-[#10B981] px-5 py-2 rounded-md">
            View Plan
          </button>
        </div>

        <div className="p-6 bg-[#111827] rounded-lg border border-[#10B981]">
          <h3 className="text-xl font-semibold mb-4">Annual Plan</h3>
          <p className="text-gray-300 mb-6">Best value for continuous progress</p>
          <button className="bg-[#10B981] px-5 py-2 rounded-md">
            View Plan
          </button>
        </div>

        <div className="p-6 bg-[#111827] rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Institutional Plan</h3>
          <p className="text-gray-300 mb-6">For schools and colleges</p>
          <button className="bg-[#10B981] px-5 py-2 rounded-md">
            Contact Us
          </button>
        </div>

      </div>

    </section>
  );
};

export default Pricing;
