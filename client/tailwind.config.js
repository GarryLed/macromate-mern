// This is a Tailwind CSS configuration file for a project.
// It specifies the paths to the content files where Tailwind CSS classes will be used,
// allowing Tailwind to purge unused styles in production builds.

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

