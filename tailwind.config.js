import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lora", "Roboto", "sans-serif"],
        mono: ["Lora", "Roboto", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#FFF1E6",
            foreground: "#7A2528",
            primary: {
              100: "#7A2528",
              200: "#93403D",
              300: "#B76A61",
              400: "#DB9B8D",
              500: "#FFD1C2",
              600: "#FFDFD1",
              700: "#FFE8DA",
              800: "#FFF1E6",
              900: "#FFF9F2",
              DEFAULT: "#FFE8DA",
            },
            success: {
              100: "#0F6A49",
              200: "#1A8051",
              300: "#299F5D",
              400: "#3BBE69",
              500: "#52DD75",
              600: "#7BEA8D",
              700: "#98F49D",
              800: "#BEFBBC",
              900: "#E1FDDD",
              DEFAULT: "#52DD75",
            },
            info: {
              100: "#12267A",
              200: "#1D3893",
              300: "#2F53B7",
              400: "#4471DB",
              500: "#5E93FF",
              600: "#86B2FF",
              700: "#9EC4FF",
              800: "#BEDAFF",
              900: "#DEEDFF",
              DEFAULT: "#5E93FF",
            },
            warning: {
              100: "#7A430C",
              200: "#935915",
              300: "#B77721",
              400: "#DB9830",
              500: "#FFBC42",
              600: "#FFD171",
              700: "#FFDF8D",
              800: "#FFECB3",
              900: "#FFF7D9",
              DEFAULT: "#FFBC42",
            },
            danger: {
              100: "#7A155E",
              200: "#93246A",
              300: "#B7397C",
              400: "#DB538E",
              500: "#FF72A1",
              600: "#FF95AE",
              700: "#FFAAB5",
              800: "#FFC6C8",
              900: "#FFE4E2",
              DEFAULT: "#FF72A1",
            },
          },
        },
        dark: {
          colors: {
            background: "#000F30",
            foreground: "#C5E4F6",
            primary: {
              100: "#C5E4F6",
              200: "#8EC6ED",
              300: "#5193CB",
              400: "#265F98",
              500: "#002654",
              600: "#001D48",
              700: "#00153C",
              800: "#000F30",
              900: "#000A28",
              DEFAULT: "#00153C",
            },
            success: {
              100: "#D3F8CE",
              200: "#A2F29F",
              300: "#6ADA71",
              400: "#40B553",
              500: "#138430",
              600: "#0D7131",
              700: "#095F30",
              800: "#064C2C",
              900: "#033F2A",
              DEFAULT: "#0E8C48",
            },
            info: {
              100: "#CAE6FA",
              200: "#98CAF5",
              300: "#61A2E3",
              400: "#397AC7",
              500: "#0848A3",
              600: "#05378C",
              700: "#042975",
              800: "#021C5E",
              900: "#01144E",
              DEFAULT: "#09509B",
            },
            warning: {
              100: "#FCECCD",
              200: "#FAD59B",
              300: "#F1B468",
              400: "#E39342",
              500: "#D1640C",
              600: "#B34B08",
              700: "#963606",
              800: "#792403",
              900: "#641802",
              DEFAULT: "#C46301",
            },
            danger: {
              100: "#FAD1CD",
              200: "#F59D9E",
              300: "#E26975",
              400: "#C5415C",
              500: "#A0113C",
              600: "#890C3E",
              700: "#73083D",
              800: "#5C0539",
              900: "#4C0336",
              DEFAULT: "#A01127",
            },
          },
        },
      },
    }),
  ],
};
