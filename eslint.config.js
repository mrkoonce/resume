import eslintConfigESLint from "eslint-config-eslint";

export default [
    ...eslintConfigESLint,
    {
        languageOptions: {
            globals: {
                document: "readonly",
                window: true,
                IntersectionObserver: true
            }
        }
    },
    {
        rules: {
            "jsdoc/require-jsdoc": 0,
            "func-style": [2, "expression", { allowArrowFunctions: true }],
            "unicorn/prefer-set-has": 0,
            "no-script-url": 0,
            "n/no-unsupported-features/node-builtins": 0

        }

    }
];
