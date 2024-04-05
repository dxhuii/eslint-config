// @ts-check
import antfu from '@antfu/eslint-config'
import JITI from 'jiti'

const jiti = JITI(import.meta.url)
/**
 * @type {import('./src').default}
 */
const dxhuii = jiti('./src').default

export default antfu(
  {
    typescript: true,
    formatters: true
  }, dxhuii()
)
