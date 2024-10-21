/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "17rem": "17rem", // Custom margin value
      },
      margin: {
        custom: "280px",
      },
    },
  },
  plugins: [],
  compilerOptions: {
    typeRoots: ["./node_modules/@types", "./node_modules/@types/react"],
  },
};
