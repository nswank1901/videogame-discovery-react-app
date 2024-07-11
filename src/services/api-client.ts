import axios from "axios";

// create axios instance with a custom configuration
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "8b3b54b47430440db5e1dd2ecb3f6806" // will be included in the query string of every HTTP request sent to the backend
    },
});