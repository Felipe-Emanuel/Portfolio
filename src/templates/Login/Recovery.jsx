import * as yup from "yup";

import { Envelope } from "phosphor-react";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { LoginAnimation } from "../../animations/LoginAnimation/LoginAnimation";
import { Thought } from "../../animations/LoginAnimation/Thought";
import { Button } from "../../components/Button/Button";
import { FloatLabel } from "../../components/InputComponent/FloatLabel";
import { LoginButton } from "../../components/Menu/LoginButton";
import { NavBar } from "../../components/Menu/NavBar";
import { ModalRecovery } from "../../components/Modal/ModalRecovery";
import { Text } from "../../components/TextComponent/Text";
import { useFormik } from "../../hooks/useFormik";
import { AuthContext } from "../../contexts/Auth";
import { ElipseLoadingAnimation } from "../../animations/Loading/ElipseLoadingAnimation";

export function Recovery() {
  const { recoveryEmail, msg, modal, loading } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
  });

  async function validate() {
    const schema = yup.object().shape({
      email: yup.string().required().email(),
    });

    try {
      await schema.validate({ email: formik.values.email });
      setDisabled((disabled) => !disabled);
      return true;
    } catch (err) {
      return false;
    }
  }

  useEffect(() => {
    const checkValidate = async () => {
      if (!(await validate())) return;
    };

    checkValidate();
    formik.values.email.length <= 0 && setDisabled(true);
  }, [formik.values.email]);

  useEffect(() => {
    loading && setDisabled(true)
  }, [loading]);


  const handleSubmit = (e) => {
    e.preventDefault();

    recoveryEmail({
      email: formik.values.email,
    });
  };

  
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
      <NavBar
        dynamicButton={
          <LoginButton content="Início" link="/" className="mt-2" />
        }
        login={<LoginButton className="-mt-1" content="Entrar" link="/login" />}
        isLoginAndCreateAccountVisible={true}
      />
      <Thought />
      {modal && <ModalRecovery message={msg} retry={(e) => handleSubmit(e)} />}
      <main
        className="
          bg-colorsDark bg-opacity-50 shadow-login
          rounded-tl-3xl rounded-br-3xl rounded

          m-auto sticky top-[22vh] px-4 pb-1
          
          sm:px-16 
          
          max-w-xl animate-float
        "
      >
        <div className="rotate-180 xl:hidden">
          <LoginAnimation />
        </div>
        <Text color='text-colorsIcons' className="font-light text-3xl sm:text-lg text-center py-8 cursor-default">
          Recupere sua senha
        </Text>
        <Text color='text-colorsIcons' className="text-center py-8 cursor-default">
          Digite seu endereço de e-mail cadastrado e enviaremos um link para
          redefinição de senha.
        </Text>
        <form className="pb-8" onSubmit={(e) => handleSubmit(e)}>
          <FloatLabel
            icon={<Envelope className="w-6 h-6" />}
            floatText="Email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {loading && <ElipseLoadingAnimation />}
          <Text className="text-colorsIcons text-center text-sm py-4 cursor-default first-letter:uppercase">
            {msg}
          </Text>
          <div className="text-center pt-4 lg:pb-4">
            <Button
              disabled={disabled}
              className="text-xs ring-violet-500"
              text={disabled ? "Insira um E-mail válido" : "Recuperar Senha"}
            />
          </div>
          <div className="rotate-45 hidden xl:block">
            <LoginAnimation />
          </div>
        </form>
      </main>
    </div>
  );
}
