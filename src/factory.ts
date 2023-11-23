import type { Awaitable, FlatConfigItem, OptionsConfig, UserConfigItem } from '@antfu/eslint-config'
import { all, react } from './configs'
import { combine } from './utils'

interface CustomConfig { all?: boolean }

/**
 * 构建一个 ESLint 平面配置项数组。
 */
export async function dxhuii(
  options: OptionsConfig & CustomConfig & FlatConfigItem = {},
  ...userConfigs: (UserConfigItem | UserConfigItem[])[]
): Promise<UserConfigItem[]> {
  const configs: Awaitable<FlatConfigItem[]>[] = []

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
