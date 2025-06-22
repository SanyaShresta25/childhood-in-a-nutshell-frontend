// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', "cursive"],
        nunito: ["Nunito", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
        schoolbell: ['"Schoolbell"', 'cursive'],
        gloria: ['"Gloria Hallelujah"', 'cursive'],
        cherry: ['"Cherry Bomb One"', 'cursive'],
        vt323: ['"VT323"', 'monospace'],


      },
      colors: {
        'disney-pink': '#ff69b4',
        'disney-purple': '#9b59b6',
        'disney-blue': '#3498db',
        'disney-mint': '#aaf0d1',
        'disney-lavender': '#e6e6fa',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderColor: {
        border: 'hsl(var(--border))',
      },
      ringColor: {
        ring: 'hsl(var(--ring))',
      },
      backgroundColor: {
        background: 'hsl(var(--background))',
        card: 'hsl(var(--card))',
        popover: 'hsl(var(--popover))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        muted: 'hsl(var(--muted))',
        accent: 'hsl(var(--accent))',
        destructive: 'hsl(var(--destructive))',
        sidebar: 'hsl(var(--sidebar-background))',
      },
      textColor: {
        foreground: 'hsl(var(--foreground))',
        'card-foreground': 'hsl(var(--card-foreground))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        'sidebar-foreground': 'hsl(var(--sidebar-foreground))',
      },
      gradientColorStops: {
        sidebar: 'hsl(var(--sidebar-background))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
