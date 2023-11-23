import type { FlatConfigItem } from '@antfu/eslint-config'
import { GLOB_JSX, GLOB_TSX } from '../globs'

export async function react(): Promise<FlatConfigItem[]> {
  return [
    {
      files: [GLOB_TSX, GLOB_JSX],
      name: 'dxhuii:react',
      rules: {
        // react相关
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
        'react/jsx-no-leaked-render': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-sort-props': 'error',
        'react/self-closing-comp': 'error',
        'react/no-invalid-html-attribute': 'error'
      }
    }
  ]
}
