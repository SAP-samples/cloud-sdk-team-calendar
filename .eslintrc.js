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
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: {
      extends: 'tsconfig.json',
      include: ['**/*.ts', '**/*.js'],
      exclude: [
        '**/dist/**/*',
        '**/node_modules/**/*',
        '**/deployment/**/*',
        '**/resources/**/*'
      ]
    },
    sourceType: 'module'
  },
  ignorePatterns: ['dist', 'node_modules', 'deployment', 'resources'],
  plugins: ['@typescript-eslint', 'header', 'import', 'prettier'],
  rules: {
    'jsdoc/require-jsdoc': 'off',
    'no-console': 'off'
  }
};
