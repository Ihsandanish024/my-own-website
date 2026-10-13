import { Link } from "react-router-dom";
import BlogList from "../components/blog/BlogList";
import { ChevronRight } from "lucide-react";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 shadow-sm shadow-amber-400/10">
              Home
            </span>
            {/* Articles */}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm text-zinc-300 transition hover:text-white">Home</Link>
            <Link to="/portfolio" className="text-sm text-zinc-300 transition hover:text-white">Portfolio</Link>
            <Link to="/about" className="text-sm text-zinc-300 transition hover:text-white">About</Link>
            <Link to="/contact" className="text-sm text-zinc-300 transition hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Header Section */}
        <section className="relative overflow-hidden px-6 pt-12 pb-16 md:px-10 lg:pb-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl" />
          <div className="mx-auto max-w-7xl relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-200 shadow-sm shadow-amber-400/10">
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              Articles & Insights
            </span>

            <h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
              Articles on Arabic language, poetry & voice artistry.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Explore insights, lessons, and guides on refining your Arabic skills, understanding classical poetry, and mastering expressive voice delivery.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
              >
                View Portfolio
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
              >
                Learn About Me
              </Link>
            </div>
          </div>
        </section>

        {/* Blog List Section */}
        <section className="border-t border-zinc-800/70 px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">Latest Articles</p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-100">Featured Articles</h2>
            </div>

            {/* Blog List Container */}
            <div>
              <BlogList />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-zinc-800/70 px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-4xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 via-zinc-900/50 to-zinc-900/80 p-12 shadow-2xl shadow-black/20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">Ready to Learn?</p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl">Start Your Arabic Journey Today</h2>
              <p className="mt-6 text-base leading-8 text-zinc-400">
                Connect with me to book personalized lessons, discuss poetry collaborations, or arrange voice-over services.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
              >
                Get in Touch
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/70 px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-zinc-400">© 2026 Noor Al-Qalam. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
            <Link to="/" className="transition hover:text-white">Home</Link>
            <Link to="/portfolio" className="transition hover:text-white">Portfolio</Link>
            <Link to="/about" className="transition hover:text-white">About</Link>
            <Link to="/contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blogs;

