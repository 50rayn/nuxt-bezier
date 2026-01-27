import { fileURLToPath } from 'node:url'
import { $fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('nuxt-bezier prefix option', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/prefix', import.meta.url)),
  })

  it('registers appear transitions with custom prefix', async () => {
    const html = await $fetch('/')

    expect(html).toContain('Prefixed appear')
  })

  it('registers list transitions with custom prefix', async () => {
    const html = await $fetch('/')

    expect(html).toContain('Prefixed list item')
  })
})