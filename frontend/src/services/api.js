import axios from 'axios';

const api = axios.create({
    /* A parte da URL que nunca vai mudar */
    baseURL: "http://localhost:3333",
})

export default api;