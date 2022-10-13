module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    globals: {
        sap: true,
        jQuery: true
    },
    extends: ['@sap-cloud-sdk'],
    overrides: [
        {
            files: ['**/src/app/**/*'],
            rules: {
                'block-scoped-var': 1,
                'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
                'consistent-this': 2,
                'no-div-regex': 2,
                'no-floating-decimal': 2,
                'no-self-compare': 2,
                'no-mixed-spaces-and-tabs': [2, true],
                'no-nested-ternary': 2,
                'no-unused-vars': [2, { 'vars': 'all', 'args': 'none' }],
                'radix': 2,
                'keyword-spacing': [2, { 'after': true }],
                'space-unary-ops': 2,
                'wrap-iife': [2, 'any'],
                'camelcase': 1,
                'consistent-return': 1,
                'max-nested-callbacks': [1, 3],
                'new-cap': 1,
                'no-extra-boolean-cast': 1,
                'no-lonely-if': 1,
                'no-new': 1,
                'no-new-wrappers': 1,
                'no-redeclare': 1,
                'no-unused-expressions': 1,
                'no-use-before-define': [1, 'nofunc'],
                'no-warning-comments': 1,
                'strict': 2,
                'valid-jsdoc': [1, {
                    'requireReturn': false
                }],
                'default-case': 1,

                'dot-notation': 0,
                'eol-last': 0,
                'eqeqeq': 0,
                'no-trailing-spaces': 0,
                'no-underscore-dangle': 0,
                'quotes': 0
            }
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        // "ecmaVersion": "latest",
        project: {
            extends: 'tsconfig.json',
            include: [
                '**/*.ts',
                '**/*.js'
            ],
            exclude: [
                '**/node_modules/**/*',
                'src/generated/**/*',
            ]
        },
        'sourceType': 'module',
    },
    ignorePatterns: [
        'dist',
        'node_modules',
        'deployment',
        'resources'
    ],
    plugins: ['@typescript-eslint', 'header', 'import', 'prettier'],
    rules: {
        'jsdoc/require-jsdoc': 'off',
        'no-console': 'off'
    }
};
