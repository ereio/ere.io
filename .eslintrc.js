module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true
  }, 
  plugins: [ 'import' ],
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    'plugin:react/jsx-runtime',  
    'plugin:import/errors',
    'plugin:import/warnings', 
  ],
  parserOptions: {
    'sourceType': 'module',
    'ecmaVersion': 2022
  },
  ignorePatterns: [
    '**/bin/**'
  ],
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    'import/ignore': ['react-native'],
  },
  rules: {
    // formatting
    indent: ['error', 2, { SwitchCase: 1 }],
    'arrow-parens': ['warn', 'always'],
    quotes: ['warn', 'single'],
    'max-len': ['error', {
      code: 120, tabWidth: 2, ignoreUrls: true, ignoreStrings: true, ignoreTrailingComments: true
    }],
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug', 'log'] }],
    semi: ['error', 'never'],
    'brace-style': ['error', '1tbs'],

    // TODO:
    'global-require': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off', 

    // disabled
    'no-unused-vars': ['off'],

    // javascript
    'eol-last': ['error', 'always'],
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'no-useless-constructor': 'off', // :drake-no:
    'no-underscore-dangle': ['warn', { allow: ['__typename'] }],
    'no-trailing-spaces': ['warn', { skipBlankLines: true }],
    'no-use-before-define': ['error'],
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-nested-ternary': 'off',
    'comma-dangle': ['warn', 'only-multiline'],
    'object-curly-spacing': ['warn', 'always'],
    'space-in-parens': ['error', 'never'],
    'object-curly-newline': ['warn', { multiline: true, consistent: true, minProperties: 4 }],
    'array-bracket-spacing': ['warn', 'never'],
    'array-callback-return': ['off'],
    'function-paren-newline': ['error', 'consistent'],
    'computed-property-spacing': ['warn', 'never'],
    'arrow-body-style': ['off'],
    'implicit-arrow-linebreak': ['off'],
    'consistent-return': ['off'],
    'class-methods-use-this': ['off'],

    // react
    'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
    'react/jsx-max-props-per-line': ['warn', { maximum: 6 }],
    'react/jsx-closing-bracket-location': ['warn', 'after-props'],
    'react/prop-types': ['off'],
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],

    // imports
    'import/prefer-default-export': 'off',
    'import/order': ['error', {
      groups: ['internal', 'external', 'builtin', 'index', 'sibling', 'parent'],
      'newlines-between': 'always'
    }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never', jsx: 'never', ts: 'never', tsx: 'never', cjs: 'never'
      }
    ]
  },
  overrides: [
    {
      files: ['**/__tests__/**'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
}
