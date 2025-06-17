import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigAsPlugin } from "@eslint/compat";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      "@next/next": nextPlugin,
      react: fixupConfigAsPlugin(pluginReactConfig),
    },
    extends: [
      "plugin:@next/next/recommended",
      ...tseslint.configs.recommended,
    ],
    rules: {
      // Add this specific rule here:
      "@typescript-eslint/no-explicit-any": "off"
    },
  },
  // You might have other config objects in the array
];