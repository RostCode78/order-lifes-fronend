module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-shadow': 0,
    'no-catch-shadow': 0,
    'react-native/no-inline-styles': 0,
    'react/no-unstable-nested-components': [
      'off' || 'warn' || 'error',
      { 'allowAsProps': true || false },
    ],
    'no-trailing-spaces': 0,
  },
};
