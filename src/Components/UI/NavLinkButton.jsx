const NavLinkButton = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative w-fit text-[var(--muted)] transition
                 hover:text-white hover:-translate-y-[1px]"
    >
      {children}
    </a>
  );
};

export default NavLinkButton;
