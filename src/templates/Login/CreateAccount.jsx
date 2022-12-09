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

export function CreateAccount() {
  return (
    <div
      className=" 
        bg-cover bg-center h-screen bg-LoginBg
        px-3 py-2
        md:px-12
        lg:px-24
        xl:px-44
        2xl:px-64
      "
    >
      <NavBar
        dynamicButton={<LoginButton content="Início" link="/" />}
        login={<LoginButton content="Entrar" link="/login" />}
        visible={true}
      />

      <Thought />

      <main
        className="
          bg-colorsDark bg-opacity-50 shadow-login
          rounded-tl-3xl rounded-br-3xl rounded

          m-auto sticky top-[16vh] px-8 pb-1
          
           lg:px-16 
          
          max-w-2xl animate-float
        "
      >
        <div className="rotate-180 xl:hidden">
          <LoginAnimation />
        </div>

        <Text className="text-colorsIcons text-center py-4">
          Bem vindo ao espaço!
        </Text>
        <form>
          <FloatLabel
            icon={<User className="w-6 h-6" />}
            floatText="Nome"
            type="text"
          />

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

          <FloatLabel
            icon={<Lock className="w-6 h-6" />}
            floatText="Confirme sua senha"
            type="password"
          />

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
