import { Text } from "../TextComponent/Text";
import { FnTypeWriter } from "../../animations/Typewriter/TypeWriter";
import { LinkedinButton } from "../../animations/SocialMediaButtonChange/LinkedinButton";
import { GithubButton } from "../../animations/SocialMediaButtonChange/GithubButton";

export const SocialMedia = () => {
  return (
    <div
      className="
    m-auto md:absolute w-60 mt-[15vh] text-center
    font-default font-bold text-sm
    md:w-[680px] h-24 md:h-40
    "
    >
      <div className="flex justify-center">
        <Text
          className="
           text-colorsText
            md:text-xl
          "
        >
          Space.Sullivan.
        </Text>

        <Text className="text-colorsIcons md:text-xl">
          <FnTypeWriter />
        </Text>
      </div>
      <Text
        className="
            text-[10px] text-center
            opacity-75 text-colorsText py-2
            md:text-sm
        "
      >
        Conecte-se comigo em um click...
      </Text>
      <div className="flex flex-row w-20 md:w-32 m-auto relative top-[-20px] md:top-[-40px] ">
          <LinkedinButton />
          <GithubButton />
      </div>
    </div>
  );
};
