import { Home } from "../templates/SPA/Home";
import { Projects } from "../templates/SPA/Projects";
import { About } from "../templates/SPA/About";
import { Contact } from "../templates/SPA/Contact";
import { Architecture } from "../templates/SPA/Architecture";

export function Page() {
  return (
    <>
      <Home />
      <Projects />
      <About />
      <Contact />
      <Architecture />
    </>
  );
}
