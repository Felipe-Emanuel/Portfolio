import { Hash, Lock } from "phosphor-react";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { ElipseLoadingAnimation } from "../../animations/Loading/ElipseLoadingAnimation";
import { Button } from "../../components/Button/Button";
import { FloatLabel } from "../../components/InputComponent/FloatLabel";
import { LoginButton } from "../../components/Menu/LoginButton";
import { NavBar } from "../../components/Menu/NavBar";
import { Text } from "../../components/TextComponent/Text";
import { AuthContext } from "../../contexts/Auth";
import { useFormik } from "../../hooks/useFormik";

export function NewPassword() {
  const { recoveryPass, loading, msg, userEmail } = useContext(AuthContext);
  const [message, setMessage] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: userEmail,
      token: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { token, password, confirmPassword } = formik.values;

  useEffect(() => {
      token.length || password.lengh || confirmPassword.lengh > 0
        ? setMessage(msg)
        : setMessage("");
  }, [msg]);

  useEffect(() => {
    password === confirmPassword && confirmPassword.length >= 8 ?
      setDisabled(false): setDisabled(true);
  }, [confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();

    recoveryPass(formik.values);
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
      <NavBar dynamicButton={<LoginButton content="Início" link="/" />}/>
      <main
        className="
          bg-colorsDark bg-opacity-50 shadow-login
          rounded-tl-3xl rounded-br-3xl rounded

          m-auto sticky top-[22vh] px-4 pb-1
          
          sm:px-16 
          
          max-w-xl animate-float
        "
      >
        <Text className="text-colorsIcons font-light text-3xl sm:text-lg text-center py-8 cursor-default">
          Recupere sua senha
        </Text>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="py-8 m-auto md:max-w-[80vw] lg:max-w-2xl"
        >
          <FloatLabel
          icon={<Hash className="w-6 h-6" />}
            floatText="Insira seu Token de confirmação"
            type="text"
            name="token"
            value={formik.values.token}
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
          <Text className="text-colorsIcons text-center text-sm wwcursor-default first-letter:uppercase">
            {message}
          </Text>
          <div className="text-center pt-12 lg:pb-4">
            <Button
              disabled={disabled}
              className="text-xs ring-violet-500"
              text={disabled ? "Alterar senha" : "Confirmar alteração"}
            />
          </div>
        </form>
      </main>
    </div>
  );
}
