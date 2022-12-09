export const Button = ({ text, className }) => {
    return (
        <button className={` ${className}
            text-sm m-auto bg-opacity-20
            bg-colorsText text-colorsIcons ring-1 ring-default
            text-center px-8 py-2 shadow-innerDefault font-default
            font-bold transition-all rounded-lg
            hover:text-colorsText hover:ring-colorsDark hover:shadow-innerHover hover:bg-colorsDark
            focus:ring-colorsText
        `}>
            {text}
        </button>
    );
};
