// CommonJS wrapper to avoid ESM PostCSS resolution issues in Node 22
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
