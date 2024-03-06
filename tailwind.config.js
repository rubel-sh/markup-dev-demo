const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-bg": "var(--primary-bg)",
        "card-bg": "var(--card-bg)",
      },
      fontSize: {
        "fluid-28-48": "var(--fluid-28-48)",
        "fluid-25-32": "var(--fluid-25-32)",
      },
      spacing: {
        sidebar: "var(--sidebar-spacing)",
        "header-height": "var(--header-height)",
      },
    },
  },
  plugins: plugins,
};
