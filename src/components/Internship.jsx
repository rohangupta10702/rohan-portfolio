// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const experiences = [
  {
    icon: <FaLaptopCode />,
    title: "Front-End Web Developer Intern",
    company: "Pragati Infocom Pvt. Ltd.",
    period: "May 2024 – July 2024",
    description:
      "Worked on a fully functional online tuition website, implementing interactive UI with HTML, CSS, Bootstrap, and JavaScript. Collaborated in a small team, optimized page responsiveness, and learned real-world project flow and client feedback integration.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    icon: <FaCode />,
    title: "Personal Project: CodePup (AI-Powered Landing Page)",
    company: "Self Project",
    period: "Oct 2025 – Present",
    description:
      "Built an AI-themed landing page emphasizing modern UI/UX with React, Tailwind CSS, and Framer Motion. Deployed on Vercel with performance optimization, modular components, and smooth scroll animations to simulate a production-ready startup landing.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-[85vh] flex flex-col items-center justify-center text-white px-6 bg-gradient-to-b from-[#040617] via-[#050718] to-[#030303]"
    >
      <motion.h2
        className="text-5xl font-bold mb-10 text-center neon-text"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>

      <div className="relative w-full max-w-4xl pl-6 border-l-2 border-cyan-500/40 space-y-14 overflow-y-auto max-h-[70vh] pr-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative ml-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Node Icon */}
            <div className="absolute -left-[37px] flex items-center justify-center w-9 h-9 rounded-full bg-[#0a0a0a] border border-cyan-400/60 text-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.3)]">
              {exp.icon}
            </div>

            {/* Content */}
            <div className="bg-[#0b0b0b]/60 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/10 hover:border-cyan-500/40 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-cyan-300 mb-1">{exp.title}</h3>
              <p className="text-gray-400 text-sm mb-2">
                {exp.company} — <span className="text-gray-500">{exp.period}</span>
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-[#121212] border border-cyan-500/20 rounded-full text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
