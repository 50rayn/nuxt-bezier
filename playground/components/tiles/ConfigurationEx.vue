<script setup lang="ts">
const code = `export default defineNuxtConfig({
  modules: [
    'nuxt-bezier',
  ]
})
`
</script>

<template>
  <TilesBorderWrapper class="configuration-section">
    <h2>Configuration</h2>

    <CodeHighlight
      filename="nuxt.config.ts"
      language="javascript"
      :code="code"
    />
  </TilesBorderWrapper>
</template>

<style>
.configuration-section {
  @media (min-width: 768px) { grid-area: 2 / span 2 / 2 / -1 }

  h2 {
    padding-inline: .5rem;
    margin-top: 0;
  }
}
</style>
