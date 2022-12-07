export function Overlay({ children}) {
  return (
    <section
      className='
        blur-sm pointer-events-none lg:pointer-events-auto
        lg:blur-none absolute inset-0 w-full h-full'
    >
      {children}
    </section>
  );
}
