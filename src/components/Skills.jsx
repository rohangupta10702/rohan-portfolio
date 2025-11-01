// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import WaveDivider from "./WaveDivider";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    items: [
      { icon: <FaHtml5 />, name: "HTML", pct: 95 },
      { icon: <FaCss3Alt />, name: "CSS", pct: 95 },
      { icon: <FaJsSquare />, name: "JavaScript", pct: 80 },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", pct: 85 },
      { icon: <FaReact />, name: "React (learning)", pct: 75 },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      { icon: <FaJava />, name: "Java", pct: 80 },
      { icon: <FaPython />, name: "Python", pct: 70 },
      { icon: <FaJsSquare />, name: "JavaScript", pct: 80 },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { icon: <FaNodeJs />, name: "Node.js", pct: 77 },
      { icon: <SiExpress />, name: "Express.js (Intermediate)", pct: 70 },
      { icon: <SiMongodb />, name: "MongoDB", pct: 80 },
      { icon: <FaDatabase />, name: "MySQL", pct: 80 },
    ],
  },
  {
    title: "DSA",
    items: [
      { icon: "🧩", name: "Sorting", pct: 85 },
      { icon: "🔁", name: "Recursion", pct: 72 },
      { icon: "🔍", name: "Searching", pct: 80 },
      { icon: "🕸️", name: "Graphs", pct: 65 },
      { icon: "⚙️", name: "Dynamic Programming", pct: 60 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-[85vh] flex flex-col items-center justify-center text-white px-6 py-16 bg-gradient-to-b from-[#030303] via-[#040617] to-[#030303]"
    >
      <motion.h2
        className="text-5xl font-bold mb-10 text-center neon-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        Skills
      </motion.h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {categories.map((cat, ci) => (
          <motion.div
            key={ci}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: ci * 0.15 }}
            className="p-6 rounded-2xl bg-[#0a0a0a]/50 border border-cyan-400/5 backdrop-blur-[2px]"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-6 relative inline-block">
              {cat.title}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-cyan-300 to-fuchsia-400 opacity-60" />
            </h3>

            <div className="space-y-5">
              {cat.items.map((skill, si) => (
                <div key={si} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl text-cyan-300 drop-shadow-[0_0_3px_rgba(0,255,255,0.1)]">
                        {skill.icon}
                      </div>
                      <div className="text-sm sm:text-base text-gray-200">
                        {skill.name}
                      </div>
                    </div>
                    <div className="text-sm text-cyan-200 font-medium ml-4">
                      {skill.pct}%
                    </div>
                  </div>

                  <div className="bg-[#0b0b0b] border border-[#111] h-3 rounded-full overflow-hidden w-full">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-300 shadow-[0_0_6px_rgba(0,255,255,0.06)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    />

                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tools & OS section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl mt-14 p-6 rounded-2xl bg-[#0a0a0a]/50 border border-cyan-400/5 backdrop-blur-[2px]"
      >
        <h3 className="text-2xl font-semibold text-cyan-300 mb-6 relative inline-block">
          Tools & OS
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-cyan-300 to-fuchsia-400 opacity-60" />
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-200 text-center">
          {["Git", "VS Code", "npm", "Chrome DevTools", "GitHub", "AI Tools", "Windows"].map(
            (tool, i) => (
              <div
                key={i}
                className="p-3 bg-[#0d0d0d]/60 rounded-xl border border-cyan-400/10 hover:border-fuchsia-400/20 transition-all duration-300"
              >
                {tool}
              </div>
            )
          )}
        </div>
      </motion.div>
      <div className="w-full mt-20">
        <WaveDivider flip={false} from="#030303" to="#060606" />
      </div>
    </section>
  );
}
