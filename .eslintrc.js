module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [ 
    'plugin:react/recommended',
    'standard',
    'plugin:tailwindcss/recommended'
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'tailwindcss',
    'prettier'

  ],
  overrides: [
    {
      rules: {
        'max-len': 50 
      }
    }
  ],
  rules: {
    'max-len': {
      'code': 30
    },
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-unused-vars': 'warn',
    semi: 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'react/display-name': 'off',
    'no-console': 'warn'
  }
};
