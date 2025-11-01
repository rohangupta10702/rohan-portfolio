import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
        className="min-h-[85vh] flex flex-col items-center justify-center text-white px-6 bg-gradient-to-b from-[#030303] via-[#040617] to-[#030303] "
>

    
      <motion.h2
        className="text-5xl font-bold mb-8 text-center neon-text"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl text-center text-gray-300 text-lg leading-relaxed tracking-wide"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Hey there, I’m <span className="text-cyan-400 font-semibold">Rhythm Singh</span> — 
        a passionate <span className="text-purple-400">Full Stack Developer</span> who loves crafting
        sleek, high-performance web experiences.  
        My world revolves around building scalable systems, aesthetic UIs, and solving problems that 
        make the web feel alive. When I’m not coding, you’ll probably find me sketching anime, 
        training at the gym, or lost in some late-night debugging adventure.
      </motion.p>

    </section>
  );
};

export default About;
