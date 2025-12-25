import { useMode } from "../../Context/ModeContext";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ project }) => {
  const { mode } = useMode();

  const isInProgress = project.status === "in-progress";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5 }}
      className={`rounded-2xl border p-6 transition
        ${
          isInProgress
            ? "border-white/10 opacity-80"
            : "border-white/10 hover:border-white/20"
        }`}
    >
      {/* 1️⃣ Header */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-medium leading-snug">{project.title}</h3>

        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium
            ${
              isInProgress
                ? "border border-white/20 text-[var(--muted)]"
                : "bg-[var(--primary)] text-black"
            }`}
        >
          {project.label}
        </span>
      </div>

      {/* 2️⃣ Content (MODE-BASED) */}
      <AnimatePresence mode="wait">
        {mode === "recruiter" ? (
          <motion.p
            key="recruiter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4 text-[var(--muted)] leading-relaxed"
          >
            {project.desc}
          </motion.p>
        ) : (
          <motion.div
            key="developer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4 space-y-3 text-sm text-[var(--muted)]"
          >
            <p>
              <span className="text-white font-medium">Problem:</span>
              {project.problem}
            </p>
            <p>
              <span className="text-white font-medium">Approach:</span>
              {project.approach}
            </p>
            <p>
              <span className="text-white font-medium">Learnings:</span>
              {project.learnings}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3️⃣ Tech stack */}
      <div className="mt-5 text-sm text-[var(--muted)]">{project.tech}</div>

      {/* 4️⃣ Actions */}
      <div className="mt-6 flex items-center gap-3">
        {!isInProgress ? (
          <>
            {project.live && (
              <button
                className="flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm
                           text-[var(--muted)] hover:border-white/30 hover:text-white transition"
              >
                <FiExternalLink size={16} />
                Live
              </button>
            )}

            {project.code && (
              <button
                className="flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm
                           text-[var(--muted)] hover:border-white/30 hover:text-white transition"
              >
                <FiGithub size={16} />
                Code
              </button>
            )}
          </>
        ) : (
          <span className="text-[var(--muted)] italic">Currently building</span>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
