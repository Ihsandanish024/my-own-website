import { LayoutDashboard, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-6">
      <h1 className="text-xl font-bold mb-8">Admin Panel</h1>

      <nav className="space-y-4">
        <Link className="flex items-center gap-3 hover:text-indigo-400" to="/admin">
          <LayoutDashboard size={18} /> Dashboard
        </Link>
        <Link className="flex items-center gap-3 hover:text-indigo-400" to="/admin/posts">
          <FileText size={18} /> Manage Posts
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
