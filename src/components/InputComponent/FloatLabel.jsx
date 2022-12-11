import { Eye, EyeClosed } from "phosphor-react";
import { useState } from "react";

export const FloatLabel = ({
  pattern,
  floatText,
  type,
  className,
  icon,
  ViewPassword,
  name,
  value,
  onChange,
}) => {
  const [view, setView] = useState(type);
  const handleViewPassword = () => {
    setView("text");
  };
  const handleHiddePassword = () => {
    setView("password");
  };
  return (
    <>
      <span className="relative -bottom-9 z-0 left-2 text-colorsIcons">
        {icon}
      </span>
      <div className={`${className} relative mb-2`}>
        <input
          pattern={pattern}
          onChange={onChange}
          value={value}
          name={name}
          type={(type = view)}
          id={floatText}
          className="
            truncate w-full lowercase px-10 h-12 py-4 appearance-none
            opacity-75 focus:opacity-100 bg-transparent

           text-violet-500 focus:text-colorsIcons

            ring-1 ring-opacity-25 focus:ring-opacity-50 ring-violet-500 
            focus-within:shadow-md focus-within:shadow-violet-500
          
            focus:pb-2.5 pt-4 text-xs font-bold rounded-lg focus:outline-none peer
          "
          placeholder=" "
        />
        {ViewPassword && (
          <span
            onMouseEnter={() => handleViewPassword()}
            onMouseLeave={() => handleHiddePassword()}
            onTouch={() => handleViewPassword()}
            className="absolute bottom-4 top-3 right-2 text-colorsIcons"
          >
            {view === "password" ? (
              <EyeClosed className="h-6 w-6" />
            ) : (
              <Eye className="h-6 w-6" />
            )}
          </span>
        )}

        <label
          htmlFor={floatText}
          className="
            absolute scale-75 z-10 origin-[0] px-2 pt-1 

            transform duration-300 -translate-y-7
            peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-2
            peer-placeholder-shown:top-1/3 peer-focus:top-3 peer-focus:scale-85
            peer-focus:px-2 peer-focus:text-colorsIcons peer-focus:-translate-y-4 left-8

            font-light text-xs md:text-sm
            text-colorsText

            md:pt-0
           "
        >
          {floatText}
        </label>
      </div>
    </>
  );
};
