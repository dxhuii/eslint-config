import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from '../globs'
import { pluginReact, pluginReactHooks } from '../plugins'
import type { FlatESLintConfigItem } from '../types'

export const react: FlatESLintConfigItem[] = [
  {
    files: [GLOB_TSX, GLOB_JS, GLOB_JSX, GLOB_TS],
    plugins: {
      'react': pluginReact,
      'react-hooks': pluginReactHooks
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'jsx-quotes': ['error', 'prefer-double'],

      ...pluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',

      ...pluginReactHooks.configs.recommended.rules,

      // JSX rules https://www.5axxw.com/wiki/content/0u8zli
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-child-element-spacing': 'error',
      'react/jsx-closing-bracket-location': ['error', 'after-props'],
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/jsx-curly-newline': 'error',
      'react/jsx-curly-spacing': 'error',
      'react/jsx-equals-spacing': 'error',
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
      'react/jsx-first-prop-new-line': 'error',
      'react/jsx-indent-props': [2, 2],
      'react/jsx-indent': [2, 2],
      'react/jsx-max-props-per-line': [1, { when: 'multiline' }],
      'react/jsx-no-comment-textnodes': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-leaked-render': 'error',
      'react/jsx-no-target-blank': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-pascal-case': 'error',
      'react/jsx-props-no-multi-spaces': 'error',
      'react/jsx-sort-props': 'error',
      'react/jsx-tag-spacing': 'error',
      'react/self-closing-comp': 'error',
      'react/no-unescaped-entities': 'error',
      'react/no-invalid-html-attribute': 'error'
    }
  }
]
