"use client"
import { useTheme } from "@/context/ThemeContext";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded border dark:text-yellow-500 border-gray-300 dark:border-gray-600"
        >
            {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>
    );
};
