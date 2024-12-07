/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tabWidth: 4,
  singleAttributePerLine: false,
  printWidth: 150,
};

module.exports = config;
