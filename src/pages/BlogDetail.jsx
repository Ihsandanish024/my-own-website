import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleBlog } from "../services/blogApi";
import { ChevronLeft } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getSingleBlog(id).then(setBlog);
  }, [id]);

  const isArabic =
    blog &&
    (blog.language === "ar" || /[\u0600-\u06FF]/.test(blog.title + blog.content));

  if (!blog) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <p className="text-zinc-400 text-sm">Loading article...</p>
      </div>
    );
  }

  return (
    <div dir={isArabic ? "rtl" : "ltr"} lang={isArabic ? "ar" : "en"} className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/blogs" className="inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-white hover:text-amber-300 transition">
            <ChevronLeft className="h-5 w-5" />
            <span>Back to Articles</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm text-zinc-300 transition hover:text-white">Home</Link>
            <Link to="/portfolio" className="text-sm text-zinc-300 transition hover:text-white">Portfolio</Link>
            <Link to="/about" className="text-sm text-zinc-300 transition hover:text-white">About</Link>
            <Link to="/contact" className="text-sm text-zinc-300 transition hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="px-6 md:px-10 py-16 lg:px-12">
        <div className="mx-auto max-w-4xl">
          {/* Article Container */}
          <article className="rounded-4xl border border-zinc-800 bg-zinc-900/80 p-10 md:p-14 shadow-2xl shadow-black/20">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-semibold text-zinc-100 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 pb-8 border-b border-zinc-800/50 mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-200 shadow-sm shadow-amber-400/10">
                {isArabic ? "مقالة" : "Article"}
              </span>
              <span className="text-sm text-zinc-400">
                {isArabic ? "نُشر حديثًا" : "Recently published"}
              </span>
            </div>

            {/* Content */}
            <div className={`prose prose-invert max-w-none text-zinc-300 leading-8 ${isArabic ? "text-right" : "text-left"}`}>
              <p className="whitespace-pre-line text-base md:text-lg">
                {blog.content}
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-12 pt-8 border-t border-zinc-800/50">
              <p className="text-zinc-400 mb-6">Found this helpful? Let's connect!</p>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
              >
                Get in Touch
              </Link>
            </div>
          </article>

          {/* Related Articles Navigation */}
          <div className="mt-12 flex gap-4 justify-between">
            <Link
              to="/blogs"
              className="flex-1 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 transition hover:-translate-y-1 hover:border-amber-300 text-center"
            >
              <p className="text-sm text-amber-300/80">← Previous</p>
              <p className="mt-2 text-zinc-300">View All Articles</p>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-800/70 px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-zinc-400">© 2026 Noor Al-Qalam. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
            <Link to="/" className="transition hover:text-white">Home</Link>
            <Link to="/portfolio" className="transition hover:text-white">Portfolio</Link>
            <Link to="/blogs" className="transition hover:text-white">Blogs</Link>
            <Link to="/about" className="transition hover:text-white">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetail;
