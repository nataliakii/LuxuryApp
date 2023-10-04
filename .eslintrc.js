module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    test: 'readonly',
    React: 'readonly',
    expect: 'readonly',
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': [
      'error',
      { ignoreFunctionalComponents: true },
    ],
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'off',
  },
  plugins: ['prettier'],
};
