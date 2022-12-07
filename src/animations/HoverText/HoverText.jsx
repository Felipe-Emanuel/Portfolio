export const HoverText = ({ children, className, text, icon }) => {
  return (
    <span
      className={
        `${className}
        hover:animate-HoverText flex items-center gap-4
        hover:text-colorsIcons cursor-default first:uppercase`
      }
    >
      {children}
      {text}
      {icon}
    </span>
  );
};
