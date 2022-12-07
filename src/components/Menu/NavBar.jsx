import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";
import { ArchitectureButton } from "../Button/ArchitectureButton";

export const NavBar = ({
  route,
  closingNavBarButton,
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
    setMenuOpened(!menuOpened);
    handleCLick();
  };
  
  const handleBlur = () => {
    setTimeout(() => {
      handleCLick();
      setMenuOpened(!menuOpened);
    }, 300);
    closingNavBarButton()
  };

  return (
    <nav className="relative ">
      <div onClick={() => handleChangeNavBar()}>{MenuChange}</div>
      <div className="lg:hidden">
        <div className="z-50 text-sm w-12">{dynamicButton}</div>
      </div>
      <div className="hidden lg:flex lg:space-x-9 py-2 space-x-2">
        <NavLink content="Início" link="/" />
        {links.map((link) => {
          return <NavLink key={link} content={link.split("#")} link={`${route}${link}`.split("#")} />;
        })}
        <ArchitectureButton link="/ArchitectureButton" content="Arquitetura" />
        <div className="right-0 absolute flex space-x-6 top-2">
          {login}
          {logoff}
          <a href="/createaccount">{createAccount}</a>
        </div>
      </div>
      {menuOpened === true ? (
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
      ) : null}
    </nav>
  );
};
