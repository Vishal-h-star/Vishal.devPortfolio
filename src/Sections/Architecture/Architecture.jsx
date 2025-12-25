import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "../../Context/ModeContext";
import { decisions } from "../../assets/Data/ArchitecturePillers";

const Architecture = () => {
  const [active, setActive] = useState("problem");
  const { mode } = useMode();

  const current = decisions.find((d) => d.key === active);

  return (
    <section className="relative mx-auto m-auto max-w-7xl px-8  lg:px-12 xl:px-32 py-20">
      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-medium">
          Architecture & Decisions
        </h2>
        <p className="mt-4 text-lg text-[var(--muted)]">
          How I approach problems, structure interfaces, and make decisions
          while building web applications.
        </p>
      </div>

      {/* Decision Tabs */}
      <div className="relative mb-14 flex flex-wrap gap-8">
        {decisions.map((d) => (
          <button
            key={d.key}
            onClick={() => setActive(d.key)}
            className={`relative pb-2 text-base transition
              ${
                active === d.key
                  ? "text-white"
                  : "text-[var(--muted)] hover:text-white"
              }`}
          >
            {/* Mobile / Tablet */}
            <span className="md:hidden">{d.shortTitle}</span>

            {/* Desktop */}
            <span className="hidden md:inline">{d.title}</span>

            
            {active === d.key && (
              <motion.span
                layoutId="decision-underline"
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--primary)]"
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div className="relative border-l border-white/10 pl-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key + mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <p className="mb-6 max-w-4xl text-2xl md:text-3xl font-medium leading-snug">
              {current.headline[mode]}
            </p>

            <p className="mb-8 max-w-4xl text-lg text-[var(--muted)]">
              {current.body[mode]}
            </p>

            <ul className="space-y-3 text-[var(--muted)]">
              {current.bullets[mode].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-[9px] h-[4px] w-[4px] rounded-full bg-[var(--primary)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Architecture;
