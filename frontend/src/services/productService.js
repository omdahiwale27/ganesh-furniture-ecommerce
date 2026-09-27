import axios from "axios";

const API_URL = "http://localhost:8080";

const getAuthHeaders = () => {
  const token = localStorage.getItem("adminToken");

  return {
    Authorization: `Bearer ${token}`,
  };
};

// Handle authentication failure
const handleAuthError = (error) => {
  if (error.response?.status === 401) {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUsername");

    window.location.href = "/admin";
  }

  throw error;
};

// Public - get all products
export const getAllProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

// Public - get single product
export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};

// Admin - add product
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(
      `${API_URL}/products`,
      productData,
      {
        headers: getAuthHeaders(),
      }
    );

    return response.data;
  } catch (error) {
    handleAuthError(error);
  }
};

// Admin - update product
export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(
      `${API_URL}/products/${id}`,
      productData,
      {
        headers: getAuthHeaders(),
      }
    );

    return response.data;
  } catch (error) {
    handleAuthError(error);
  }
};

// Admin - delete product
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(
      `${API_URL}/products/${id}`,
      {
        headers: getAuthHeaders(),
      }
    );

    return response.data;
  } catch (error) {
    handleAuthError(error);
  }
};

// Admin - upload image
export const uploadImage = async (imageFile) => {
  try {
    const imageData = new FormData();

    imageData.append("file", imageFile);

    const response = await axios.post(
      `${API_URL}/files/upload`,
      imageData,
      {
        headers: {
          ...getAuthHeaders(),
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    handleAuthError(error);
  }
};