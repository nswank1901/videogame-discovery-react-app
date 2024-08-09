import axios from "axios";

// create axios instance with a custom configuration
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: import.meta.env.VITE_RAWG_API_KEY // will be included in the query string of every HTTP request sent to the backend
    },
});