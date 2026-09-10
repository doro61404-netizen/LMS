/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        paper: '#f2f0ea',
        mist: '#e2e5df',
        ink: '#17211d',
        muted: '#5c665f',
        terracotta: '#a94328',
        focus: '#155f52'
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        body: ['Trebuchet MS', 'Verdana', 'sans-serif']
      },
      maxWidth: {
        content: '1180px'
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
};