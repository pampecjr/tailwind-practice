module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Adiciona a fonte Roboto
      },
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1638740395403-39494228e8a3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
