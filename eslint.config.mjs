import js from "@eslint/js";
import globals from "globals";

export default [
    {
        ignores: ["node_modules/**", "*.min.js", "**/.eslintrc.js", "admin/words.js", "test/*.js", "eslint.config.mjs"],
    },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.es2020,
                ...globals.node,
                ...globals.mocha,
            },
        },
        rules: {
            "indent": [
                "error",
                "tab",
                {
                    "SwitchCase": 1,
                },
            ],
            "no-console": "off",
            "no-unused-vars": [
                "error",
                {
                    "ignoreRestSiblings": true,
                    "argsIgnorePattern": "^_",
                    "caughtErrorsIgnorePattern": "^_",
                },
            ],
            "no-var": "error",
            "no-trailing-spaces": "error",
            "prefer-const": "error",
            "quotes": [
                "error",
                "double",
                {
                    "avoidEscape": true,
                    "allowTemplateLiterals": true,
                },
            ],
            "semi": [
                "error",
                "always",
            ],
        },
    },
];
