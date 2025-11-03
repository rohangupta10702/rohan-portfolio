import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import profilePic from "../assets/profile.webp";
import resumeFile from "../assets/My_resume.pdf";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-[#030303] text-white px-6"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full animate-[pulse_12s_infinite] bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.04),transparent_70%)]" />
      </div>
      <div className="absolute inset-0 -z-10 blur-[80px] bg-gradient-to-br from-cyan-800/18 via-purple-800/06 to-fuchsia-900/08" />

      {/* Profile Photo */}
      <motion.img
        src={profilePic}
        loading="lazy"
        decoding="async"
        alt="Rohan Gupta"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-cyan-400/40 shadow-neon mb-6 object-cover object-center"

        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Tagline */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="uppercase tracking-[4px] text-cyan-400/80 text-sm sm:text-base mb-4 select-none"
      >
        Frontend Developer | Problem Solver | Dream Builder
      </motion.span>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-4xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-fuchsia-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.15)] text-center leading-[1.15] pb-2 select-none"
      >
        Rohan Gupta
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-5 text-center max-w-2xl text-gray-300 font-light text-base sm:text-lg leading-relaxed"
      >
        A Computer Science Engineer passionate about crafting responsive, user-focused web experiences.  
        Merging design intuition with data structure logic to build meaningful, scalable, and elegant solutions.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-8 flex flex-wrap gap-5 justify-center"
      >
        <a
          href="#projects"
          className="px-7 py-3 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all duration-300 hover:scale-105"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-7 py-3 rounded-xl bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40 hover:bg-fuchsia-500/30 transition-all duration-300 hover:scale-105"
        >
          Contact Me
        </a>
        <a
          href={resumeFile} 
          download
          className="px-7 py-3 rounded-xl bg-green-500/20 text-green-300 border border-green-500/40 hover:bg-green-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
        >
          <FaDownload /> Resume
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="mt-10 flex gap-8 text-2xl"
      >
        <a
          href="https://github.com/rohangupta10702"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 transition-transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rohangupta10702/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-fuchsia-400 transition-transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:rohangupta10702@gmail.com"
          className="hover:text-purple-400 transition-transform hover:scale-110"
        >
          <FaEnvelope />
        </a>
      </motion.div>

      {/* Floating Glow Animation */}
      <motion.div
        className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/06 blur-[80px] pointer-events-none -z-20"
         aria-hidden="true"
      />
    </section>
  );
}
