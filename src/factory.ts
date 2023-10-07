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
        'vue/v-on-event-hyphenation': ['error', 'never'],
        'vue/valid-attribute-name': OFF,
        // 关闭组件命名规则
        'vue/multi-word-component-names': OFF,
        'vue/custom-event-name-casing': ['error', 'camelCase', {
          ignores: [
            '/^(click):[a-z]+[a-zA-Z]+$/',
          ],
        }],
      },
    },
    {
    // Without `files`, they are general rules for all files
      rules: {
        'style/semi': ['error', 'never'],
        // add parens ony when required in arrow function
        'arrow-parens': ['error', 'as-needed'],

        // Allow multi line string
        'no-multi-str': OFF,
        'no-restricted-globals': OFF,
        'antfu/no-cjs-exports': OFF,
        'n/prefer-global/process': OFF,

        // Plugin: eslint-plugin-import
        'import/prefer-default-export': OFF,
        'import/extensions': OFF,

        'no-console': OFF,
      },
    },
  )

  return merged
}
