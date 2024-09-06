import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "no-console": "error", // console文がある場合にエラーにする
      indent: ["error", 2], // インデントが一致しない場合にエラーにする
      semi: ["error", "always"], // 末尾にセミコロンがない場合にエラーにする
      quotes: ["error", "double"], // シングルクォーテーションでエラー
      "no-unused-vars": "error", // 使用していない変数などがある場合にエラーにする
      "@typescript-eslint/no-explicit-any": "error", // anyがある場合にエラーにする
      "@typescript-eslint/explicit-function-return-type": "error", // 関数の戻り値の型がない場合にエラーにする
      "@typescript-eslint/explicit-module-boundary-types": "error", // コンポーネントの型が指定されていない場合にエラーにする
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
