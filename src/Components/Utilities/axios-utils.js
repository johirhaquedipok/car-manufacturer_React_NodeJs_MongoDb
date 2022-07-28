import axios from "axios";

export const client = axios.create({
  baseURL: "https://sonikon.herokuapp.com",
});

export const authClient = axios.create({
  baseURL: "https://sonikon.herokuapp.com",
  headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
});
