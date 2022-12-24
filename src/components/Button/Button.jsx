export const Button = ({ text, className, onClick, disabled, type, title }) => {
  return (
    <button
      title={title}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={` ${className}
        disabled:cursor-not-allowed disabled:after:ring-white disabled:ring-red-500
        disabled:text-white disabled:hover:text-red-500

        transform

        hover:bg-transparent bg-transparent duration-300 hover:ring-colorsIcons

        after:absolute after:bottom-0 after:ring-2 after:ring-violet-500 after:invisible hover:after:visible after:rounded 
        after:w-0 after:h-full after:duration-300

        hover:after:w-full after:right-0 hover:after:left-0

        text-sm m-auto bg-opacity-20
        bg-colorsText text-colorsIcons ring-1 ring-default
        text-center sm:px-8 px-2 sm:py-2 py-1 shadow-innerDefault font-default
        font-bold transition-all rounded
        hover:text-colorsText hover:shadow-innerHover hover:bg-colorsDark
        focus:ring-violet-500
        `}
    >
      {text}
    </button>
  );
};
