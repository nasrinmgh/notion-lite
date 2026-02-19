import { useState } from "react";
import { Paperclip, User, Tag, Calendar } from "lucide-react";

export default function TaskCard({ onClose, setTaskData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleCreate = () => {
    if (!description.trim()) {
      return; // stop creation
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
    };
    setTaskData(newTask);
    onClose();
  };

  return (
    <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6 text-slate-300">
      {/* Title */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full bg-transparent text-lg placeholder-slate-500 outline-none mb-4"
      />

      {/* Description */}
      <textarea
        placeholder="Write a description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        className="w-full bg-transparent placeholder-slate-500 outline-none resize-none mb-6"
      />

      {/* Action buttons */}
      <div className="flex gap-3 mb-6">
        <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full text-sm transition">
          <User size={16} />
          Assign
        </button>

        <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full text-sm transition">
          <Tag size={16} />
          Label
        </button>

        <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full text-sm transition">
          <Calendar size={16} />
          Due date
        </button>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-4">
        <button className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition text-sm">
          <Paperclip size={16} />
          Attach a file
        </button>

        <button
          onClick={() => handleCreate()}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg font-medium transition"
        >
          Create
        </button>
      </div>
    </div>
  );
}
