import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 shadow-sm shadow-amber-400/10">
              Home
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm text-zinc-300 transition hover:text-white">Home</Link>
            <Link to="/portfolio" className="text-sm text-zinc-300 transition hover:text-white">Portfolio</Link>
            <Link to="/blogs" className="text-sm text-zinc-300 transition hover:text-white">Blogs</Link>
            <Link to="/about" className="text-sm text-zinc-300 transition hover:text-white">About</Link>
          </nav>
        </div>
      </header>

      <main>
        <div className="px-6 md:px-10 py-16 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 rounded-4xl border border-zinc-800 bg-zinc-900/80 p-10 shadow-2xl shadow-black/20">
              <h1 className="text-4xl font-semibold text-zinc-100 sm:text-5xl">Contact</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
                Reach out to book Arabic lessons, request poetry, or arrange voice-over services for your next video or advertisement.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-8 rounded-4xl border border-zinc-800 bg-zinc-900/80 p-10 shadow-xl shadow-black/10">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Message</p>
                  <p className="mt-4 text-zinc-300 leading-8">
                    For personalized teaching plans, creative writing projects, or professional recording sessions, email directly or leave a message here.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-3xl border wrap-break-word border-zinc-800 bg-zinc-950/90 p-6 transition hover:-translate-y-1">
                    <p className="text-sm text-amber-300/90">Email</p>
                    <a href="mailto:ubaidyousufzai9@gmail.com" className="mt-3 block text-lg font-semibold text-zinc-100 hover:text-amber-300 transition">
                    ubaidyousufzai9@gmail.com
                    </a>
                  </div>
                  <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 transition hover:-translate-y-1">
                    <p className="text-sm text-amber-300/90">Availability</p>
                    <p className="mt-3 text-lg font-semibold text-zinc-100">Weekdays 09:00–19:00</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 transition hover:-translate-y-1">
                  <p className="text-sm text-amber-300/90">Phone</p>
                  <p className="mt-3 text-lg font-semibold text-zinc-100">03272413261</p>
                  <div className="mt-6">
                      <p className="text-sm text-amber-300/90">whattsapp no:</p>
                      <p className="mt-3 text-lg font-semibold text-zinc-100">03480281550</p>
                    
                  </div>
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 transition hover:-translate-y-1">
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Connect</p>
                  <div className="mt-4 space-y-3">
                    <a href="https://youtube.com/channel/UChig7uLbEqv_lKk3HX6Ul8Q?si=liPA2dhzVbZ6EdIX" target="_blank" rel="noreferrer" className="block text-lg font-semibold text-zinc-100 hover:text-amber-300 transition">
                      YouTube Channel
                    </a>
                    <a href="https://www.facebook.com/share/1AvHw9W3MG/" target="_blank" rel="noreferrer" className="block text-lg font-semibold text-zinc-100 hover:text-amber-300 transition">
                      Facebook Page
                    </a>
                    <a href="https://www.linkedin.com/in/عبيدالرحمن-يوسف-زئي-2a893b296?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="block text-lg font-semibold text-zinc-100 hover:text-amber-300 transition">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-4xl border border-zinc-800 bg-gradient-to-br from-amber-400/10 via-transparent to-sky-400/5 p-10 shadow-inner shadow-black/20">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/95 p-8">
                  <h2 className="text-2xl font-semibold text-zinc-100">Send a Request</h2>
                  <p className="mt-4 text-zinc-400 leading-7">
                   you can contact me for any service matches my skills
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="rounded-3xl bg-zinc-900/95 p-4 text-zinc-300 transition hover:bg-zinc-800/95">
                      <p className="text-sm text-zinc-500">Type</p>
                      <p className="mt-2 text-zinc-100">Language lesson</p>
                    </div>
                    <div className="rounded-3xl bg-zinc-900/95 p-4 text-zinc-300 transition hover:bg-zinc-800/95">
                      <p className="text-sm text-zinc-500">Type</p>
                      <p className="mt-2 text-zinc-100">Voice-over project</p>
                    </div>
                    <div className="rounded-3xl bg-zinc-900/95 p-4 text-zinc-300 transition hover:bg-zinc-800/95">
                      <p className="text-sm text-zinc-500">Type</p>
                      <p className="mt-2 text-zinc-100">Poetry collaboration</p>
                    </div>
                  </div>
                  <Link
                    to="/"
                    className="mt-8 inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
                  >
                    Return to Home
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
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

export default Contact;
