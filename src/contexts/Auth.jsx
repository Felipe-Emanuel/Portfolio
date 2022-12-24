import { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { api, AuthLogin } from "../services/api";
import { BaseURL } from "../services/baseURL";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [successRecovery, setSuccessRecovery] = useState("");
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState("");
  const [validationNumber, setValidationNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const register = async (data) => {
    setLoading(true);
    const res = await fetch(`${BaseURL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => {
        data.stats == 201 && setStatus((status) => !status);
        data.stats == 201 && navigate("/login");
        navigate && setMsg(null);
        setMsg(data.message);
      });
    localStorage.setItem("userName", data.name);
    setLoading(false);
    return res;
  };

  const dataURL = async (data) => {
    setLoading(true);
    const res = await fetch(`${BaseURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => (data.auth != true ? setMsg(data.message) : false));
    setLoading(false);
    return res;
  };

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");

    if (recoveredUser && token && name) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await AuthLogin(email, password);

    const loggedUser = response.data.id;
    const token = response.data.token;
    const name = response.data.name;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);
    localStorage.setItem("userName", name);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(loggedUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("userName");

    api.defaults.headers.Authorization = null;

    setMsg(null);
    setUser(null);
    setSuccessRecovery(null)
    navigate("/login");
  };

  const recoveryEmail = async (email) => {
    setLoading(true);
    const res = await fetch(`${BaseURL}/auth/forgotpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setValidationNumber(data.randomNumber);
        setMsg(data.message), console.log(data);
        localStorage.setItem("userEmail", data.email);
        data.status !== 200 ? setModal(false) : setModal(true);
      });
    setLoading(false);

    return res;
  };

  const recoveryPass = async (email) => {
    setLoading(true);
    const res = await fetch(`${BaseURL}/auth/resetpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setMsg(data.message);
        localStorage.removeItem("userEmail");
        setSuccessRecovery("Senha alterada com sucesso");
        setTimeout(() => {
          setSuccessRecovery(null)
        }, 2500)
        data.status === 200 && navigate("/login", { replace: true });
      });

    setLoading(false);
    return res;
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        login,
        logout,
        dataURL,
        register,
        recoveryEmail,
        recoveryPass,
        successRecovery,
        msg: msg,
        userName: localStorage.getItem("userName"),
        modal,
        validationNumber,
        status,
        userEmail: localStorage.getItem("userEmail"),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
