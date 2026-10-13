import AdminLayout from "../layout/AdminLayout";
import PostTable from "../components/PostTable";

const Posts = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-semibold mb-8">Manage Posts</h1>
      <PostTable />
    </AdminLayout>
  );
};

export default Posts;
