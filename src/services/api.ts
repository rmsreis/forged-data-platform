import axios from 'axios';

// Create an axios instance with default config
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Example API functions
export const fetchDatasets = async (params = {}) => {
  try {
    const response = await api.get('/datasets', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching datasets:', error);
    throw error;
  }
};

export const fetchDatasetById = async (id) => {
  try {
    const response = await api.get(`/datasets/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching dataset ${id}:`, error);
    throw error;
  }
};

export const uploadDataset = async (datasetData) => {
  try {
    const response = await api.post('/datasets', datasetData);
    return response.data;
  } catch (error) {
    console.error('Error uploading dataset:', error);
    throw error;
  }
};

export default api;