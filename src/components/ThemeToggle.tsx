import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

type Props = {
  className?: string;
};

const ThemeToggle: React.FC<Props> = ({ className }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const base =
    "rounded-full border border-zinc-700 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-amber-300 hover:text-amber-300";
  return (
    <button aria-label="Toggle theme" onClick={toggleTheme} className={className ?? base}>
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
