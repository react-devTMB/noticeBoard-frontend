import axios from 'axios';

const client = axios.create();

client.defaults.baseURL="http://localhost:3000/";

axios.interceptors.response.use(
    response => {
        // console.log('response >> ' , )
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);





export default client;