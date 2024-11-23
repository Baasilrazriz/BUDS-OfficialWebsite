/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          divider: '#475569',
          highlight: '#93C5FD',
          accentSecondary: '#60A5FA',
          accentPrimary: '#3B82F6',
          textSecondary: '#94A3B8',
          textPrimary: '#F1F5F9',
          secondaryBg: '#334155',
          background: '#1E293B',
        },
        lightBlue: {
          divider: '#E2E8F0',
          highlight: '#93C5FD',
          accentSecondary: '#60A5FA',
          accentPrimary: '#3B82F6',
          textSecondary: '#64748B',
          textPrimary: '#1E293B',
          secondaryBg: '#FFFFFF',
          background: '#F8FAFC',
        },
      },
    },
  },
  plugins: [],
}

