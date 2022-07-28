import axios from "axios";

export const client = axios.create({
  baseURL: "https://sheltered-bastion-64001.herokuapp.com/",
});

export const authClient = axios.create({
  baseURL: "https://sheltered-bastion-64001.herokuapp.com/",
  headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
});
