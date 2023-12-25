import axios from "axios";

// Create a instance to use axios functionality like baseUrl,header

const instance = axios.create({
  baseURL: "https://task-management-server-nu-ruby.vercel.app/api/"
});
const useAxios = () => {
  return instance;
};

export default useAxios;
