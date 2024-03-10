module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh',"react", "jsx-a11y", "react-hooks", "@typescript-eslint"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Indentation
    'indent': ['error', 2],

    // Spaces around operators
    'space-infix-ops': 'error',

    // Spaces after keywords
    'keyword-spacing': ['error', { 'after': true }],

    // Spaces inside braces in object literals
    'object-curly-spacing': ['error', 'always'],

    // Spaces before function parentheses
    'space-before-function-paren': ['error', 'always'],

    // JSX indentation
    'react/jsx-indent': ['error', 2],
  },
}
