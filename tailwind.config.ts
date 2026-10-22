import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxora: {
          50: '#FDFBF7',
          100: '#F7F2E7',
          200: '#EFE5CE',
          300: '#E2C076',
          400: '#D4AF37',
          500: '#C59A44',
          600: '#A47B2E',
          700: '#7E5B1D',
          800: '#1A2B49',
          900: '#0B192C',
          950: '#060E18',
        },
        sorath: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#0D9488',
          600: '#0F766E',
          700: '#115E59',
          800: '#134E4A',
          900: '#0F172A',
          950: '#020617',
        },
        gender: {
          boys: '#2563EB',
          boysBg: '#EFF6FF',
          girls: '#E11D48',
          girlsBg: '#FFF1F2',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
