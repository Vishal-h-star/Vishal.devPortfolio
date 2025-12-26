import { useMode } from "../../Context/ModeContext";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  const { mode } = useMode();

  return (
    <motion.section
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.6, ease: "easeOut" }}
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      id="home"
      className="flex min-h-[80vh]  flex-col justify-center mx-auto px-8  md:px-16  xl:px-8 max-w-6xl "
    >
      <h1 className="text-4xl md:text-6xl font-medium leading-tight">
        I design and build <br />
        <span className="text-[var(--primary)]">
          thoughtful web interfaces.
        </span>
      </h1>

      <p className="mt-6 text-lg text-[var(--muted)] max-w-xl">
        {mode === "recruiter"
          ? "Frontend-focused developer crafting clean, scalable, and user-friendly web experiences."
          : "I focus on component-driven UI, state management, accessibility, and performance-aware design."}
      </p>

      <div className="mt-10 flex gap-4">
        <motion.button
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
          className="rounded-lg bg-[var(--primary)] px-6 py-3 text-black font-medium hover:opacity-90 transition"
        >
           <a href="#projects">View Work</a>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
          className="rounded-lg border border-white/15 px-6 py-3 hover:border-[var(--primary)] transition"
        >
          Contact
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;
