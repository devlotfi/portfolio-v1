/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          100: "var(--base-100)",
        },
        primary: {
          100: "var(--primary-100)",
        },
        error: {
          100: "var(--error-100)",
        },
        warning: {
          100: "var(--warning-100)",
        },
        success: {
          100: "var(--success-100)",
        },
        edge: {
          100: "var(--edge-100)",
        },
      },
    },
  },
  plugins: [],
};
