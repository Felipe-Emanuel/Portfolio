import { useLottie } from "lottie-react";
import ElipseLoading from "./ElipseLoading.json";

export const ElipseLoadingAnimation = () => {
  const options = {
    animationData: ElipseLoading,
    autoplay: true,
    loop: true,
  };

  const { View } = useLottie(options);
  return <div className="m-auto h-0 w-24 bottom-7 relative">{View}</div>;
};