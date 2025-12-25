import { useMode } from "../../Context/ModeContext";
import { motion } from "framer-motion";

const ModeToggle = () => {
  const { mode, toggleMode } = useMode();

  return (
    <motion.button
      whileHover={{scale:1.05}}
      whileTap={{scale:0.98}}
      onClick={toggleMode}
      className="flex items-center gap-2 rounded-full bg-[var(--surface)]  px-4 py-2 text-sm border border-white/10 hover:border-[var(--primary)] transition"
    >
      <span className={mode === "recruiter" ? "text-[var(--primary)]" : "text-[var(--muted)]"}>
        Recruiter
      </span>
      <span className="text-muted">/</span>
      <span className={mode === "developer" ? "text-primary" : "text-muted"}>
        Developer
      </span>
    </motion.button>
  );
};

export default ModeToggle;
