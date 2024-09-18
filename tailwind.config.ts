import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlue: '#0A192F',    // For background or header
        teal: '#2C7A7B',        // For buttons, navigation, highlighted sections
        electricGreen: '#00FF66', // For call-to-action buttons, hover states, and links
        lightGray: '#F5F5F5',   // For card backgrounds, sidebars, and footer areas
        offWhite: '#E5E5E5',
      },
    },
  },
  plugins: [],
};
export default config;
