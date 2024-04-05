import type { Awaitable, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'

/**
 * 将阵列和非阵列配置合并为一个阵列。
 */
export async function combine(...configs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any> | Linter.FlatConfig[]>[]): Promise<TypedFlatConfigItem[]> {
  const resolved = await Promise.all(configs)
  return resolved.flat()
}
