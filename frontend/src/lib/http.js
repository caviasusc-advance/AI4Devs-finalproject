import axios from 'axios';

const fetch = axios.create();

fetch.interceptors.request.use(
    (config) => {
        // config.headers['X-Origin'] = 'user';
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

fetch.defaults.withCredentials = true

export { fetch }