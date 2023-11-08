import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function ModeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isCurrentlyDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isCurrentlyDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", darkMode);
  };

  return (
    <span onClick={toggleDarkMode} className="cursor-pointer">
      {darkMode ? (
        <MoonIcon className="h-6 w-6 text-gray-900 dark:text-white" />
      ) : (
        <SunIcon className="h-6 w-6 text-gray-900 dark:text-white" />
      )}
    </span>
  );
}

export default ModeSwitcher;