"use client";

import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-[#0B0F14] text-white text-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10"
      >
        Built for Deep Academic Mastery
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">

        <p>✔ Break down complex concepts into visual models</p>
        <p>✔ Strengthen foundational understanding</p>
        <p>✔ Develop analytical and problem-solving skills</p>
        <p>✔ Apply curriculum knowledge with clarity</p>
        <p>✔ Build independent explanation ability</p>

      </div>

      <p className="mt-10 text-gray-300 max-w-xl mx-auto">
        We don’t just prepare students for exams. <br />
        <span className="text-[#10B981] font-semibold">
          We prepare them to think.
        </span>
      </p>

    </section>
  );
};

export default WhatWeDo;
