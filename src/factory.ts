import type { ConfigItem, OptionsConfig } from '@antfu/eslint-config'
import { all, react, vue } from './configs'
import { combine } from './utils'

interface CustomConfig { react?: boolean; all?: boolean }

/**
 * 构建一个 ESLint 平面配置项数组。
 */
export function dxhuii(options: OptionsConfig & CustomConfig & ConfigItem = {}, ...userConfigs: (ConfigItem | ConfigItem[])[]) {
  const configs: ConfigItem[][] = []

  if (options.react ?? true)
    configs.push(react)

  if (options.vue ?? true)
    configs.push(vue)

  if (options.all ?? true)
    configs.push(all)

  const merged = combine(
    ...configs,
    ...userConfigs
  )

  return merged
}
