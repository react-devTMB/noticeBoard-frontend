import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'http://localhost:3000/api';

axios.interceptors.response.use(
  (response) => {
    // console.log('response >> ' , )
    return response;
  },
  (error) => {
    console.log('error', error);
    return Promise.reject(error.response);
  }
);

export default client;
