import React, { useState } from "react";
import { Plus } from "lucide-react";

function CreateArea({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({ title: "", content: "", color: "#ffffff" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  function submitNote(event) {
    if (note.title || note.content) {
      onAdd(note);
      setNote({ title: "", content: "", color: "#ffffff" });
      setExpanded(false);
    }
    event.preventDefault();
  }

  return (
    <form className="relative max-w-xl mx-auto mt-8 mb-12 p-4 bg-white shadow-md rounded-lg border border-gray-200">
      {isExpanded && (
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          className="w-full mb-3 text-lg font-medium outline-none"
        />
      )}
      <textarea
        name="content"
        onClick={() => setExpanded(true)}
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows={isExpanded ? 3 : 1}
        className="w-full resize-none outline-none text-gray-700"
      />
      {isExpanded && (
        <button
          onClick={submitNote}
          className="absolute -bottom-5 right-4 bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-full shadow-lg transition-transform active:scale-90"
        >
          <Plus size={24} />
        </button>
      )}
    </form>
  );
}

export default CreateArea;