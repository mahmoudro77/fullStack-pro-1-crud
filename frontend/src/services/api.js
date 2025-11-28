import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const getUsers = () => axios.get(`${API_URL}/api/users`);
export const createUser = (data) => axios.post(`${API_URL}/api/users`, data);
export const updateUser = (id, data) => axios.put(`${API_URL}/api/users/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API_URL}/api/users/${id}`);
