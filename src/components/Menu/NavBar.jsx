import { useContext } from "react";

import { AuthContext } from "../../contexts/Auth";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";
import { ArchitectureButton } from "../Button/ArchitectureButton";
import { Link } from "react-router-dom";
import { LoginButton } from "./LoginButton";
import { Button } from "../Button/Button";

export const NavBar = ({
  HomeNavBar,
  className,
  isLoginAndCreateAccountVisible,
  isArchitectureButtonActive,
  isRouteActive,
  handleCLick,
  dynamicButton,
  login,
  logoff,
  createAccount,
  openMenuChange,
}) => {
  const { logout, authenticated } = useContext(AuthContext);
  const [menuOpened, setMenuOpened] = useState(false);
  const links = ["#projetos", "#sobre", "#contato"];

  const handleChangeNavBar = () => {
    setMenuOpened((isMenuOpened) => !isMenuOpened);
    handleCLick();
  };

  const handleBlur = () => {
    setTimeout(() => {
      handleCLick();
      setMenuOpened((menuOpened) => !menuOpened);
    }, 300);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className={`${className} relative`}>
      <div onClick={() => handleChangeNavBar()}>{openMenuChange}</div>
      <div className="lg:hidden">
        {authenticated ? (
          <div onClick={() => handleLogout()}>{logoff}</div>
        ) : (
          <div className="z-50 text-sm w-12">{dynamicButton}</div>
        )}
      </div>
      <div className="hidden lg:flex lg:space-x-9 py-2 space-x-2">
        <NavLink content="Início" link="/" />
        {isRouteActive &&
          links.map((link) => {
            return <NavLink key={link} content={link.split("#")} link={link} />;
          })}
        {isArchitectureButtonActive && (
          <ArchitectureButton link="#Architecture" content="Arquitetura" />
        )}
      </div>
      <div className="hidden right-0 absolute lg:flex space-x-6 top-2">
        {authenticated && <div onClick={() => handleLogout()}>{logoff}</div>}
      </div>
      {isLoginAndCreateAccountVisible && (
        <div className="right-0 absolute flex space-x-6 top-2">
          {login}
          <Link to="/createaccount">{createAccount}</Link>
        </div>
      )}
      {HomeNavBar && <div className=" hidden right-0 absolute lg:flex lg:flex-row space-x-6 top-2">
          {!authenticated && 
          <>
            <LoginButton content="Entrar" link="/login" />
            <Link to="/createaccount">
              <Button text="Criar Conta" />
            </Link>
          </>
          }
        </div>}
      {menuOpened && (
        <>
          <div
            onClick={() => handleBlur()}
            className="
              z-50 transition-all animate-appear
              top-[3vh] md:left-48 left-0 right-0 absolute
            "
          >
            <MobileMenu />
          </div>
        </>
      )}
    </nav>
  );
};
