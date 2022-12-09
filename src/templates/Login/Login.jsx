import { Envelope } from "phosphor-react";
import { Lock } from "phosphor-react";

import { LoginAnimation } from "../../animations/LoginAnimation/LoginAnimation";

import { Text } from "../../components/TextComponent/Text";
import { Button } from "../../components/Button/Button";
import { NavLink } from "../../components/Menu/NavLink";
import { CheckBox } from "../../components/InputComponent/CheckBox";
import { FloatLabel } from "../../components/InputComponent/FloatLabel";
import { Thought } from "../../animations/LoginAnimation/Thought";
import { NavBar } from "../../components/Menu/NavBar";
import { LoginButton } from "../../components/Menu/LoginButton";

export function Login() {
  return (
    <div
      className=" 
        bg-cover bg-center h-screen bg-LoginBg
        px-3 py-2 z-0
        md:px-12
        lg:px-24
        xl:px-44
        2xl:px-64
      "
    >
      <NavBar
        dynamicButton={<LoginButton content="Início" link="/" />}
        createAccount={<Button text="Criar Conta" />}
        visible={true}
      />
      <Thought />

      <main
        className="
          bg-colorsDark bg-opacity-50 shadow-login
          rounded-tl-3xl rounded-br-3xl rounded

          m-auto sticky top-[22vh] px-4 pb-1
          
          lg:px-16 
          
          max-w-2xl animate-float
        "
      >
        <div className="rotate-180 xl:hidden">
          <LoginAnimation />
        </div>
        <Text className="text-colorsIcons text-center py-8 cursor-default">
          Bem vindo ao espaço!
        </Text>
        <form>
          <FloatLabel
            icon={<Envelope className="w-6 h-6" />}
            floatText="Email"
            type="email"
          />

          <FloatLabel
            icon={<Lock className="w-6 h-6" />}
            floatText="Senha"
            type="password"
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

            <button className="hover:text-violet-500">
              Esqueceu sua senha?
            </button>
          </div>

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
