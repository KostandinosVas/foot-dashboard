import axios from 'axios';

const client = axios.create({
    baseURL: '/api',
    headers: {
        'X-Auth-Token': import.meta.env.VITE_API_KEY,
    },
})

export default client;

