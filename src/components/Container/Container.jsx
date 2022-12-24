export function Container({ children, bg, id }) {
  return (
    <section
      id={id}
      className={`
      h-[100vh] ${bg} bg-cover
      px-3 py-2
      md:px-12
      lg:px-24 
      xl:px-44
      2xl:px-64
      `}
    >
      {children}
    </section>
  );
}
