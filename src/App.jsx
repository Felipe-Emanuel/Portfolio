import "../src/styles/global.css";
import { Overlay } from "./components/Overlay/Overlay";
import { NavBar } from "./components/Menu/NavBar";
import { useEffect, useState } from "react";
import { AllRoutes } from "./Routes/Routes";
import { MenuChange } from "./animations/Menu/MenuChange";

function App() {
  const [onBlur, setOnBlur] = useState(false);
  const [closing, setClosing] = useState(false);

  function bluSetup() {
    setOnBlur(!onBlur);
  }

  return (
    <>
      {onBlur === false ? (
        <>
          <nav className="px-8 py-2">
            <NavBar
              handleCLick={() => bluSetup()}
              MenuChange={<MenuChange closing={!closing} />}
            />
          </nav>
          <main className="absolute inset-0">
            <AllRoutes />
          </main>
        </>
      ) : (
        <>
          <nav className="px-8 py-2">
            <NavBar
              closingNavBarButton={() => {
                setClosing(closing);
                console.log("LINK CLICADO:", closing);
              }}
              handleCLick={() => bluSetup()}
              MenuChange={<MenuChange closing={closing} />}
            />
          </nav>
          <Overlay>
            <AllRoutes />
          </Overlay>
        </>
      )}
    </>
  );
}

export default App;
