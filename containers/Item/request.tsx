import axios from "axios";

const API = `${"http://192.168.0.105:3000"}`;

export const getItems = async (itemId: String) => {
  try {
    const { data } = await axios.get(`${API}/item/${itemId}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const searchItem = async (search: String) => {
  try {
    const { data } = await axios.get(`${API}/item?search=${search}`);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
