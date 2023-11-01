import type { ConfigItem } from '@antfu/eslint-config'

export const all: ConfigItem[] = [
  {
    name: 'dxhuii:all',
    rules: {
      'antfu/no-cjs-exports': 'off', // 允许使用 commonjs 的 exports
      'antfu/consistent-list-newline': 'off', // 允许在数组元素之间换行
      'arrow-parens': ['error', 'as-needed'], // 箭头函数参数只有一个时不需要括号

      'import/prefer-default-export': 'off', // 允许使用 export
      'import/extensions': 'off', // 允许不写文件后缀

      'no-multi-str': 'off', // 允许多行字符串
      'no-restricted-globals': 'off', // 允许使用全局变量
      'no-console': 'off', // 允许使用 console

      'node/prefer-global/process': 'off', // 允许使用 process

      // 删除未尾逗号
      'jsonc/comma-dangle': ['error', 'never'],
      'style/comma-dangle': ['error', 'never'],
      'style/jsx-quotes': ['error', 'prefer-single'], // jsx 使用单引号
      'style/jsx-closing-bracket-location': ['error', 'after-props'], // JSX 多行元素并验证右括号的位置在props之后
      'style/jsx-one-expression-per-line': 'off', // 取消将 JSX 中的每一行限制为一个表达式。
      'style/arrow-parens': ['error', 'as-needed'], // 箭头函数参数只有一个时不需要括号
      // 删除未使用的依赖
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ]
    }
  }
]
