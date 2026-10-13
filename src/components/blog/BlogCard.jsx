import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const BlogCard = ({ blog }) => {
  const isArabic =
    blog.language === "ar" || /[\u0600-\u06FF]/.test(blog.title + blog.content);

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="group rounded-3xl border border-zinc-800 bg-zinc-900/80 p-7 transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-zinc-800/90 shadow-xl shadow-black/10"
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
          {isArabic ? "العربية" : "English"}
        </span>
      </div>

      <h2 className={`text-lg md:text-xl font-semibold ${isArabic ? "text-right" : "text-left"} text-zinc-100 group-hover:text-amber-300 transition`}>
        {blog.title}
      </h2>
      <p className={`text-zinc-400 mt-3 leading-6 line-clamp-2 ${isArabic ? "text-right" : "text-left"}`}>
        {blog.content.slice(0, 120)}...
      </p>

      <Link
        to={`/blogs/${blog._id}`}
        className={`mt-6 inline-flex items-center text-sm font-semibold text-amber-300 transition hover:text-amber-200 ${isArabic ? "justify-end" : "justify-start"}`}
      >
        {isArabic ? "اقرأ المقال" : "Read Article"}
        <ChevronRight className={`h-4 w-4 ${isArabic ? "mr-2" : "ml-2"}`} />
      </Link>
    </div>
  );
};

export default BlogCard;
