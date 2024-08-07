import axios from "axios";

const BASE_URL = 'http://localhost:8000';
export const CHECK_EMAIL_AND_PASSWORD = async ( email: string, password: string) => {
    try {
      const response = await axios.get(`${BASE_URL}/users?email=${email}&password=${password}`);
      return response.data;
    } catch (error) {
      console.error('Failed to check email and password:', error);
      throw error;
    }
  };

  export const CREATE_USER = async ( email: string, password: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/users`, { email, password });
        return response;
    } catch (error) {
        return null;
    }
  }

  export const UPDATE_USER = async (email: string, password: string) => {
    try {
        const usersResponse = await axios.get(`${BASE_URL}/users`, { params: { email }});
        const user = usersResponse.data[0];
        if (!user) {
            throw new Error('User not found');
        }
        const response = await axios.put(`${BASE_URL}/users/${user.id}`, { email, password });
        return response;
    } catch (error) {
        console.error('Failed to update user:', error);
        throw error;
    }
};