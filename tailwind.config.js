module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "background": "#FBF9F6",
      "text": "#222222",
      "red": "#EFA8A8",
      "green": "#AFD6D5",
      "white": "white"
    },
    fontFamily: {
      body: [
          'Georgia', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 
          'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
          'Helvetica Neue', 'sans-serif'
      ],
      header: ['DM Serif Display', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
