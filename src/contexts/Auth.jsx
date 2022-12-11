import { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { api, AuthLogin } from "../services/api";
import { BaseURL } from "../services/baseURL";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const dataURL = async (data) => {
    const res = await fetch(`${BaseURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => (data.auth != true ? setMsg(data.message) : false));

    return res;
  };

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (recoveredUser && token) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await AuthLogin(email, password);

    const loggedUser = response.data.id;
    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(loggedUser);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout, dataURL, msg: msg }}
    >
      {children}
    </AuthContext.Provider>
  );
};
