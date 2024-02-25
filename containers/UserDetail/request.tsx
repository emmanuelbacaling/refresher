import axios from "axios";

const API = `${"https://jsonplaceholder.typicode.com"}`;

export const getUserProfile = async (id: number) => {
  try {
    console.log(id);
    const data = await axios.get(`${API}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserPost = async (id: number) => {
  try {
    console.log(id);
    // const data = await axios.get(`${API}/users/${id}/posts`);
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/1/posts`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log("getUserPost: ", error);
  }
};
