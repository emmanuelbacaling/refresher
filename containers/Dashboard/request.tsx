import axios from "axios";

const API = `${"http://192.168.0.105:3000"}`;

export const searchCategory = async (search: String) => {
  try {
    const { data } = await axios.get(`${API}/category/filter?search=${search}`);
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
