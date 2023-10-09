# @dxhuii/eslint-config

[![npm](https://img.shields.io/npm/v/@dxhuii/eslint-config?color=444&label=)](https://npmjs.com/package/@dxhuii/eslint-config)
- 在 [@antfu/eslint-config](https://github.com/antfu/eslint-config)的基础上增加了 react 支持

## 使用

  ```bash
  pnpm add -D @dxhuii/eslint-config @antfu/eslint-config
  ```

  ```js
  // eslint.config.js
  // 增加了 react 支持
  import dxhuii from '@dxhuii/eslint-config'

  // 默认不支持 react
  import antfu from '@antfu/eslint-config'

  export default antfu({}, dxhuii())
  ```
  - 其他使用方法和 [@antfu/eslint-config](https://github.com/antfu/eslint-config#readme) 一样

## 感谢
- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [@antfu/eslint-define-config](https://github.com/antfu/eslint-define-config)
