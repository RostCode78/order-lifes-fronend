module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    '@typescript-eslint/no-shadow': 0,
    'no-catch-shadow': 0,
    'react-native/no-inline-styles': 0,
  },
};
