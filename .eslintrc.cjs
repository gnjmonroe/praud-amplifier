module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    __PATH_PREFIX__: true,
    document: "readonly",
    window: "readonly",
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [".eslintrc.*", "vite.config.ts"],
  rules: {
    "linebreak-style": ["error", "unix"],
  },
};
