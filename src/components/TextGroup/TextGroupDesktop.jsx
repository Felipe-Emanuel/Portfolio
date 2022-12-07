import { GiCheckboxTree } from "@react-icons/all-files/gi/GiCheckboxTree";
import { HoverText } from "../../animations/HoverText/HoverText";

export const TextGroupDesktop = () => {
  const text = ["inteligente", "tecnologia", "elegante", "responsiva", "..."];
  const splitedText = text.map((letter) => letter.split(""));

  return (
    <div
      className="
        w-[650px] h-[195px] mt-[50vh] text-colorsText 
         absolute top-0 right-0 text-lg font-default font-bold
      "
    >
      <div className="justify-center flex">
        {splitedText[0].map((letter) => (
          <HoverText key={Math.random()} text={letter} />
        ))}
        <HoverText
          icon={
            <GiCheckboxTree className="mx-2 text-colorsIcons hover:text-colorsText" />
          }
        />
      </div>
      <div className="right-[10rem] top-[-3rem] absolute flex ">
        {splitedText[4].map((letter) => (
          <HoverText key={Math.random()} text={letter} />
        ))}
      </div>
      <div className="w-16 flex">
        {splitedText[1].map((letter) => (
          <HoverText key={Math.random()} text={letter} />
        ))}
        <HoverText
          icon={
            <GiCheckboxTree className="mx-2 text-colorsIcons hover:text-colorsText" />
          }
        />
      </div>
      <div className="justify-center flex">
        {splitedText[2].map((letter) => (
          <HoverText key={Math.random()} text={letter} />
        ))}

        <HoverText
          icon={
            <GiCheckboxTree className="mx-2 text-colorsIcons hover:text-colorsText" />
          }
        />
      </div>
      <div className="justify-end flex text-colorsIcons">
        {splitedText[3].map((letter) => (
          <HoverText
            key={Math.random()}
            className="hover:text-white"
            text={letter}
          />
        ))}
      </div>
    </div>
  );
};
