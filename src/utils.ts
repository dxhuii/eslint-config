import type { Awaitable, UserConfigItem } from '@antfu/eslint-config'

/**
 * 将阵列和非阵列配置合并为一个阵列。
 */
export async function combine(...configs: Awaitable<UserConfigItem | UserConfigItem[]>[]): Promise<UserConfigItem[]> {
  const resolved = await Promise.all(configs)
  return resolved.flat()
}
