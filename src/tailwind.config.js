/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./AppRouter.tsx",
    "./AppHashRouter.tsx",
    "./AppFallback.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Ubuntu', 'DM Sans', 'Quicksand', 'Fira Sans', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['Dancing Script', 'Pacifico', 'Great Vibes', 'cursive']
      },
      colors: {
        primary: {
          blue: '#FACC15',
          DEFAULT: '#FACC15'
        },
        secondary: {
          blue: '#EAB308',
          DEFAULT: '#EAB308'  
        },
        background: {
          light: '#000000',
          secondary: '#1A202C',
          DEFAULT: '#000000'
        },
        accent: {
          primary: '#FACC15',
          secondary: '#EAB308'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E2E8F0',
          muted: '#A0AEC0'
        }
      },
      spacing: {
        '4': '0.25rem',
        '8': '0.5rem',
        '12': '0.75rem',
        '16': '1rem',
        '24': '1.5rem',
        '32': '2rem',
        '48': '3rem',
        '64': '4rem',
        '96': '6rem',
        '128': '8rem'
      },
      fontSize: {
        'h1': ['5rem', { lineHeight: '1.1' }],
        'h2': ['3.75rem', { lineHeight: '1.2' }],
        'h3': ['2.5rem', { lineHeight: '1.25' }],
        'h4': ['1.875rem', { lineHeight: '1.3' }],
        'body': ['1.25rem', { lineHeight: '1.5' }],
        'body-large': ['1.375rem', { lineHeight: '1.5' }],
        'caption': ['1rem', { lineHeight: '1.4' }]
      },
      animation: {
        'circuit-pulse': 'circuit-pulse 3s ease-in-out infinite',
        'slow-drift': 'slow-drift 20s ease-in-out infinite',
        'slow-pan': 'slow-pan 25s ease-in-out infinite reverse',
        'float': 'float 4s ease-in-out infinite',
        'float-reverse': 'float-reverse 5s ease-in-out infinite',
        'circuit-flow': 'circuit-flow 8s linear infinite',
        'circuit-flow-reverse': 'circuit-flow-reverse 10s linear infinite'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate')
  ]
}
