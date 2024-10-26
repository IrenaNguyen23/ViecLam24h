import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:44350/api/", 
});

export const register = async (userData) => {
    try {
        const response = await api.post('user/register', userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const login = async (credentials) => {
  try {
      const response = await api.post('user/login', credentials);
      
      // Assuming the response structure contains the token as shown in your earlier message
      const { token } = response.data;

      // Store the token in local storage for later use
      localStorage.setItem('token', token.token); // Adjust according to your token structure
      
      return {
          success: true,
          data: response.data.token,
      };
  } catch (error) {
      // Handle error gracefully
      const errorMsg = error.response ? error.response.data.message : 'An unexpected error occurred.';
      return {
          success: false,
          message: errorMsg,
      };
  }
};

export const forgotPassword = async (email) => {
  try {
      const response = await api.post('user/forgot-password', { email });
      return response.data; // Return response data as needed
  } catch (error) {
      throw error.response ? error.response.data : error; // Handle errors
  }
};