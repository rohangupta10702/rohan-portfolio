import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-darkbg/60 border-b border-neon shadow-glow"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1, textShadow: "0 0 20px #00FFFF" }}
          className="text-2xl font-semibold text-neon glow-text cursor-pointer"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Rhythm<span className="text-white">.</span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{
                scale: 1.2,
                color: "#00FFFF",
                textShadow: "0 0 20px #00FFFF",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="cursor-pointer text-gray-300 hover:text-neon duration-300"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-neon text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0a0a]/95 border-t border-neon/20 py-6 flex flex-col items-center gap-5 shadow-lg shadow-cyan-500/10"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="text-gray-200 text-lg hover:text-neon transition-all"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
