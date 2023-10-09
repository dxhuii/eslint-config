import type { ConfigItem, OptionsConfig } from '@antfu/eslint-config'
import { react } from './configs'
import { combine } from './utils'

/**
 * Construct an array of ESLint flat config items.
 */
export function dxhuii(options: OptionsConfig & { react?: boolean } & ConfigItem = {}, ...userConfigs: (ConfigItem | ConfigItem[])[]) {
  const configs: ConfigItem[][] = []

  if (options.react ?? true)
    configs.push(react)

  const merged = combine(
    ...configs,
    ...userConfigs,
    {
      // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
      files: ['**/*.vue'],
      rules: {
        'vue/v-on-event-hyphenation': ['error', 'never'], // 事件名不允许使用连字符
        'vue/valid-attribute-name': 'off', // 属性名不允许使用连字符
        // 关闭组件命名规则
        'vue/multi-word-component-names': 'off', // 组件名不允许使用连字符
        'vue/custom-event-name-casing': ['error', 'camelCase', { // 事件名不允许使用连字符
          ignores: [
            '/^(click):[a-z]+[a-zA-Z]+$/'
          ]
        }]
      }
    },
    {
      // 所有文件
      rules: {
        'no-multi-str': 'off', // 允许多行字符串
        'no-restricted-globals': 'off', // 允许使用全局变量
        'antfu/no-cjs-exports': 'off', // 允许使用 commonjs 的 exports
        'node/prefer-global/process': 'off', // 允许使用 process

        'antfu/consistent-list-newline': 'off', // 允许在数组元素之间换行

        'arrow-parens': ['error', 'as-needed'], // 箭头函数参数只有一个时不需要括号

        'import/prefer-default-export': 'off', // 允许使用 export
        'import/extensions': 'off', // 允许不写文件后缀

        'no-console': 'off', // 允许使用 console

        // 删除未尾逗号
        'style/comma-dangle': ['error', 'never'],
        'jsonc/comma-dangle': ['error', 'never'],
        // jsx 使用单引号
        'style/jsx-quotes': ['error', 'prefer-single'],
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
  )

  return merged
}
