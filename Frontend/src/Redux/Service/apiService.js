import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products'; // Replace with your API URL

// Function to get the auth token (you can store it in localStorage or cookies)
const getAuthToken = () => localStorage.getItem('token'); // Replace with your method of retrieving the token

export const fetchAllProducts = async () => {
  const token = getAuthToken();
  const response = await axios.get(`${API_URL}/allProduct`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fetchProductById = async (id) => {
  const token = getAuthToken();
  const response = await axios.get(`${API_URL}/singleProduct/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createNewProduct = async (productData) => {
  const token = getAuthToken();
  const response = await axios.post(`${API_URL}/new_Product`, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateExistingProduct = async (id, productData) => {
  const token = getAuthToken();
  const response = await axios.put(`${API_URL}/updateProduct/${id}`, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteProductById = async (id) => {
  const token = getAuthToken();
  const response = await axios.delete(`${API_URL}/deleteProduct/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
