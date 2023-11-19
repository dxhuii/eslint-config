import type { FlatConfigItem, OptionsConfig } from '@antfu/eslint-config'
import { all, react } from './configs'
import { combine } from './utils'

interface CustomConfig { react?: boolean, all?: boolean }

/**
 * 构建一个 ESLint 平面配置项数组。
 */
export function dxhuii(options: OptionsConfig & CustomConfig & FlatConfigItem = {}, ...userConfigs: (FlatConfigItem | FlatConfigItem[])[]) {
  const configs: FlatConfigItem[][] = []

  if (options.react ?? true)
    configs.push(react)

  if (options.all ?? true)
    configs.push(all)

  const merged = combine(
    ...configs,
    ...userConfigs
  )

  return merged
}
