import { useLottie } from "lottie-react";
import loading from "./Loading.json";

export const LoadingAnimation = () => {
  const options = {
    animationData: loading,
    autoplay: true,
    loop: true,
  };

  const { View } = useLottie(options);
  return <div className="z-20 absolute md:left-[25%] md:right-[25%] md:w-[45vw]">{View}</div>;
};