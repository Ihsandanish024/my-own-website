
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginAdmin } from "../../services/adminApi";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      const res = await loginAdmin({ email, password });

      console.log("login working");
      localStorage.setItem("token", res.token);
      console.log(res.token);
      console.log("token has achieved");

      const saved = localStorage.getItem("token");
      console.log("token saved in local storage", saved);

      window.location.href = "/admin/dashboard";

    } catch (err) {
      console.log(err);
      setError("Invalid email or password");
      console.log("problem in email and password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 shadow-sm shadow-amber-400/10">
              Admin
            </span>
            Admin Panel
          </Link>

          <Link
            to="/"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex items-center justify-center px-6 py-16 md:px-10">
        <div className="w-full max-w-md">
          {/* Decorative gradient */}
          <div className="pointer-events-none absolute inset-x-0 top-1/3 h-60 bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl" />

          {/* Login Card */}
          <div className="relative z-10 rounded-4xl border border-zinc-800 bg-zinc-900/80 p-10 shadow-2xl shadow-black/20 backdrop-blur-xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-400/10 text-amber-300 shadow-lg shadow-amber-400/20 mb-4">
                <Lock className="h-7 w-7" />
              </div>
              <h1 className="text-3xl font-semibold text-zinc-100">
                Admin Login
              </h1>
              <p className="text-sm text-zinc-400 mt-4">
                Sign in to manage blog content and portfolio
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-6 rounded-3xl border border-red-500/30 bg-red-500/10 p-4 backdrop-blur-sm">
                <p className="text-sm text-red-400">
                  {error}
                </p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={login} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold uppercase tracking-[0.1em] text-amber-300/80 mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600" />
                  <input
                    type="email"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl bg-zinc-950/80 border border-zinc-800 px-4 py-3 pl-12 text-zinc-100 placeholder-zinc-500 transition focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold uppercase tracking-[0.1em] text-amber-300/80 mb-3">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-2xl bg-zinc-950/80 border border-zinc-800 px-4 py-3 pl-12 pr-12 text-zinc-100 placeholder-zinc-500 transition focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-100"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-8 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-400/20"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent" />
              <p className="text-xs text-zinc-500">Admin Only</p>
              <div className="flex-1 h-px bg-gradient-to-l from-zinc-800 to-transparent" />
            </div>

            {/* Info Box */}
            <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6">
              <p className="text-sm text-zinc-400 leading-6">
                This is a protected admin area. Use your admin credentials to access the dashboard and manage content.
              </p>
            </div>
          </div>

          {/* Footer Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-zinc-400">
              Not an admin?{" "}
              <Link to="/" className="text-amber-300 hover:text-amber-200 transition font-semibold">
                Return to home
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-800/70 px-6 py-8 md:px-10 lg:px-12 mt-auto">
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

export default AdminLogin;









// import { useState } from "react";
// import { loginAdmin } from "../../services/adminApi";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const login = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       setError("");

//       const res = await loginAdmin({ email, password });

//       console.log("Full response:", res); // check what comes back

//       const token = res.token || res.data?.token; // handle both cases
      
//       if (!token) {
//         throw new Error("No token received");
//       }

//       localStorage.setItem("token", token);
//       window.location.href = "/admin/dashboard";

//     } catch (err) {
//       console.log(err);
//       setError("Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
        
//         {/* Header */}
//         <div className="mb-8 text-center">
//           <h1 className="text-2xl font-semibold text-zinc-100">Admin Login</h1>
//           <p className="text-sm text-zinc-400 mt-2">Sign in to manage blog content</p>
//         </div>

//         {/* Error */}
//         {error && (
//           <div className="mb-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
//             {error}
//           </div>
//         )}

//         {/* ✅ Wrapped in form */}
//         <form onSubmit={login}>
//           {/* Email */}
//           <div className="mb-4">
//             <label className="block text-sm text-zinc-400 mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="admin@example.com"
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-6">
//             <label className="block text-sm text-zinc-400 mb-2">Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           {/* ✅ type="submit" instead of onClick */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition px-4 py-2 text-white font-medium disabled:opacity-50"
//           >
//             {loading ? "Signing in..." : "Sign In"}
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="text-xs text-zinc-500 text-center mt-6">Protected Admin Area</p>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;