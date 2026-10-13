import StatusBadge from "./StatusBadge";
import { MoreVertical } from "lucide-react";

const PostTable = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-zinc-800">
          <tr>
            <th className="p-4 text-left">Title</th>
            <th>Status</th>
            <th>Date</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t border-zinc-800 hover:bg-zinc-800/40">
            <td className="p-4 font-medium">Understanding Tawheed</td>
            <td><StatusBadge status="Published" /></td>
            <td>12 Feb 2026</td>
            <td>Islamic Studies</td>
            <td className="text-right pr-4">
              <MoreVertical className="cursor-pointer hover:text-indigo-400" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
