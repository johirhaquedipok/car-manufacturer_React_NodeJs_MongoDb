import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:5000",
});

export const authClient = axios.create({
  baseURL: "http://localhost:5000",
  headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
});
