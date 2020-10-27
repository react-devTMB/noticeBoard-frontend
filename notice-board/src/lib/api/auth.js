import client from './client';


export const login = ({email, password}) => client.post('api/auth/login', {email, password});

export const register = ({ registInfo }) => client.post('api/vi/user', { registInfo });