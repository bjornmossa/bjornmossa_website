module.exports = {
  plugins: {
    "posthtml-doctype": {
      doctype: "HTML 5"
    },
    "posthtml-inline-assets": {
      cwd: "./src"
    },
    "posthtml-include": {},
    "posthtml-modules": {
      root: "src",
    },
  },
};
