import Reveal from "../Components/UI/Reveal";
import { motion } from "framer-motion";
import { builditems } from "../assets/Data/howiBuld";

//  stagger container
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {opacity: 1, y: 0,
    transition: {duration: 0.45, ease: "easeOut"},
  },
};

const HowIBuild = () => {
  return (
    <Reveal>
      <section className="max-w-5xl mx-auto px-8 py-24">
        <h2 className="text-3xl md:text-4xl font-medium">
          How I build interfaces
        </h2>

        <p className="mt-6 text-[var(--muted)] max-w-2xl">
          My approach focuses on clarity, maintainability, and building UI that
          feels intentional and scalable.
        </p>

        <motion.div
          className="mt-12 space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {builditems.map((item) => (
            <motion.div
              key={item.title}
              variants={rowVariants}
              className="relative pl-6"
            >
              {/* Accent line */}
              <span className="absolute left-0 top-1 h-full w-[2px] bg-[var(--primary)]/40" />

              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-2 text-[var(--muted)] max-w-xl">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Reveal>
  );
};

export default HowIBuild;
