const FormField = ({ icon, placeholder, type = "text" }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm text-[var(--muted)]">
        {placeholder}
      </label>
      <div className="flex items-center gap-3 rounded-lg
                      border border-white/15 px-4 py-3
                      focus-within:border-[var(--primary)]
                      transition">
        <span className="text-[var(--muted)]">
          {icon}
        </span>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-sm"
        />
      </div>
    </div>
  );
};

export default FormField