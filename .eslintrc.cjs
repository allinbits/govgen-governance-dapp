module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    // add more generic rulesets here, such as:
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "vue/multi-word-component-names": 0,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error", // or "error"
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
};
