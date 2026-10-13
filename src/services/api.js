// import axios from "axios";

// const api = axios.create({
//   baseURL: Process.env.NEXT_PUBLIC_API_URL,
// });

// // ✅ Request Interceptor
// api.interceptors.request.use(
//   async (config) => {
//     try {
//       const token = localStorage.getItem("token");

//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//         console.log("✅ Authorized request");
//       } else {
//         console.log("⚠ Token is missing");
//       }

//       return config;
//     } catch (error) {
//       console.error("Request interceptor error:", error);
//       return Promise.reject(error);
//     }
//   },
// );

// // ✅ Response Interceptor (VERY IMPORTANT)
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     try {
//       if (error.response?.status === 401) {
//         console.log("❌ Unauthorized - removing token");
//         localStorage.removeItem("token");
//         window.location.href = "/admin/login";
//       }

//       return Promise.reject(error);
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   }
// );

// export default api;








import axios from "axios";

const rawApiUrl = import.meta.env.VITE_API_URL || process.env.NEXT_PUBLIC_API_URL || "";
const API_URL = rawApiUrl.trim().replace(/,$/, "");
const normalizedUrl = API_URL && !API_URL.startsWith("http") ? `https://${API_URL}` : API_URL;

const api = axios.create({
  baseURL: normalizedUrl || "/",
});

// ✅ Request Interceptor
api.interceptors.request.use(
  async (config) => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log("✅ Authorized request");
      } else {
        console.log("⚠ Token is missing");
      }

      return config;
    } catch (error) {
      console.error("Request interceptor error:", error);
      return Promise.reject(error);
    }
  }
);

// ✅ Response Interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    try {
      if (error.response?.status === 401) {
        console.log("❌ Unauthorized - removing token");
        localStorage.removeItem("token");
        window.location.href = "/admin/login";
      }

      return Promise.reject(error);
    } catch (err) {
      return Promise.reject(err);
    }
  }
);

export default api;