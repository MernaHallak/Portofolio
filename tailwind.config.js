/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        canvas: 'var(--color-canvas)',
        surface: 'var(--color-surface)',
        elevated: 'var(--color-surface-elevated)',
        mutedSurface: 'var(--color-surface-muted)',
        ink: 'var(--color-text)',
        muted: 'var(--color-text-muted)',
        line: 'var(--color-border)',
        strongLine: 'var(--color-border-strong)',
        accent: 'var(--color-accent)',
        accentStrong: 'var(--color-accent-strong)',
        accentSoft: 'var(--color-accent-soft)',
        accentContrast: 'var(--color-accent-contrast)',
        focus: 'var(--color-focus)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        lift: 'var(--shadow-lift)',
      },
    },
  },
  plugins: [],
};

export default config;
