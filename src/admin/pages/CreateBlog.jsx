import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createBlog } from "../../services/blogApi";

import {
  ArrowLeft,
  FileText,
  PenSquare,
  Save,
  Loader2,
  Sparkles,
} from "lucide-react";

const CreateBlog = () => {
  const [status, setStatus] = useState("draft");
  const [language, setLanguage] = useState("en");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitBlog = async () => {
    if (!title || !content) return;

    setLoading(true);

    try {
      await createBlog({
        title,
        content,
        status,
        language,
      });

      console.log("Blog created");

      navigate("/admin/dashboard");

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">

          <Link
            to="/admin/dashboard"
            className="inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-white"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 shadow-sm shadow-amber-400/10">
              <PenSquare className="h-5 w-5" />
            </span>

            Create Blog
          </Link>

          <button
            onClick={() => navigate("/admin/dashboard")}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-5 py-2 text-sm text-zinc-300 transition hover:border-amber-300 hover:text-amber-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">

          {/* Title */}
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">
              Blog Management
            </p>

            <h1 className="mt-4 text-4xl font-semibold text-zinc-100 sm:text-5xl">
              Write a New Article
            </h1>

            <p className="mt-4 max-w-2xl text-zinc-400 leading-7">
              Create professional blog content with elegant formatting and publishing controls.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-4xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-2xl shadow-black/20">

            {/* Title Input */}
            <div className="mb-8">
              <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-300">
                <FileText className="h-4 w-4 text-amber-300" />
                Blog Title
              </label>

              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title..."
                className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-zinc-100 outline-none transition focus:border-amber-400"
              />
            </div>

            {/* Status */}
            <div className="mb-8">
              <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-300">
                <Sparkles className="h-4 w-4 text-amber-300" />
                Blog Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-zinc-100 outline-none transition focus:border-amber-400"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            {/* Language */}
            <div className="mb-8">
              <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-300">
                <Sparkles className="h-4 w-4 text-amber-300" />
                Blog Language
              </label>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-zinc-100 outline-none transition focus:border-amber-400"
              >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
              </select>
            </div>

            {/* Content */}
            <div className="mb-10">
              <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-300">
                <PenSquare className="h-4 w-4 text-amber-300" />
                Blog Content
              </label>

              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your blog content here..."
                className="min-h-75 w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-zinc-100 outline-none transition focus:border-amber-400"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">

              <button
                onClick={() => navigate("/admin/dashboard")}
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-red-400 hover:text-red-400"
              >
                Cancel
              </button>

              <button
                onClick={submitBlog}
                disabled={loading}
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Publishing...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Publish Blog
                  </>
                )}
              </button>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateBlog;