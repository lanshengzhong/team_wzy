module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'vue/no-use-v-if-with-v-for': ['error', {
      allowUsingIterationVar: true
    }],
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'space-before-function-paren': [2, 'never'], // 函数声明时括号与函数名间加空格。
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
