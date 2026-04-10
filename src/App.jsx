import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("keep-notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("keep-notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => setNotes((prev) => [{ ...newNote, pinned: false }, ...prev]);
  const deleteNote = (id) => setNotes((prev) => prev.filter((_, index) => index !== id));
  const updateColor = (id, newColor) => {
    setNotes((prev) => prev.map((note, index) => index === id ? { ...note, color: newColor } : note));
  };

  const togglePin = (id) => {
    setNotes((prev) =>
      prev.map((note, index) =>
        index === id ? { ...note, pinned: !note.pinned } : note
      )
    );
  };

  const pinnedNotes = notes.filter((note) => note.pinned);
  const otherNotes = notes.filter((note) => !note.pinned);

  const renderNoteGrid = (notesToRender) => (
    <div className="p-6 columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
      {notesToRender.map((note) => {
        const originalIndex = notes.indexOf(note);
        return (
          <Note
            key={originalIndex}
            id={originalIndex}
            {...note}
            onDelete={deleteNote}
            onColorChange={updateColor}
            onPin={togglePin}
          />
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <CreateArea onAdd={addNote} />
      
      <main className="max-w-7xl mx-auto">
        {pinnedNotes.length > 0 && (
          <div className="mb-8">
            <h2 className="px-8 text-xs font-bold text-gray-500 uppercase tracking-widest dark:text-gray-400 mb-2">
              Pinned
            </h2>
            {renderNoteGrid(pinnedNotes)}
            <h2 className="px-8 mt-8 text-xs font-bold text-gray-500 uppercase tracking-widest dark:text-gray-400 mb-2">
              Others
            </h2>
          </div>
        )}
        {renderNoteGrid(otherNotes)}
      </main>
    </div>
  );
}

export default App;