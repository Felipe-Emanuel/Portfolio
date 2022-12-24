import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";

import { Envelope } from "phosphor-react";
import { Lock } from "phosphor-react";

import { LoginAnimation } from "../../animations/LoginAnimation/LoginAnimation";

import { AuthContext } from "../../contexts/Auth";
import { Text } from "../../components/TextComponent/Text";
import { Button } from "../../components/Button/Button";
import { NavLink } from "../../components/Menu/NavLink";
import { CheckBox } from "../../components/InputComponent/CheckBox";
import { FloatLabel } from "../../components/InputComponent/FloatLabel";
import { Thought } from "../../animations/LoginAnimation/Thought";
import { NavBar } from "../../components/Menu/NavBar";
import { LoginButton } from "../../components/Menu/LoginButton";
import { useFormik } from "../../hooks/useFormik";
import { Modal } from "../../components/Modal/Modal";
import { ElipseLoadingAnimation } from "../../animations/Loading/ElipseLoadingAnimation";

export function Login() {
  const { login, dataURL, msg, authenticated, loading, successRecovery } =
    useContext(AuthContext);
  const [message, setMessage] = useState(null);
  const [teste, setTeste] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });
  const { email, password } = formik.values;

  useEffect(() => {
    email.length || password.length > 0 ? setMessage(msg) : setMessage("");
  }, [msg]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dataURL(formik.values);

    login(email, password);
  };

  useEffect(() => {
    successRecovery && setTeste(true)
    setTimeout(() => {
      setTeste(false)
    }, 2500)
  }, [successRecovery])

  toast.success(successRecovery, {
    position: "top-left",
    autoClose: 1000,
    theme: "dark",
  });

  return (
    <div
      className=" 
        bg-cover bg-center h-screen bg-LoginBg
        px-12 py-2 z-0
        md:px-12
        lg:px-24
        xl:px-44
        2xl:px-64
      "
    >
      {teste && <ToastContainer limit={1} />}
      {authenticated && <Modal />}

      <NavBar
        dynamicButton={<LoginButton content="Início" link="/" />}
        createAccount={<Button text="Criar Conta" />}
        isLoginAndCreateAccountVisible={true}
      />
      <Thought />
      <main
        className="
          bg-colorsDark bg-opacity-50 shadow-login
          rounded-tl-3xl rounded-br-3xl rounded

          m-auto sticky top-[22vh] px-4 pb-1
          
          lg:px-16 
          
          max-w-xl animate-float
        "
      >
        <div className="rotate-180 xl:hidden">
          <LoginAnimation />
        </div>
        <Text className="text-colorsIcons text-center py-8 cursor-default">
          Bem vindo ao espaço!
        </Text>
        <form onSubmit={(e) => handleSubmit(e)}>
          <FloatLabel
            icon={<Envelope className="w-6 h-6" />}
            floatText="Email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />

          <FloatLabel
            icon={<Lock className="w-6 h-6" />}
            floatText="Senha"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            ViewPassword={true}
          />

          <div className="rotate-45 hidden xl:block">
            <LoginAnimation />
          </div>

          <div className="flex text-colorsText text-xs transition-all font-light justify-between pt-4">
            <label htmlFor="remember" className="flex items-center gap-2">
              <CheckBox id="remember" />
              <Text className="hover:text-violet-500 cursor-pointer">
                Lembrar-me!
              </Text>
            </label>

            <a href="/recovery" className="hover:text-violet-500">
              Esqueceu sua senha?
            </a>
          </div>
          {loading && <ElipseLoadingAnimation />}
          <Text className="text-colorsIcons w-fit m-auto text-center hover:text-violet-500">
            {message}
          </Text>
          <div className="text-center pt-4 lg:pb-4">
            <Button className="text-xs ring-violet-500" text="Entrar" />
          </div>

          <NavLink
            className="
              text-[12px] w-20 m-auto text-center
              after:top-11 lg:after:top-6 mb-4
            "
            content="Cadastre-se!"
            link="/createaccount"
          />
        </form>
      </main>
    </div>
  );
}
