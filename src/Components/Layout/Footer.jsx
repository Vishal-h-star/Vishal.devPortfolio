import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import FooterIcon from "../UI/FooterIcon";
const Footer = () => {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-8  md:px-16  xl:px-8 py-20">
        
        {/* Main content */}
        <div className="grid gap-12 md:grid-cols-2">
          
          {/* Brand / Identity */}
          <div>
            <p className="text-xl font-medium tracking-tight">
              Vishal<span className="text-[var(--primary)]">.dev</span>
            </p>

            <p className="mt-4 max-w-md text-[var(--muted)]">
              Frontend-focused developer building clean, scalable,
              and thoughtful web interfaces with real-world usability in mind.
            </p>
          </div>

          {/* Actions */}
          <div className="flex md:justify-end">
            <div className="flex gap-4">
              <FooterIcon
                href="https://github.com/Vishal-h-star"
                label="GitHub"
              >
                <FiGithub size={18} />
              </FooterIcon>

              <FooterIcon
                href="https://www.linkedin.com/in/vishal-chauhan0001/"
                label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </FooterIcon>

              <FooterIcon
                href="mailto:vishalchauhan163067@gmail.com"
                label="Email"
              >
                <FiMail size={18} />
              </FooterIcon>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Vishal. All rights reserved.
          </span>
          <span>
            Designed & built with care.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
