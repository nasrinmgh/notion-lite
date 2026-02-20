import React from "react";

const DeleteTaskModal = ({ isOpen, onConfirm, onCancel, taskTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
            <span className="text-red-600 text-xl">!</span>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">Delete task</h2>
            <p className="mt-1 text-sm text-gray-600">
              Are you sure you want to delete{" "}
              <span className="font-medium">{taskTitle || "this task"}</span>?
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskModal;
