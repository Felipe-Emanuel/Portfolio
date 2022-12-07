export const FloatLabel = ({ floatText, type, className, icon }) => {
  return (
    <>
      <span className="relative -bottom-9 z-0 left-2 text-colorsIcons">
        {icon}
      </span>
      <div className={`${className} relative mb-2`}>
        <input
          type={type}
          id={floatText}
          className="
            truncate w-full lowercase px-10 h-12 py-4 appearance-none
            opacity-75 focus:opacity-100 bg-transparent

           text-violet-500 focus:text-colorsIcons

            ring-1 ring-violet-500 
            focus-within:shadow-md focus-within:shadow-violet-500
          
            focus:pb-2.5 pt-4 text-xs font-bold rounded-lg focus:outline-none peer
          "
          placeholder=" "
        />
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
