import axios from "axios"

const apiShopItems = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'the header'}
  });

export default apiShopItems