import globals from "globals";
import pluginJs from "@eslint/js";
import googleConfig from "eslint-config-google";

export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules", "coverage", "mochawesome-report"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: 2021,
      sourceType: "module",
    },
  },
  pluginJs,
  googleConfig,
];
