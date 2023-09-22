import type { FlatESLintConfigItem } from 'eslint-define-config'
import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from '../globs'
import { pluginReact, pluginReactHooks } from '../plugins'
import { OFF } from '../flags'

export const react: FlatESLintConfigItem[] = [
  {
    files: [GLOB_TSX, GLOB_JS, GLOB_JSX, GLOB_TS],
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "jsx-quotes": ["error", "prefer-double"],

      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": OFF,

      ...pluginReactHooks.configs.recommended.rules,
    },
  },
]
