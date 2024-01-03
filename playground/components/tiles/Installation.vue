<template>
  <tiles-wrapper class="installation-section">
    <h2>Installation</h2>

    <code-highlight
      language="bash"
      :code="methods[selected]"
    >
      <template #header>
        <div class="install-methods">
          <button
            v-for="(_, key) in methods"
            :key="key"
            class="install-btn"
            :class="{selected: selected === key}"
            @click="selected = key"
          >
            {{ key }}
          </button>
        </div>
      </template>
    </code-highlight>
  </tiles-wrapper>
</template>

<script setup>
defineOptions({ inheritAttrs: false })
defineEmits(['shuffle', 'toggle'])

const selected = ref('pnpm')
const MODULE_NAME = 'nuxt-bezier'
const methods = {
  pnpm: `pnpm add ${MODULE_NAME}`,
  npm: `npm install ${MODULE_NAME}`,
  yarn: `yarn add ${MODULE_NAME}`,
  bun: `bun add ${MODULE_NAME}`
}

</script>

<style>
.installation-section {
  @media (min-width: 1024px) { grid-area: 1 / 1 / 2 / 3 }

  h2 {
    padding-inline: .5rem;
    margin-top: 0;
  }

  .install-methods {
    display: flex;
    row-gap: .25rem;
    font-size: .875rem;

    button.install-btn {
      padding: .5rem;
      background-color: transparent;
      background-image: none;
      border: 0;
      border-radius: 0.375rem;
      color: var(--slate-800);

      @media (prefers-color-scheme: dark) { color: var(--slate-200) }

      &:hover {
        background-color: var(--slate-200);

        @media (prefers-color-scheme: dark) { background-color: var(--slate-900) }
      }

      &.selected {
        background-color: var(--slate-300);

        @media (prefers-color-scheme: dark) { background-color: var(--slate-800) }
      }
    }
  }
}
</style>
