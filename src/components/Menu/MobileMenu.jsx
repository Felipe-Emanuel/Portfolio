import { NavLink } from "./NavLink";
import { Button } from "../Button/Button";
import { ArchitectureButton } from "../Button/ArchitectureButton";
import { Link } from "react-router-dom";

export const  MobileMenu = () => {
  const links = ["#projetos", "#sobre", "#contato"];

  return (
    <div
      className="
        fixed inset-0 mt-16 left-[15%] right-[15%] sm:mx-10 transition-colors
        text-center shadow-innerDefault font-default rounded-lg
        bg-colorsDark ring-1 ring-default

        sm:left-[50%] sm:right-0

        lg:hidden

        max-w-sm max-h-fit 
      "
    >
      <div className="py-[14vh] w-36 m-auto">
        <div className="relative -top-16">
          <NavLink content="Início" link="/" />

          {links.map((link) => {
            return <NavLink key={link} content={link.split("#")} link={link} />;
          })}
          <ArchitectureButton
            link="#Architecture"
            content="Arquitetura"
          />
        </div>
      </div>
      <Link to="/createaccount" className="w-fit m-auto absolute bottom-5 left-0 right-0">
        <Button text="Criar Conta" />
      </Link>
    </div>
  );
};
