import { GiCheckboxTree } from "@react-icons/all-files/gi/GiCheckboxTree";
import { HoverText } from "../../animations/HoverText/HoverText";

export const TextGroupMobile = () => {
  const text = ["inteligente", "tecnologia", "elegante", "responsiva", "..."];
  const splitedText = text.map((letter) => letter.split(""));

  return (
    <div
      className="
      
      absolute top-0 left-0 right-0

        w-60 h-28 mt-[25vh] m-auto text-colorsText
        font-default font-bold text-sm
      "
    >
      <div className=" justify-center items-center flex">
        {splitedText[1].map((letter) => (
          <HoverText key={Math.random()} text={letter} />
        ))}
      </div>

      <HoverText
        className="w-6 m-auto"
        icon={
          <GiCheckboxTree className="rotate-90 m-auto text-colorsIcons hover:text-colorsText" />
        }
      />

      <div className="flex justify-center gap-10 items-center">
        <div className="flex flex-col">
          <div className="w-[50%] flex text-center ">
            {splitedText[2].map((letter) => (
              <HoverText key={Math.random()} text={letter} />
            ))}
          </div>

          <HoverText
            className="w-6 m-auto"
            icon={
              <GiCheckboxTree className="rotate-90 m-auto text-colorsIcons hover:text-colorsText" />
            }
          />
        </div>

        <div className="flex flex-col">
          <div className=" w-[50%] flex text-center">
            {splitedText[0].map((letter) => (
              <HoverText key={Math.random()} text={letter} />
            ))}
          </div>

          <HoverText
            className="w-6 m-auto"
            icon={
              <GiCheckboxTree className="rotate-90 m-auto text-colorsIcons hover:text-colorsText" />
            }
          />
        </div>
      </div>

      <div className="flex text-colorsIcons justify-center items-center">
        <div className="w-[50%] absolute left-0 flex text-center">
          {splitedText[3].map((letter) => (
            <HoverText key={Math.random()} className='hover:text-white' text={letter} />
          ))}
        </div>
        <div className=" w-[50%] justify-end ml-10 flex text-center text-white">
          {splitedText[4].map((letter) => (
            <HoverText key={Math.random()} text={letter} />
          ))}
        </div>
      </div>
    </div>
  );
};
