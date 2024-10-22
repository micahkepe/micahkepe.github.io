import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginTypeScript from "@typescript-eslint/eslint-plugin";
import * as typescriptParser from "@typescript-eslint/parser";
import babelEslintParser from "@babel/eslint-parser";

export default [
  {
    files: ["*.js", "*.jsx"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelEslintParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: ["@babel/preset-react"],
        },
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        browser: true,
        node: true,
        es2021: true,
      },
    },

    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
    },

    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["*.ts", "*.tsx"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        browser: true,
        node: true,
        es2021: true,
      },
    },

    plugins: {
      "@typescript-eslint": eslintPluginTypeScript,
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
    },

    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "no-console": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
