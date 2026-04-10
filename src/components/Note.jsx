import React from "react";
import { Trash2, Palette, Pin } from "lucide-react";

function Note({ id, title, content, color, pinned, onDelete, onColorChange, onPin }) {
  const colors = [
    "#ffffff", "#f28b82", "#fbbc04", "#fff475", 
    "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa"
  ];

  return (
    <div 
      style={{ backgroundColor: color || "#ffffff" }}
      className="break-inside-avoid p-4 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 group relative"
    >
      <button 
        onClick={() => onPin(id)}
        className={`absolute top-2 right-2 p-1.5 rounded-full transition-all duration-200 
          ${pinned 
            ? "opacity-100 text-yellow-600 bg-black/5 dark:bg-white/10" 
            : "opacity-0 group-hover:opacity-100 text-gray-400 hover:bg-black/5 dark:hover:bg-white/10"
          }`}
        title={pinned ? "Unpin note" : "Pin note"}
      >
        <Pin size={18} fill={pinned ? "currentColor" : "none"} className={pinned ? "rotate-45" : ""} />
      </button>

      <h1 className="text-lg font-bold mb-2 text-gray-800 dark:text-slate-100 pr-8">
        {title}
      </h1>

      <p className="text-gray-600 dark:text-slate-300 whitespace-pre-wrap mb-10 leading-relaxed">
        {content}
      </p>
      
      <div className="absolute bottom-2 right-2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="relative group/palette">
          <div className="p-1 cursor-pointer rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <Palette size={18} className="text-gray-500 dark:text-gray-400" />
          </div>
          
          <div className="absolute bottom-full right-0 mb-1 hidden group-hover/palette:block z-10 pb-3">
            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 p-2 rounded-lg shadow-xl flex gap-1.5">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => onColorChange(id, c)}
                  className="w-6 h-6 rounded-full border border-gray-300 dark:border-gray-600 cursor-pointer hover:scale-125 transition-transform"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
        </div>

        <button 
          onClick={() => onDelete(id)} 
          className="p-1 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        >
          <Trash2 size={18} className="text-gray-500 dark:text-gray-400 hover:text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default Note;