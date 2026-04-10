import React from "react";
import { Lightbulb, Moon, Sun } from "lucide-react";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-4 flex items-center justify-between shadow-sm transition-colors">
      <div className="flex items-center gap-3">
        <div className="bg-yellow-400 p-2 rounded-lg text-white">
          <Lightbulb size={24} />
        </div>
        <h1 className="text-2xl font-sans text-gray-600 dark:text-gray-200">Keep Clone</h1>
      </div>

      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors text-gray-600 dark:text-yellow-400"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </header>
  );
}

export default Header;