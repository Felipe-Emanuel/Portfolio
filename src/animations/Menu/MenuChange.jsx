import { useLottie } from "lottie-react";
import { useEffect } from "react";
import { useState } from "react";
import ChangeMenu from "./Menu.json";

export const MenuChange = ({ closing }) => {
  const [animationDirection, setAnimationDirection] = useState(closing);

  useEffect(() => {
    closing === false ? setAnimationDirection(-1) : setAnimationDirection(1);
    setDirection(animationDirection);

    play()
  }, [closing]);

  const options = {
    animationData: ChangeMenu,
    autoplay: false,
    loop: 0,
  };

  const { View, play, setDirection } = useLottie(options);
  return (
    <button
      onClick={() => {
        play();
      }}
      className="right-0 top-2 absolute w-8 lg:hidden z-50"
      aria-label="Menu Mobile"
    >
      {View}
    </button>
  );
};
