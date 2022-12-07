import { useLottie } from "lottie-react";
import planet from "./LoginAnimation.json";

export const LoginAnimation = () => {
  const options = {
    animationData: planet,
    autoplay: true,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <div
      className="
        rotate-[340deg]
        pointer-events-none absolute top-[-15vh] w-screen left-[15vw] 
        sm:top-[-25vh] sm:left-[8vw]
        md:left-[10vw]
        lg:left-[20vw]
        xl:w-[27vw] xl:top-[-35vw] xl:left-24
        max-w-2xl
      "
    >
      {View}
    </div>
  );
};
