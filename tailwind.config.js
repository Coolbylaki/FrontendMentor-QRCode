const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      customWhite: "hsl(0, 0%, 100%)",
      lightGray: "hsl(212, 45%, 89%)",
      grayishBlue: "hsl(220, 15%, 55%)",
      darkBlue: "hsl(218, 44%, 22%)"
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
