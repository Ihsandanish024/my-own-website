import api from "./api"; // your main axios instance

// 🔐 Admin Login
// Use the backend admin login route. If 404 persists, confirm the backend path.
export const loginAdmin = async (loginData) => {
  const response = await api.post("api/admin/login", loginData);
  return response.data;
};

