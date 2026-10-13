import api from "./api";

/* ------------------ PUBLIC BLOG APIS ------------------ */

export const getAllBlogs = async (page = 1) => {
  const res = await api.get(`api/blogs/admin/all?page=${page}`);
  return res.data;
};

export const getSingleBlog = async (id) => {
  const res = await api.get(`api/blogs/${id}`);
  return res.data;
};

/* ------------------ ADMIN BLOG APIS ------------------ */

export const createBlog = async ({ title, content, status, language = "en" }) => {
  try {
    const res = await api.post("api/blogs", {
      title,
      content,
      status,
      language,
    });
    return res.data;
  } catch (error) {
    console.error("createBlog error:", error.response?.data || error.message || error);
    throw error;
  }
};

export const updateBlog = async (id, payload) => {
  const res = await api.put(`api/blogs/${id}`, payload);
  return res.data;
};

export const deleteBlog = async (id) => {
  const res = await api.delete(`api/blogs/${id}`);
  return res.data;
};

export const getPublishedBlogs = async (page = 1) => {
  const res = await api.get(`api/blogs?page=${page}`);
  return res.data;
};


export const getAdminBlogs = async (page = 1) => {
  const res = await api.get(`api/blogs/admin/all?page=${page}`);
  return res.data;
};