import type { FlatConfigItem } from '@antfu/eslint-config'
import { GLOB_JSX, GLOB_TSX } from '../globs'
import { pluginReact, pluginReactHooks } from '../plugins'

export async function react(): Promise<FlatConfigItem[]> {
  return [
    {
      files: [GLOB_TSX, GLOB_JSX],
      languageOptions: {
        parserOptions: {
          ecmaVersion: 'latest',
          parser: '@typescript-eslint/parser',
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true
          }
        }
      },
      name: 'dxhuii:react',
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
        ...pluginReact.configs.recommended.rules,
        'react/react-in-jsx-scope': 'off',

        ...pluginReactHooks.configs.recommended.rules,

        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-leaked-render': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-sort-props': 'error',
        'react/self-closing-comp': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-invalid-html-attribute': 'error'
      }
    }
  ]
}
