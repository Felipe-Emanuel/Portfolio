import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";
import { ArchitectureButton } from "../Button/ArchitectureButton";
import { Link } from "react-router-dom";

export const NavBar = ({
  className,
  visible,
  Architecture,
  route,
  handleCLick,
  dynamicButton,
  login,
  logoff,
  createAccount,
  MenuChange,
}) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const links = ["#projetos", "#sobre", "#contato"];

  const handleChangeNavBar = () => {
    setMenuOpened(isMenuOpened => !isMenuOpened)
    handleCLick();
  };

  const handleBlur = () => {
    setTimeout(() => {
      handleCLick();
      setMenuOpened(!menuOpened);
    }, 300);
  };

  return (
    <nav className={`${className} relative`}>
      <div onClick={() => handleChangeNavBar()}>{MenuChange}</div>
      <div className="lg:hidden">
        <div className="z-50 text-sm w-12">{dynamicButton}</div>
      </div>
      <div className="hidden lg:flex lg:space-x-9 py-2 space-x-2">
        <NavLink content="Início" link="/" />
        {route &&
          links.map((link) => {
            return <NavLink key={link} content={link.split("#")} link={link} />;
          })}
        {Architecture && (
          <ArchitectureButton link="#Architecture" content="Arquitetura" />
        )}
      </div>
      {visible && (
        <div className="right-0 absolute flex space-x-6 top-2">
          {login}
          {logoff}
          <Link to="/createaccount">{createAccount}</Link>
        </div>
      )}
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
