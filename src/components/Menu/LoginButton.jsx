import { Link } from "react-router-dom";

export const LoginButton = ({ content, link, className }) => {
  return (
    <>
      <div
        className={`${className}
          text-colorsText lg:text-md font-bold relative top-2 lg:top-0

          after:absolute after:bottom-3 after:left-[50%]
          after:w-0 after:h-1 after:bg-colorsIcons after:transition-all

          hover:after:left-[15%] hover:after:w-[70%] 
          
          after:top-7 lg:after:top-9
        `}
      >
        <a href={link} aria-label={content}>
          {content}
        </a>
      </div>
    </>
  );
};