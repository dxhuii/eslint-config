import stylisticMigrate from '@stylistic/eslint-plugin-migrate'
import sortKeys from 'eslint-plugin-sort-keys'
import dxhuii from '@dxhuii/eslint-config'

export default dxhuii(
  undefined,
  {
    ignores: [
      'fixtures',
      '_fixtures',
    ],
  },
  {
    files: ['**/eslint-config/src/**/*.ts'],
    plugins: {
      '@stylistic/migrate': stylisticMigrate,
      'sort-keys': sortKeys,
    },
    rules: {
      '@stylistic/migrate/rules': 'error',
      'sort-keys/sort-keys-fix': 'error',
    },
  },
)
