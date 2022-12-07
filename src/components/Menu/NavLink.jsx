import { Link } from "react-router-dom";

export const NavLink = ({ content, link, className }) => {
  return (
    <>
      <div
        className={`
          ${className}

          text-colorsText text-md font-light relative py-5 lg:py-0
         
          first-letter:uppercase
          first-letter:text-colorsIcons
          hover:first-letter:text-colorsText

          after:absolute after:bottom-3 after:left-[50%]
          after:w-0 after:h-1 after:bg-colorsIcons after:transition-all

          hover:after:left-[15%] hover:after:w-[70%] 

          after:top-14 lg:after:top-9
        `}
      >
        <a href={link} aria-label={content}>
          {content}
        </a>
      </div>
    </>
  );
};
