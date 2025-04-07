import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("prettier"),
  {
    plugins: ["prettier"],
    rules: {
      "react/no-unescaped-entities": "off",
      "prettier/prettier": "error",
    },
  },
];

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  pluginReact.configs.flat.recommended,
  ...eslintConfig,
]);
