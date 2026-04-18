module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Arrow functions
    'prefer-arrow-callback': 'error',
    'func-style': ['error', 'expression'],
    'arrow-body-style': ['error', 'as-needed'],

    // React
    'react/prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // Import
    'import/extensions': ['error', 'ignorePackages', { jsx: 'always', js: 'always' }],
    'import/no-unresolved': ['error', { ignore: ['^swiper'] }],

    // Style
    'no-console': 'warn',
    'prettier/prettier': 'error',
  },
};
