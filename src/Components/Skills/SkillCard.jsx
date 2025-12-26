import { motion, AnimatePresence } from "framer-motion";

const SkillCard = ({ title, icon, skills, mode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="
        rounded-2xl border border-white/10
        bg-[var(--surface)]
        p-8
        transition
        hover:-translate-y-1
      "
    >
      {/* Card Header */}
      <div className="mb-8 flex items-center gap-3">
        <span className="text-[var(--primary)] text-xl">
          {icon}
        </span>
        <h3 className="text-xl font-medium tracking-tight">
          {title}
        </h3>
      </div>

      <AnimatePresence mode="wait">
        {/* ================= Recruiter Mode ================= */}
        {mode === "recruiter" ? (
          <motion.div
            key="recruiter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-7"
          >
            {skills.map((skill) => (
              <div key={skill.title}>
                {/* Capability title */}
                <p className="mb-3 text-sm font-medium text-white/90">
                  {skill.title}
                </p>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {(skill.recruiter || []).map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border border-white/10
                        bg-white/5
                        px-3 py-1
                        text-xs text-[var(--muted)]
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          /* ================= Developer Mode ================= */
          <motion.div
            key="developer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {skills.map((skill) => (
              <div key={skill.title}>
                <p className="text-sm font-medium text-white">
                  {skill.title}
                </p>

                <p className="
                  mt-3
                  max-w-[52ch]
                  text-sm text-[var(--muted)]
                  whitespace-pre-line
                  leading-relaxed
                ">
                  {skill.desc}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillCard;
