/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,

        // or have default horizontal padding
        padding: "1rem",
      },
      colors: {
        black: "#232323",
        input: {
          background: "#F9F9F8",
        },
        primary: {
          DEFAULT: "#0A66C2",
        },
        gray: {
          LIGHT: "#FEFEFC",
          DEFAULT: "#8D8D8D",
        },
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        "1/1fr": "1fr 1fr",
        "2/1fr": "2fr 1fr",
        "1/2fr": "1fr 2fr",
        "1/3fr": "1fr 3fr",
        "3/1fr": "3fr 1fr",
        "main-layout": "275px 1fr",
        "contact-layout": "370px 1fr",
        "cv-layout": "275px 1fr 275px",
        "1/1/1fr": "1fr 1fr 1fr",
        "2/1/1fr": "2fr 1fr 1fr",
        "2/2/1fr": "2fr 2fr 1fr",
        "3/3/1fr": "2fr 2fr 1fr",
      },

      backgroundImage: {
        "lets-work-together": "url('/images/lets-work-together.webp')",
      },

      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1202px",
        "2xl": "1202px",
      },

      boxShadow: {
        card: "0px 1px 10px 0px rgba(150, 179, 255, 0.25);",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
