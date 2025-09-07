import api from "./apiClient";

export const ping = () => api.get("/health/ping");
export const echo = (message) => api.post("/health/echo", { message });
