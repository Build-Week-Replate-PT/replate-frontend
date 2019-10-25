import axios from "axios";
import NonProfitSignupForm from "../components/NonProfitSignupForm";

//business login token storage
export const axiosWithAuthBusiness = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://bw-replate.herokuapp.com/api/auth/business",
    headers: {
      Authorization: token
    }
  });
};

//nonprofit login storage token
export const axiosWithAuthNonProfit = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://bw-replate.herokuapp.com/api/auth/volunteer",
    headers: {
      Authorization: token
    }
  });
};

//food token
export const axiosWithAuthFood = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://bw-replate.herokuapp.com/api/food",
    headers: {
      Authorization: token
    }
  });
};

// //=====AXIOS COMMANDS:
// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])
