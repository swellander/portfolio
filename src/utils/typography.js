import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Roboto", "sans-serif"],
  headerWeight: 300,
  googleFonts: [
    {
      name: "Rototo",
      styles: ["400"]
    }
  ],
  bodyFontFamily: ["Roboto"]
});

export default typography;
