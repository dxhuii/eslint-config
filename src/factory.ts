import { react } from './configs'
import { combine } from './utils'
import type { FlatESLintConfigItem, OptionsConfig } from './types'
import { OFF } from './flags'

/**
 * Construct an array of ESLint flat config items.
 */
export function dxhuii(options: OptionsConfig & FlatESLintConfigItem = {}, ...userConfigs: (FlatESLintConfigItem | FlatESLintConfigItem[])[]) {
  const configs: FlatESLintConfigItem[][] = []

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
        'vue/valid-attribute-name': OFF, // 属性名不允许使用连字符
        // 关闭组件命名规则
        'vue/multi-word-component-names': OFF, // 组件名不允许使用连字符
        'vue/custom-event-name-casing': ['error', 'camelCase', { // 事件名不允许使用连字符
          ignores: [
            '/^(click):[a-z]+[a-zA-Z]+$/',
          ],
        }],
      },
    },
    {
    // 所有文件
      rules: {
        'style/semi': ['error', 'never'], // 语句不加分号
        'style/comma-dangle': OFF, // 对象最后一个属性不加逗号
        // add parens ony when required in arrow function
        'arrow-parens': ['error', 'as-needed'], // 箭头函数参数只有一个时不加括号

        // Allow multi line string
        'no-multi-str': OFF, // 允许多行字符串
        'no-restricted-globals': OFF, // 允许使用全局变量
        'antfu/no-cjs-exports': OFF, // 允许使用 commonjs 的 exports
        'n/prefer-global/process': OFF, // 允许使用 process

        // Plugin: eslint-plugin-import
        'import/prefer-default-export': OFF, // 允许使用 export
        'import/extensions': OFF, // 允许不写文件后缀

        'no-console': OFF, // 允许使用 console
      },
    },
  )

  return merged
}
