import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-black border-t border-cyan-400/30 shadow-md shadow-cyan-500/18"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 py-12 text-gray-400">
        {/* Column 1 - About */}
        <div>
          <a href="#home">
          <h2 className="text-neon font-semibold text-xl mb-3">
            Rohan<span className="text-white">.</span>
          </h2>
          </a>
          <p className="text-sm leading-relaxed text-gray-400/90">
            Passionate about building immersive web experiences that balance
            design and logic. Always exploring, always improving.
          </p>
          <div className="flex gap-5 mt-4 text-xl">
            <a
              href="mailto:rohangupta@gmail.com"
              className="hover:text-neon transition-all"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/rohangupta10702"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rohangupta10702/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon transition-all"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-neon font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Education",
              "Contact",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-neon transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Location / Quote */}
        <div>
          <h3 className="text-neon font-semibold text-lg mb-3">Let’s Connect</h3>
          <p className="flex items-center gap-2 text-sm text-gray-400/90 mb-3">
            <FaMapMarkerAlt className="text-neon" /> Bangalore, India
          </p>
          <p className="text-sm italic text-gray-500/80">
            “Code with intent. Build with curiosity.”
          </p>
          <div className="flex items-center gap-2 mt-4 text-gray-400 text-xs">
            <FaCode className="text-neon" /> Built with React & Tailwind
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500 tracking-wide">
        © {new Date().getFullYear()} Rohan | Crafted with discipline & caffeine.
      </div>
      <a href="#home" class="back-to-top">
  ↑
</a>

    </motion.footer>
  );
};

export default Footer;
