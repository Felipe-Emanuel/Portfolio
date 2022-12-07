import { useLottie } from "lottie-react";
import { useState } from "react";
import Linkedin from "./linkedin.json";

export const LinkedinButton = () => {
  const [animation, setAnimation] = useState(false);

  const options = {
    animationData: Linkedin,
    autoplay: animation,
    loop: animation,
  };

  const { View } = useLottie(options);
  return (
    <a
      onClick={() => setAnimation(!options.loop)}
      onMouseLeave={() => setAnimation(!options.loop)}
      className="top-5 relative "
      href="https://www.linkedin.com/in/felipe-emanuel-/"
      target="_blank"
    >
      {View}
    </a>
  );
};
