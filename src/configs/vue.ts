import type { ConfigItem } from '@antfu/eslint-config'
import { GLOB_VUE } from '../globs'

export const vue: ConfigItem[] = [
  {
    files: [GLOB_VUE],
    name: 'dxhuii:vue',
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
  }
]
