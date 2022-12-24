import Typewriter from "typewriter-effect";

export const FnTypeWriter = () => {
  const text = ["Linkedin...", "Github..."]
  
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {

          setInterval(() => {

            typewriter

            .typeString(text[0])
            .pauseFor(1500)
            .deleteAll()
            .typeString(text[1])
            .pauseFor(1500)
            .deleteAll()
            .typeString('..')
            .pauseFor(1500)
            .deleteAll()

            .start();
          }, 1500)
        }}
      />
    </div>
  );
};
