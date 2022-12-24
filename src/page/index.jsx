import { Home } from "../templates/SPA/Home";
import { Projects } from "../templates/SPA/Projects";
import { About } from "../templates/SPA/About";
import { Contact } from "../templates/SPA/Contact";
import { Architecture } from "../templates/SPA/Architecture";
import { NavBar } from "../components/Menu/NavBar";
import { useState } from "react";
import { MenuChange } from "../animations/Menu/MenuChange";
import { Overlay } from "../components/Overlay/Overlay";

export function Page() {
  const [onBlur, setOnBlur] = useState(false);
  const closing = false;

  function bluSetup() {

    setOnBlur(onBlur => !onBlur);
  }

  const pages = [
    <section key={Math.random()}>
      <Home />
      <Projects />
      <About />
      <Contact />
      <Architecture />
    </section>,
  ];

  return (
    <>

      {onBlur === false ? (
        <>
          <div className="px-2 py-2">
            <NavBar
              handleCLick={() => bluSetup()}
              openMenuChange={<MenuChange closing={!closing} />}
            />
          </div>
          <main className="absolute inset-0">{pages}</main>
        </>
      ) : (
        <>
          <div className="px-2 py-2">
            <NavBar
              handleCLick={() => bluSetup()}
              openMenuChange={<MenuChange closing={closing} />}
            />
          </div>
          <Overlay>{pages}</Overlay>
        </>
      )}
    </>
  );
}
