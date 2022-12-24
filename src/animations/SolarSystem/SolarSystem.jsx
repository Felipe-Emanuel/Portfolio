import { useLottie } from "lottie-react";
import { useState } from "react";
import SolarSystemanimation from "./SolarSystem.json";

export const SolarSystem = () => {
  const [animationDirection, setAnimationDirection] = useState(1);

  const options = {
    animationData: SolarSystemanimation,
    autoplay: true,
    loop: true,
  };

  const { View, setDirection } = useLottie(options);

  

  const handleDirection = () => {
    animationDirection === 1 ? setAnimationDirection(-1) : setAnimationDirection(1);

    setDirection(animationDirection);
  };

  return (
    <div
      onClick={() => {
        handleDirection();
      }}
      className="transition-all hover:hue-rotate-60 animate-Astronaut w-[55vw] cursor-pointer m-auto my-2 lg:w-64 relative animate-float"
    >
      {View}
    </div>
  );
};
