import { NavLink } from "../components/Menu/NavLink";
import { Button } from "../components/Button/Button";
import { LoginButton } from "../components/Menu/LoginButton";
import { NavBar } from "../components/Menu/NavBar";

export function ArchitecturePage() {

  return (
   
      <div
        className=" 
        bg-cover bg-center h-screen bg-ArchitectureBg
        px-3 py-2 z-0
        md:px-12
        lg:px-24
        xl:px-44
        2xl:px-64
      "
      >
        <nav className="relative flex lg:block items-center justify-between">
        <NavBar
          dynamicButton={<LoginButton content="Entrar" link="/login" />}
          logoff={<Button text="Sair" />}
        />
        <NavLink link='/' content='Início' className='lg:hidden'/>
      
      </nav>
      </div>
  );
}
