import axios from "axios";

const API = `${"http://192.168.0.105:3000"}`;

type Payload = {
  username: String;
  password: String;
};

export const loginUser = async (payload: Payload) => {
  try {
    const { data } = await axios.post(`${API}/auth`, payload);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
