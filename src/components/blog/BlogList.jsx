import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { getPublishedBlogs } from "../../services/blogApi";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchBlogs = async () => {
    try {
      const data = await getPublishedBlogs(page);
      let blogsList = [];
      let tp = 1;

      if (Array.isArray(data)) {
        blogsList = data;
      } else if (data && Array.isArray(data.blogs)) {
        blogsList = data.blogs;
        tp = typeof data.totalPages === "number" ? data.totalPages : tp;
      } else if (data && Array.isArray(data.docs)) {
        blogsList = data.docs;
        tp = typeof data.totalPages === "number" ? data.totalPages : tp;
      } else if (data && Array.isArray(data.data)) {
        blogsList = data.data;
      } else {
        blogsList = [];
      }

      setBlogs(blogsList);
      setTotalPages(tp);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
      setBlogs([]);
      setTotalPages(1);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex gap-2 mt-12 justify-center items-center">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-300 transition hover:border-amber-300 hover:text-amber-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-2xl text-sm font-semibold transition ${
                page === i + 1
                  ? "bg-amber-400 text-zinc-950"
                  : "border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-amber-300 hover:text-amber-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-300 transition hover:border-amber-300 hover:text-amber-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
