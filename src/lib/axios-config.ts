import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.PUBLIC_API_BASE_URL, // URL base
  timeout: 5000, // Tiempo máximo de espera
  withCredentials: true, // Enviar cookies
});

// Interceptores opcionales para manejar solicitudes o respuestas
api.interceptors.request.use((config) => config);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error en la API:", error.message);
    return Promise.reject(error);
  }
);

export default api;
