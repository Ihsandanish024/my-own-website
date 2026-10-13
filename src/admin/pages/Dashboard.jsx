



import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAllBlogs, deleteBlog } from "../../services/blogApi";
import { Edit2, Trash2, Plus, LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import DeleteModal from "../../admin/components/DeleteModal";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const data = await getAllBlogs(page);

      console.log("Blogs data:", data);

      if (data && data.blogs) {
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
      } else {
        setBlogs([]);
      }

    } catch (err) {
      console.log("fetchBlogs error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  const handleDelete = async () => {
    try {
      await deleteBlog(deleteId);

      setDeleteId(null);

      fetchBlogs();

    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
            <span className="inline-flex h-10 w-50 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 shadow-sm shadow-amber-400/10">
            Admin Dashboard
              
            </span>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Page Header */}
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-semibold text-zinc-100 sm:text-5xl">
                Manage Blogs
              </h1>
              <p className="mt-4 text-zinc-400">
                Create, edit, and delete your blog articles
              </p>
            </div>

            <button
              onClick={() => navigate("/admin/create")}
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300 shadow-lg shadow-amber-400/20"
            >
              <Plus className="mr-2 h-5 w-5" />
              Create Blog
            </button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="rounded-4xl border border-zinc-800 bg-zinc-900/80 p-12 text-center">
              <p className="text-zinc-400">Loading blogs...</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && blogs.length === 0 && (
            <div className="rounded-4xl border border-zinc-800 bg-zinc-900/80 p-12 text-center">
              <p className="text-lg text-zinc-300 mb-6">No blogs found.</p>
              <button
                onClick={() => navigate("/admin/create")}
                className="inline-flex items-center rounded-full border border-zinc-700 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
              >
                Create Your First Blog
              </button>
            </div>
          )}

          {/* Blogs Grid */}
          {!loading && blogs.length > 0 && (
            <div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                {blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="group rounded-3xl border border-zinc-800 bg-zinc-900/80 overflow-hidden transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-zinc-800/90 shadow-xl shadow-black/10"
                  >
                    {/* Blog Image */}
                    {blog.image && (
                      <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="h-full w-full object-cover transition group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    )}

                    {/* Blog Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-zinc-100 line-clamp-2 group-hover:text-amber-300 transition">
                        {blog.title}
                      </h3>

                      {/* Preview */}
                      <p className="mt-3 text-sm text-zinc-400 line-clamp-2">
                        {blog.content.slice(0, 100)}...
                      </p>

                      {/* Status Badge */}
                      <div className="mt-4 flex items-center gap-2">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                            blog.published
                              ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/30"
                              : "bg-amber-400/10 text-amber-300 border border-amber-400/30"
                          }`}
                        >
                          {blog.published ? "Published" : "Draft"}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="mt-6 flex gap-3">
                        <button
                          onClick={() =>
                            navigate(`/admin/edit/${blog._id}`)
                          }
                          className="flex-1 inline-flex items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-950/80 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-blue-400 hover:text-blue-400"
                        >
                          <Edit2 className="mr-2 h-4 w-4" />
                          Edit
                        </button>

                        <button
                          onClick={() => setDeleteId(blog._id)}
                          className="flex-1 inline-flex items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-950/80 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-red-400 hover:text-red-400"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex gap-2 justify-center items-center">
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
          )}
        </div>
      </main>

      {/* Floating Logout Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 rounded-full bg-red-500/90 hover:bg-red-600 px-6 py-3 text-sm font-semibold text-white transition shadow-lg"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>

      {/* Delete Modal */}
      {deleteId && (
        <DeleteModal
          onCancel={() => setDeleteId(null)}
          onConfirm={handleDelete}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-zinc-800/70 px-6 py-8 md:px-10 lg:px-12 mt-20">
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

export default AdminDashboard;