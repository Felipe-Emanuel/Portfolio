import { useLottie } from "lottie-react";
import { useState } from "react";
import GitHub from "./guthub.json";

export const GithubButton = () => {
  const [animation, setAnimation] = useState(false);

  const options = {
    animationData: GitHub,
    autoplay: animation,
    loop: animation,
  };

  const { View } = useLottie(options);
  return (
    <a
      onClick={() => setAnimation(!options.loop)}
      onMouseLeave={() => setAnimation(!options.loop)}
      className="top-5 relative "
      href="https://github.com/Felipe-Emanuel"
      target="_blank"
    >
      {View}
    </a>
  );
};
