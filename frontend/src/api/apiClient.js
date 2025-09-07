import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  withCredentials: true,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export class ApiError extends Error {
  constructor(message, { status, data, url, method } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
    this.url = url;
    this.method = method;
  }
}

// (אופציונלי) הזרקת Authorization בהמשך
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("access_token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      const { status, data, config } = error.response;
      const message =
        data?.message || data?.error || `Request failed with status ${status}`;
      throw new ApiError(message, {
        status,
        data,
        url: config?.url,
        method: config?.method,
      });
    } else if (error.request) {
      throw new ApiError("No response from server");
    } else {
      throw new ApiError(error.message || "Request error");
    }
  }
);

export default api;
