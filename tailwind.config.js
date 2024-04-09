/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#0D0F11',
        secondary: "#191D23",
        tertiary: '#13161A',
        "button-primary": '#007AFF',
        "editor-header": '#1E232B',
        customBorder: {
          primary: '#007AFF',
        },
      },
      textColor: {
        primary: '#007AFF',
        secondary: '#5D677D',
        tertiary: '#EEEEEE',
        breadcrumb: '#7B8191',
        explorer: '#CCCCCC',
        sidebar: '#AAAAAA',
      },
    },
  },
  plugins: [],
};
