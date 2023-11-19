import type { FlatConfigItem } from '@antfu/eslint-config'

/**
 * 将阵列和非阵列配置合并为一个阵列。
 */
export function combine(...configs: (FlatConfigItem | FlatConfigItem[])[]): FlatConfigItem[] {
  return configs.flatMap(config => Array.isArray(config) ? config : [config])
}
