const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        // Paleta Cosmovision (manual de marca + trifolear)
        cv: {
          navy: '#000D37',
          blue: '#033093',
          electric: '#0028CE',
          orange: '#FF7500',
          'orange-soft': '#FFA94A',
          green: '#1FA855',
          bg: '#F4F6FB',
          sky: '#E4EAFB',
          line: '#E1E6F2',
          text: '#3A4568',
          muted: '#4E5878',
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-secondary)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
