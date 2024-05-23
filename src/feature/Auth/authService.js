import axios from "axios";


const register = async (formData) => {
  console.log(formData);
  const response = await axios.post("https://authentication-2-qgze.onrender.com/api/user/register", formData);
  localStorage.setItem('user', JSON.stringify(response.data))
  // console.log(response);
  return response.data;
};


const login = async (formData) => {
  // console.log(formData);
  const response = await axios.post("https://authentication-2-qgze.onrender.com/api/user/login"  , formData);
  localStorage.setItem('user' , JSON.stringify(response.data));
  // console.log(response)
  return response.data;
}

const authService = {
  register,
  login,
};

export default authService;
