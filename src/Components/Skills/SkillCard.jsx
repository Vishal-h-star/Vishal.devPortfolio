import { motion, AnimatePresence } from "framer-motion";

const SkillCard = ({ title, icon, skills, mode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-2xl border border-white/10 p-6"
    >
      {/* Card Header */}
      <div className="mb-6 flex items-center gap-3">
        <span className="text-[var(--primary)] text-xl">{icon}</span>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>

      {/* Recruiter Mode */}
      <AnimatePresence mode="wait">
        {mode === "recruiter" ? (
          <motion.div
            key="recruiter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="rounded-full border border-white/15 px-3 py-1 text-sm text-[var(--muted)]"
              >
                {skill.name}
              </span>
            ))}
          </motion.div>
        ) : (
          /* Developer Mode */
          <motion.div
            key="developer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-4 text-sm"
          >
            {skills.map((skill) => (
              <div key={skill.name}>
                <p className="font-medium text-white">{skill.name}</p>
                <p className="text-[var(--muted)]">{skill.desc}</p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillCard;
