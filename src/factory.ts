import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { Linter } from 'eslint'
import { all, react } from './configs'
import { combine } from './utils'

interface CustomConfig { all?: boolean }

/**
 * 构建一个 ESLint 平面配置项数组。
 */
export async function dxhuii(
  options: OptionsConfig & TypedFlatConfigItem & CustomConfig = {},
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any> | Linter.FlatConfig[]>[]
): Promise<TypedFlatConfigItem[]> {
  const configs: Awaitable<TypedFlatConfigItem[]>[] = []

  if (options.react ?? true)
    configs.push(react())

  if (options.all ?? true)
    configs.push(all())

  const merged = combine(
    ...configs,
    ...userConfigs
  )

  return merged
}
