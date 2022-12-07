import { useLottie } from "lottie-react";
import AstronautThinking from "./Thought.json";

export const Thought = () => {
  const options = {
    animationData: AstronautThinking,
    autoplay: true,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <div
      className="
        animate-Astronaut absolute
        hidden lg:block w-32 inset-y-12
      "
    >
      {View}
    </div>
  );
};
