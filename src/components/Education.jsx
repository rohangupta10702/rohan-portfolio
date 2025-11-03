// src/components/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    title: "B.Tech in Computer Science Engineering",
    institute: "Jain University, Bangalore",
    score: "CGPA: 7.6",
    year: "2022 – Present",
    icon: <FaUniversity />,
  },
  {
    title: "12th (CBSE)",
    institute: "DAV School, Biratnagar",
    score: "Percentage: 76%",
    year: "2019 – 2021",
    icon: <FaGraduationCap />,
  },
  {
    title: "10th (CBSE)",
    institute: "DAV School, Biratnagar",
    score: "Percentage: 81`%",
    year: "2018 – 2019",
    icon: <FaGraduationCap />,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="w-full px-6 py-16 bg-gradient-to-b from-[#071021] via-[#06102a] to-[#03040a] text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">Education</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Academic foundation that shaped my thinking — a mix of theory and hands-on learning.
          </p>
        </motion.div>

        {/* Horizontal cards */}
        <div className="w-full overflow-x-scroll scrollbar-hide">
  <div className="flex gap-6 px-4 min-w-max">
    {educationData.map((edu, i) => {
      const fromLeft = i % 2 === 0;
      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: i * 0.12 }}
          className="snap-center w-[300px] flex-shrink-0 bg-gradient-to-br from-[#07121a] to-[#0a0a12] border border-[#122033] rounded-2xl p-6 shadow-[0_8px_30px_rgba(2,6,23,0.6)] hover:shadow-[0_14px_40px_rgba(2,6,23,0.75)] transition-shadow duration-300"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0b1620] border border-[#173044] text-cyan-300 text-xl">
              {edu.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{edu.title}</h3>
              <div className="text-sm text-gray-400">{edu.institute}</div>
            </div>
          </div>

          <div className="text-sm text-gray-300 mb-4 leading-relaxed">
            <strong className="text-gray-200">{edu.year}</strong>
            <div className="mt-2">{edu.score}</div>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="text-xs px-3 py-1 bg-[#081218] border border-[#13253a] rounded-full text-gray-300">
              {edu.score}
            </span>
            <span className="text-xs px-3 py-1 bg-[#081218] border border-[#13253a] rounded-full text-gray-300">
              {edu.year}
            </span>
          </div>
        </motion.div>
      );
    })}
  </div>
</div>

        {/* subtle hint line under cards */}
        <div className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-[#163047]/30 to-transparent" />
      </div>
    </section>
  );
}
