export const ArchitectureButton = ({ content, link }) => {
  return (
    <button
      className="
        text-colorsIcons text-md font-bold relative py-5 lg:py-0

        after:absolute after:bottom-3 after:left-[50%]
        after:w-0 after:h-1 after:bg-colorsText after:transition-all

        hover:after:left-[15%] hover:after:w-[70%] 
        
        after:top-14 lg:after:top-9
      "
    >
      <a href={link} aria-label={content}>
        {content}
      </a>
    </button>
  );
};
