import axios from "axios";
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

export const getSummary = () => axios.get(`${API_BASE}/summary`).then(r => r.data);
export const getAgeChart = () => axios.get(`${API_BASE}/chart/age`).then(r => r.data);
export const getGenderChart = () => axios.get(`${API_BASE}/chart/gender`).then(r => r.data);
export const uploadCsv = (file) => {
  const form = new FormData();
  form.append('file', file);
  return axios.post(`${API_BASE}/upload-csv`, form, { headers: { 'Content-Type': 'multipart/form-data' } });
}
