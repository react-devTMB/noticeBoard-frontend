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
    debugger;
    return Promise.reject(error);
  }
);

export default client;
