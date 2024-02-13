import axios from "axios";

const API = `${"http://192.168.0.105:3000"}`;

type UserData = {
  token: String;
  role: String;
};

type Params = {
  id?: String;
  name?: String;
  images?: String;
  price?: Number;
  categoryId?: String;
};

export const updateItem = async (userData: any, payload: any) => {
  try {
    const { data } = await axios.put(
      `${API}/item/${payload.id}/${userData.token}`,
      payload
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
