import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HoverText } from "../../animations/HoverText/HoverText";
import { SolarSystem } from "../../animations/SolarSystem/SolarSystem";
import { AuthContext } from "../../contexts/Auth";
import { Button } from "../Button/Button";
import { Text } from "../TextComponent/Text";

export function Modal() {
  const navigate = useNavigate();

  const { userName } = useContext(AuthContext);
  const uppercase = userName.split(" ")[0].charAt(0).toUpperCase();
  const nomalize = userName.split(" ")[0].slice(1);
  const nomalizedUserName = uppercase + nomalize;
  const user = nomalizedUserName.split("");

  const handleArchitecture = () => {
    navigate("/privateloading");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="backdrop-blur-md z-20 shadow-innerDefault absolute inset-0 pt-8">
      <Text className="flex justify-center text-lg py-4 cursor-default">
        <Text color="text-colorsIcons" className="mx-2">
          Olá
        </Text>
        {user.map((letter) => (
          <HoverText key={Math.random()} text={letter} />
        ))}
        !
      </Text>

      <Text className="text-colorsText font-thin text-center py-4 cursor-default">
        Gostaria de viajar para a Aqruitetura do espaço?
      </Text>
      <SolarSystem />
      <div className="lg:justify-between justify-center flex flex-wrap">
        <Button
          className="m-2 lg:mx-28 xl:mx-44 2xl:mx-60"
          text="Viajar para Arquitetura"
          onClick={() => handleArchitecture()}
        />
        <Button
          className="m-2 px-[3.2rem] lg:mx-28 xl:mx-44 2xl:mx-60"
          text="Viajar para o Início"
          onClick={() => handleHome()}
        />
      </div>
    </div>
  );
}
