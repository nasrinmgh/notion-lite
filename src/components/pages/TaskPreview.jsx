import React from "react";
import { Trash2, Pin } from "lucide-react";

export const TaskPreview = ({ task, onDelete }) => {
  return (
    <div className="group w-full max-w-sm bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold text-slate-800 truncate">
          {task.title?.trim() ? task.title : "Untitled"}
        </h3>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={onDelete}
            className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={18} />
          </button>
          <button className="p-1.5 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors">
            <Pin size={18} />
          </button>
        </div>
      </div>
      <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed">
        {task.description}
      </p>
    </div>
  );
};
