import { useEffect, useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import ModeToggle from "../toggle/ModeToggle";
import NavLinkButton from "../UI/NavLinkButton";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition
        ${
          scrolled
            ? "backdrop-blur-md bg-black/70 border-b border-white/10"
            : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <span className="text-lg font-semibold tracking-wide">
          vishal<span className="text-[var(--primary)]">.dev</span>
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavLinkButton href="#projects">Projects</NavLinkButton>
          <NavLinkButton href="#skills">Skills</NavLinkButton>
          <NavLinkButton href="#architecture">Architecture</NavLinkButton>
          <NavLinkButton href="#contact">Contact</NavLinkButton>
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Desktop Resume (outlined) */}
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 rounded-lg border border-white/20
                       px-4 py-2 text-sm text-white
                       hover:border-[var(--primary)] hover:text-[var(--primary)]
                       transition"
          >
            <FiDownload
              size={16}
              className="transition group-hover:-translate-y-[1px]"
            />
            Resume
          </a>

          <ModeToggle />
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Resume (PRIMARY & FOCUSED) */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-lg bg-[var(--primary)]
                       px-4 py-2 text-sm font-medium text-black
                       active:scale-95 transition"
          >
            <FiDownload size={16} />
            Resume
          </a>

          {/* Mode toggle always visible */}
          <ModeToggle />

          {/* Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md border border-white/20 p-2
                       active:scale-95 transition"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (links only) */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-md">
          <div className="flex flex-col gap-4 px-6 py-6 text-sm">
            <NavLinkButton href="#projects" onClick={() => setOpen(false)}>
              Projects
            </NavLinkButton>
            <NavLinkButton href="#skills" onClick={() => setOpen(false)}>
              Skills
            </NavLinkButton>
            <NavLinkButton href="#architecture" onClick={() => setOpen(false)}>
              Architecture
            </NavLinkButton>
            <NavLinkButton href="#contact" onClick={() => setOpen(false)}>
              Contact
            </NavLinkButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
