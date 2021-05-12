module.exports = {
  root: true,
  extends: '@daangn/eslint-config-karrot',
  settings: {
    typescript: { alwaysTryTypes: true },
    'import/internal-regex': '^@src/',
  },
  plugins: ['@emotion'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'no-warning-comments': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
