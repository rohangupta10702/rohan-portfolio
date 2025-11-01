module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a', // near pure black
        redNeon: '#ff0033',
        redGlow: '#ff1a4d',
        white: '#ffffff',
      },
      boxShadow: {
        glow: "0 0 25px #00FFFF",
      },
      backgroundImage: {
        'grid': "linear-gradient(to right, rgba(0,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,255,255,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
