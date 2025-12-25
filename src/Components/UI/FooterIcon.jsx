const FooterIcon = ({ href, label, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full
                 border border-white/15 text-[var(--muted)]
                 hover:border-[var(--primary)] hover:text-white
                 transition"
    >
      {children}
    </a>
  );
};

export default FooterIcon