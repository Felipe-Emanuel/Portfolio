import { NavLink } from "./NavLink";
import { Button } from "../Button/Button";
import { ArchitectureButton } from "../Button/ArchitectureButton";

export const  MobileMenu = () => {
  const links = ["#projetos", "#sobre", "#contato"];

  return (
    <div
      className="
        absolute inset-0 inset-y-10 m-auto transition-colors
        text-center shadow-innerDefault font-default rounded-lg
        bg-colorsDark ring-1 ring-default

        sm:left-[50%]

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
            link="/ArchitectureButton"
            content="Arquitetura"
          />
        </div>
      </div>
      <a href="/createaccount" className="absolute bottom-5 left-0 right-0">
        <Button text="Criar Conta" />
      </a>
    </div>
  );
};
