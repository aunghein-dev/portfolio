/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-variant': 'var(--color-surface-variant)',
        divider: 'var(--color-divider)',
        shadow: 'var(--color-shadow)',

        toolbar: 'var(--color-toolbar)',
        'toolbar-highlight': 'var(--color-toolbar-highlight)',

        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        'accent-hover': 'var(--color-accent-hover)',
        'on-accent': 'var(--color-on-accent)',

        primary: 'var(--color-primary-txt)',
        secondary: 'var(--color-secondary-txt)',
        tertiary: 'var(--color-tertiary-txt)',

        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',

        nav: 'var(--color-nav)',
        'nav-shadow': 'var(--color-nav-shawdow)',

        orange: 'var(--color-orange)',
        green: 'var(--color-green)',
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
    },
  },
  plugins: [],
}
