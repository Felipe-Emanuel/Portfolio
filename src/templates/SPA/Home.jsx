import { Button } from "../../components/Button/Button";
import { LoginButton } from "../../components/Menu/LoginButton";
import { NavBar } from "../../components/Menu/NavBar";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import { TextGroupComponent } from "../../components/TextGroup/TextGroupComponent";

export const Home = () => {
  return (
    <div
      className="
        w-[100vw] h-[100vh] bg-cover bg-HomeBg
        px-3 py-2
        md:px-12
        lg:px-24
        xl:px-44
        2xl:px-64
      "
    >
      <NavBar
        route='#'
        dynamicButton={<LoginButton content="Entrar" link="/login" />}
        login={<LoginButton content="Entrar" link="/login" />}
        createAccount={<Button text="Criar Conta" />}
      />
      <SocialMedia />
      <TextGroupComponent />
    </div>
  );
};
