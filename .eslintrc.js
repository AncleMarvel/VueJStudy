module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "semi": 0,
    "quotes": [0, "double"],
    "padded-blocks": 0,
    "comma-dangle": 0,
    "space-before-function-paren": 0,
    "no-unused-vars": 0
  }
}
