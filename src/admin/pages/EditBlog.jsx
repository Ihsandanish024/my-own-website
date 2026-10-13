import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleBlog, updateBlog } from "../../services/blogApi";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [language, setLanguage] = useState("en");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const isArabic = language === "ar";

  useEffect(() => {
    const fetchBlog = async () => {
      const blog = await getSingleBlog(id);
      setStatus(blog.status);
      setLanguage(blog.language || (/[\u0600-\u06FF]/.test(blog.title + blog.content) ? "ar" : "en"));
      setTitle(blog.title);
      setContent(blog.content);
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  const handleUpdate = async () => {
    if (!title || !content) return;

    setSaving(true);
    await updateBlog(id, { title, content, status, language });
    navigate("/admin/dashboard"); // 🔥 redirect
  };

  if (loading) {
    return (
      <div className="text-center text-white mt-20">
        Loading blog...
      </div>
    );
  }

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`w-full bg-zinc-900 border border-zinc-800 p-3 rounded-lg mb-4 ${isArabic ? "text-right" : "text-left"}`}
        placeholder="Blog title"
      />

      <div className="grid gap-4 mb-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-zinc-300">
          Status
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 p-3 text-zinc-100 outline-none transition focus:border-amber-400"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>

        <label className="space-y-2 text-sm text-zinc-300">
          Language
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 p-3 text-zinc-100 outline-none transition focus:border-amber-400"
          >
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
        </label>
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={`w-full bg-zinc-900 border border-zinc-800 p-3 rounded-lg h-48 mb-6 ${isArabic ? "text-right" : "text-left"}`}
        placeholder="Blog content"
      />

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="px-4 py-2 border bg-red-500/90 hover:bg-red-600  border-zinc-700 rounded-lg"
        >
          Cancel
        </button>

        <button
          onClick={handleUpdate}
          disabled={saving}
          className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Update"}
        </button>
      </div>
    </div>
  );
};

export default EditBlog;
