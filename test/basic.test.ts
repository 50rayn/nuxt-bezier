import { fileURLToPath } from 'node:url'
import { $fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('nuxt-bezier module', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders appear transitions (single element with v-if)', async () => {
    const html = await $fetch('/')

    expect(html).toContain('data-testid="appear"')
    expect(html).toContain('Appear transition')
  })

  it('renders between transitions (switching elements)', async () => {
    const html = await $fetch('/')

    expect(html).toContain('data-testid="between"')
    expect(html).toContain('Tab 1 content')
  })

  it('renders list transitions (v-for elements)', async () => {
    const html = await $fetch('/')

    expect(html).toContain('data-testid="list"')
    expect(html).toContain('item1')
    expect(html).toContain('item2')
    expect(html).toContain('item3')
  })

  it('includes vue-bezier styles', async () => {
    const html = await $fetch('/')

    // Check that styles are loaded (vue-bezier class prefix)
    expect(html).toContain('noc-')
  })
})
