import type { TypedFlatConfigItem } from '@antfu/eslint-config'

export async function ignores(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      ignores: [
        'dist',
        '.umi',
        'mock',
        'node_modules',
        'coverage',
        'scripts',
        'config',
        '.history',
        '/lambda/',
        'public',
        '**/*.json'
      ]
    }
  ]
}
