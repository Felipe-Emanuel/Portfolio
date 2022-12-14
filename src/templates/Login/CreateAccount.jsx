import { Envelope } from "phosphor-react";
import { User } from "phosphor-react";
import { Lock } from "phosphor-react";

import { LoginAnimation } from "../../animations/LoginAnimation/LoginAnimation";

import { Text } from "../../components/TextComponent/Text";
import { Button } from "../../components/Button/Button";
import { NavLink } from "../../components/Menu/NavLink";
import { Thought } from "../../animations/LoginAnimation/Thought";
import { NavBar } from "../../components/Menu/NavBar";
import { FloatLabel } from "../../components/InputComponent/FloatLabel";
import { LoginButton } from "../../components/Menu/LoginButton";
import { useFormik } from "../../hooks/useFormik";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import { ElipseLoadingAnimation } from "../../animations/Loading/ElipseLoadingAnimation";

export function CreateAccount() {
  const { register, msg, loading } = useContext(AuthContext);
  const [message, setMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    const { name, email, password, confirmPassword } = formik.values;
    name.length || email.length || password.lengh || confirmPassword.lengh > 0
      ? setMessage(msg)
      : setMessage("");
  }, [msg]);

  const handleShubmit = async (e) => {
    e.preventDefault();

    register(formik.values);
  };

  return (
    <div
      className=" 
        bg-cover bg-center h-screen bg-LoginBg
        px-12 py-2
        md:px-12
        lg:px-24
        xl:px-44
        2xl:px-64
      "
    >
      <Thought />
      <NavBar
        dynamicButton={<LoginButton content="Início" link="/" />}
        login={<LoginButton content="Entrar" link="/login" />}
        isLoginAndCreateAccountVisible={true}
      />

      <main
        className="
          bg-colorsDark bg-opacity-50 shadow-login
          rounded-tl-3xl rounded-br-3xl rounded

          m-auto sticky top-[16vh] px-8 pb-1
          
          lg:px-16 
          
          max-w-xl animate-float
        "
      >
        <div className="rotate-180 xl:hidden">
          <LoginAnimation />
        </div>
        <Text className="text-colorsIcons text-center py-4">
          Bem vindo ao espaço!
        </Text>
        <form onSubmit={(e) => handleShubmit(e)}>
          <FloatLabel
            pattern="[a-z\s][A-zÀ-ú][^0-9]+$"
            icon={<User className="w-6 h-6" />}
            floatText="Nome"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />

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

          <FloatLabel
            icon={<Lock className="w-6 h-6" />}
            floatText="Confirme sua senha"
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            ViewPassword={true}
          />
          {loading && <ElipseLoadingAnimation />}
          <Text className="text-colorsIcons w-fit m-auto hover:text-violet-500">
            {message}
          </Text>

          <div className="rotate-45 hidden xl:block">
            <LoginAnimation />
          </div>

          <div className="text-center pt-4 lg:pb-4">
            <Button className="text-xs ring-violet-500" text="Registrar" />
          </div>

          <NavLink
            className="
            text-[12px] w-32 m-auto text-center
            after:top-11 lg:after:top-6 lg:mb-4
          "
            content="Já é resgistrado? Entrar!"
            link="/login"
          />
        </form>
      </main>
    </div>
  );
}
