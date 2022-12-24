import axios from "axios";
import { BaseURL } from "./baseURL";

export const api = axios.create({
  baseURL: BaseURL,
});

export const AuthLogin = async (email, password, name) => {
  return api.post("/auth/login", { email, password, name });
};
