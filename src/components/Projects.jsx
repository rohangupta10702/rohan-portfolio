// src/components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import WaveDivider from "./WaveDivider";

const projects = [
  
  {
    title: "SubSplit",
    category: "Full Stack",
    description:
      "A web platform to share and split subscriptions securely. Built with Node.js, Express, and MongoDB with dynamic pricing logic.",
    tech: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JS"],
    
  },
  {
    title: "Online Tuition Website",
    category: "Frontend",
    description:
      "A functional educational website designed during internship to enable online tutoring with smooth navigation and responsive design.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    title: "Spotify Clone",
    category: "Frontend",
    description:
      "A clean, static clone of Spotify’s UI built using HTML, CSS, and JS with focus on responsive design and layout precision.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <>
    <WaveDivider flip={true} from="#060606" to="#030303" />
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-20 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]"
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.h2>
      <motion.p
        className="text-gray-400 mb-14 text-center text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        A blend of design sense and backend logic — built piece by piece.
      </motion.p>

      {/* Filter Tabs */}
      <div className="flex gap-6 mb-12 flex-wrap justify-center">
        {["All", "Frontend", "Full Stack"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border text-sm transition-all duration-300 ${
              filter === cat
                ? "bg-[#0f1b1b] border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(0,255,255,0.1)]"
                : "border-gray-700 text-gray-400 hover:text-white hover:border-cyan-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Divider Line */}
      <div className="w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-gray-700/60 to-transparent mb-12"></div>

      {/* Project Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl"
      >
        <AnimatePresence>
          {filtered.map((proj, i) => (
            <motion.div
              key={proj.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group bg-[#0c0c0c]/70 border border-gray-800 rounded-2xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.08)] transition-all duration-300"
            >
              {/* subtle partition glow */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-500/40 via-fuchsia-400/30 to-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">
                {proj.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, ti) => (
                  <span
                    key={ti}
                    className="text-xs bg-[#111] border border-gray-700 px-2 py-1 rounded-md text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {(proj.github || proj.live) && (
                <div className="flex gap-3">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-md bg-[#101010] border border-gray-700 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-md bg-cyan-600/20 border border-cyan-500 hover:bg-cyan-600/30 hover:text-cyan-300 transition-all duration-300"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom divider */}
      <div className="w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-gray-700/60 to-transparent mt-16"></div>
    </section>
    </>
  );
}
