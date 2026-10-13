const DeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-xl border border-red-500 w-96">
        <h2 className="text-xl font-semibold text-red-400">Delete Post?</h2>
        <p className="text-sm text-zinc-400 mt-2">
          This action cannot be undone.
        </p>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="rounded-2xl border border-zinc-700 bg-zinc-950/80 px-4 py-2 text-sm text-zinc-100 transition hover:border-zinc-600"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
