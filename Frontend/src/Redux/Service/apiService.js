import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products'; // Replace with your API URL

export const fetchAllProducts = async () => {
  const response = await axios.get(`${API_URL}/allProduct`);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_URL}/singleProduct/${id}`);
  return response.data;
};

export const createNewProduct = async (productData) => {
  const response = await axios.post(`${API_URL}/new_Product`, productData);
  return response.data;
};

export const updateExistingProduct = async (id, productData) => {
  const response = await axios.put(`${API_URL}/updateProduct/${id}`, productData);
  return response.data;
};

export const deleteProductById = async (id) => {
  const response = await axios.delete(`${API_URL}/deleteProduct/${id}`);
  return response.data;
};
