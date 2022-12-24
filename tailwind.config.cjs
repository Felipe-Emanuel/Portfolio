/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        colorsIcons: "#15F4F4",
        colorsText: "#EEEEEE",
        colorsDark: "#00070C",
      },
      ringColor: {
        default: "#15F4F4",
      },
      borderColor: {
        default: "#15F4F4",
        white: "#FFF",
      },
      boxShadow: {
        innerDefault: "inset 0px 0px 60px -35px rgba(240, 248, 255, 0.75)",
        innerHover: "inset 0px 0px 60px -35px #15F4F4",
        login: "inset 0px 0px 60px -25px rgb(139, 92, 246)",
      },
      backgroundImage: {
        HomeBg: "url('/src/assets/image/HomeBg.jpg')",
        PageBg: "url('/src/assets/image/PageBg.jpg')",
        ArchitectureBg: "url('/src/assets/image/Architecture.webp')",
        LoginBg: "url('/src/assets/image/LoginBg.webp')",
      },
      backgroundColor: {
        colorsIcons: "#15F4F4",
        colorsText: "#EEEEEE",
        colorsDark: "#00070C",
        colorLoading: "#362450"
      },
      fontFamily: {
        default: "'Ubuntu', sans-serif",
      },
      fontSize: {
        xs: 12,
        sm: 18,
        md: 24,
        lg: 39,
        xl: 58,
        "2xl": 72,
      },
      keyframes: {
        appear: {
          "0%": { transform: " translatex(-100vw)" },
          "50%": { transform: "scale(0.25)" },
        },

        HoverText: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "15%": { transform: " translatey(-0.5rem)" },
          "25%": { transform: " translatey(0.2rem)" },
          "50%": { transform: "rotate(3deg)" },
        },

        float: {
          "0%, 100%": { transform: "translatey(0vw)" },
          "50%": { transform: "translatey(-5vw)" },
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        Astronaut: {
          "0%, 100%": { transform: "translatex(0vw)" },
          "50%": { transform: "translatex(-5vw)" },
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(30deg)" },
        },
      },
      animation: {
        appear: "appear 300ms linear 1",
        HoverText: "HoverText 700ms infinite ease-in-out",
        float: "float 10s ease-in-out infinite",
        Astronaut: "Astronaut 20s linear infinite",
      },
    },
  },
  plugins: [],
};
