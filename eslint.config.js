import globals from "globals";
import pluginJs from "@eslint/js";
import mochaPlugin from "eslint-plugin-mocha";

export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules", "coverage", "mochawesome-report"],
    languageOptions: { globals: globals.browser },
  },
  // mochaPlugin.configs.flat.recommended,
  // pluginJs.configs.recommended,
];
