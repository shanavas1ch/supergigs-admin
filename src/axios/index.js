import axios from "axios";

export const Admin = axios.create({
  baseURL: `http://localhost:3500/admin`,
});