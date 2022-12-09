import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { LoginButton } from "../../components/Menu/LoginButton";
import { NavBar } from "../../components/Menu/NavBar";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import { TextGroupComponent } from "../../components/TextGroup/TextGroupComponent";

export const Home = () => {
  return (
    <div
      className={`
      w-[100vw] h-[100vh] bg-cover bg-HomeBg
      px-3 py-2
      md:px-12
      lg:px-24 
      xl:px-44
      2xl:px-64
      `}
    >
      <nav className="relative">
        <NavBar
          router="#"
          route={true}
          dynamicButton={<LoginButton content="Entrar" link="/login" />}
          Architecture={true}
        />
        <div className=" hidden right-0 absolute lg:flex lg:flex-row space-x-6 top-2">
          <LoginButton content="Entrar" link="/login" />
          <Link to="/createaccount">
            <Button text="Criar Conta" />
          </Link>
        </div>
      </nav>
      <SocialMedia />
      <TextGroupComponent />
    </div>
  );
};
