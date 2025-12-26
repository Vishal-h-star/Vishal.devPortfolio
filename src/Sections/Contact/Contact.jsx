import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import FormField from "../../Components/UI/FormField";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-8  md:px-16  xl:px-8 py-20"
    >
      {/* Header – LEFT ALIGNED */}
      <div className="mb-16 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-medium">
          Contact
        </h2>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Reach out for opportunities, collaborations, or discussions.
        </p>
      </div>

      {/* Content */}
      <div className="grid gap-16 md:grid-cols-2 items-start">
        
        {/* LEFT – Direct Contact Info */}
        <div className="space-y-8">
          <p className="text-xl font-medium">
            Let’s talk.
          </p>

          <p className="text-[var(--muted)] max-w-md">
            If you’re interested in working together or want to discuss an idea,
            you can contact me directly or use the form.
          </p>

          {/* Contact methods */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center
                               rounded-full border border-white/15">
                <FiMail />
              </span>
              <span 
              className="text-[var(--muted)]">
               <a href="mailto:vishalchauhan163067@gmail.com"> vishalchauhan163067@gmail.com</a>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center
                               rounded-full border border-white/15">
                <FiPhone />
              </span>
              <span className="text-[var(--muted)]">
                +91 8368110019
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT – Form (UI ONLY) */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-[var(--surface)]
                     p-8 space-y-6"
        >
          {/* Name */}
          <FormField
            icon={<FiUser />}
            placeholder="Your name"
          />

          {/* Email */}
          <FormField
            icon={<FiMail />}
            placeholder="Email address"
            type="email"
          />

          {/* Phone */}
          <FormField
            icon={<FiPhone />}
            placeholder="Phone number"
            type="tel"
          />

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm text-[var(--muted)]">
              Message
            </label>
            <div className="flex gap-3 rounded-lg
                            border border-white/15 px-4 py-3
                            focus-within:border-[var(--primary)]
                            transition">
              <FiMessageSquare className="mt-1 text-[var(--muted)]" />
              <textarea
                rows="4"
                placeholder="Tell me about your idea…"
                className="w-full resize-none bg-transparent
                           outline-none text-sm"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 flex w-full items-center justify-center
                       rounded-lg bg-[var(--primary)]
                       px-4 py-3 text-sm font-medium text-black
                       hover:opacity-90 active:scale-95 transition"
          >
            Send message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
