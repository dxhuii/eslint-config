import type { ConfigItem } from '@antfu/eslint-config'

/**
 * Combine array and non-array configs into a single array.
 */
export function combine(...configs: (ConfigItem | ConfigItem[])[]): ConfigItem[] {
  return configs.flatMap(config => Array.isArray(config) ? config : [config])
}
