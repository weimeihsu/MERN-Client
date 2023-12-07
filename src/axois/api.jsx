import axios from "axios"

export const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL,
    // timeout:8000,
    headers: {'X-Custom-Header': 'the header'}
  });

export default api