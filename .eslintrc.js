module.exports = {
  "env": {
    "jest/globals": true
  },
  "plugins": ["jest"],
  extends: [
    "plugin:jest/recommended",
    'standard-with-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/standard'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    "@typescript-eslint/no-redeclare": 'off'
  }
}
