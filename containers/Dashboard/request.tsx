import axios from "axios";

const API = `${"https://jsonplaceholder.typicode.com"}`;

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${API}/users`);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getCategory = async () => {
  try {
    const { data } = await axios.get(`${API}/category/`);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
