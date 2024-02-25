/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'menu-bg': '#0A155A',
        'task-bg': '#F5F5F5',
        'icons': '#7D80AA',
        'completed-task': '#ADBABE',
        'background': '#F4F6FD',
        'bold-text': '#020417',
        'opacity-text': '#9D9AB4',
        'normal-text': '#373B5E',
        'accent-1': '#2643C4',
        'accent-2': '#A056C5',
        'button': '#2643C4',
        'dark-menu-bg': '#0A155A',
        'dark-task-bg': '#0A155A',
        'dark-completed-task': '#3D47AF',
        'dark-background': '#4F74FF',
        'dark-bold-text': '#020417',
        'dark-opacity-text': '#48466B',
        'dark-normal-text': '#BBC2D8',
        'dark-accent-1': '#2643C4',
        'dark-accent-2': '#D103FC',
        'dark-button': '#D103FC',
      },
      fontFamily: {
        sans: ['system-ui', 'Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
  darkMode: 'class',
}

