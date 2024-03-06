import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";

const pxToRem = (dest: number) => 1 / (16 / dest);

export default <Config>{
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        min: "-1",
        1: "1",
        2: "2",
        100: "100",
        max: "9999",
      },
    },
    screens: {
      sm: `${pxToRem(480)}rem`,
      md: `${pxToRem(780)}rem`,
      lg: `${pxToRem(1120)}rem`,
      xl: `${pxToRem(1440)}rem`,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: `${pxToRem(16)}rem`,
        md: `${pxToRem(24)}rem`,
        lg: `${pxToRem(40)}rem`,
        xl: `${pxToRem(76)}rem`,
      },
    },
    colors: {
      light: "#FFFFFF",
      dark: "#0C0C0C",
      night: "#000000",
      grey: {
        50: "#9F9F9F",
        100: "#686868",
        200: "#272727",
        300: "#181818",
        400: "#151515",
      },
      accent: {
        100: "#6BEFFF",
        200: "#F4AFFF",
      },
      neg: {
        200: "#FF8B8B",
      },
      gradient: {
        100: "#D1E9CC",
        900: "#03C5DC",
      },
      transparent: "transparent",
      current: "currentColor",
    },
    borderRadius: {
      none: "0",
      xs: `${pxToRem(4)}rem`,
      sm: `${pxToRem(8)}rem`,
      DEFAULT: `${pxToRem(16)}rem`,
      circle: "100%",
      full: "9999px",
    },
    backgroundImage: ({ theme }) => ({
      none: "none",
      gradient: `linear-gradient(88deg, ${theme("colors.gradient.100")} 0%, ${theme("colors.gradient.900")} 100%)`,
      link: `linear-gradient(88deg, ${theme("colors.gradient.100")} 0%, ${theme("colors.gradient.900")} 33.333%, ${theme("colors.gradient.100")} 66.66%, ${theme("colors.gradient.900")} 100%)`,
    }),
    fontFamily: {
      interVar: ['"Inter var"', defaultTheme.fontFamily.sans],
      interNormal: ["Inter", defaultTheme.fontFamily.sans],
      termina: ["Termina", defaultTheme.fontFamily.sans],
      roboto: ["Roboto", defaultTheme.fontFamily.mono],
    },
    fontSize: {
      0: "0",
      50: [`${pxToRem(8)}rem`, { lineHeight: `${pxToRem(10)}rem` }],
      100: [`${pxToRem(13)}rem`, { lineHeight: `${pxToRem(16)}rem` }],
      200: [`${pxToRem(15)}rem`, { lineHeight: `${pxToRem(16)}rem` }],
      300: [`${pxToRem(17)}rem`, { lineHeight: `${pxToRem(24)}rem` }],
      400: [`${pxToRem(24)}rem`, { lineHeight: `${pxToRem(28)}rem` }],
      500: [`${pxToRem(27)}rem`, { lineHeight: `${pxToRem(32)}rem` }],
      600: [`${pxToRem(32)}rem`, { lineHeight: `${pxToRem(40)}rem` }],
      700: [`${pxToRem(40)}rem`, { lineHeight: `${pxToRem(48)}rem` }],
      800: [`${pxToRem(48)}rem`, { lineHeight: `${pxToRem(56)}rem` }],
      900: [`${pxToRem(56)}rem`, { lineHeight: `${pxToRem(64)}rem` }],
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      addUtilities({
        ".clip-display": {
          "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
        ".clip-hidden": {
          "clip-path": "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        },
      }),
        addComponents({
          ".text-gradient": {
            "@apply bg-gradient inline-block text-transparent bg-clip-text": {},
          },
          ".link-gradient": {
            "@apply bg-link duration-[800ms] ease-in-out": {},
            "background-size": "300% 100%",
            "background-position": "0% 0%",
          },
          ".cta-gradient:hover": {
            "background-position": "66.66% 0%",
          },
        });
    }),
  ],
};
