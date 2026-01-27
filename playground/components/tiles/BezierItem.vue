<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  comp: {
    type: Object,
    required: true,
  },
})

const show = ref(true)
let timer

watch(() => show.value, (newVal) => {
  clearTimeout(timer)

  if (!newVal) {
    timer = setTimeout(() => show.value = true, 3_000)
  }
})

function copyTransition() {
  const transitionTemplate = `<${props.name}><${props.name}/>`

  navigator.clipboard.writeText(transitionTemplate)
}
</script>

<template>
  <TilesBorderWrapper class="interactive-section">
    <button
      class="transition-name"
      @click="show = !show"
    >
      {{ props.name }}
    </button>

    <copy-button
      class="copy-code"
      @copy="copyTransition"
    />

    <div class="transition-wrapper">
      <component :is="props.comp">
        <div
          v-if="show"
          class="transition-content"
        />
      </component>
    </div>
  </TilesBorderWrapper>
</template>

<style>
  .interactive-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;

    &:hover {
      .transition-name {
        &::before,
        &::after {
          opacity: 1;
        }
      }

      .copy-code { opacity: 1 }
    }

    .copy-code {
      position: absolute;
      top: 1rem;
      right: 1rem;
      z-index: 10;
      opacity: 0;
      transition: opacity cubic-bezier(.4, 0, .2, 1) .15s;
    }

    button.transition-name {
      position: absolute;
      inset: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      color: inherit;
      cursor: pointer;
      background-color: transparent;
      background-image: none;
      border: 0;

      &::before,
      &::after {
        padding-inline: 5px;
        font-size: 1.25rem;
        color: var(--green-500);
        opacity: 0;
        transition: opacity cubic-bezier(.4, 0, .2, 1) .15s;

        @media (prefers-color-scheme: dark) { color: var(--green-400) }
      }

      &::before { content: '<' }
      &::after { content: ' />' }
    }

    .transition-wrapper {
      position: relative;
      width: 100%;
      height: 100%;

      .transition-content {
        width: inherit;
        height: inherit;
        background-color: var(--slate-200);
        border-radius: .375rem;

        @media (prefers-color-scheme: dark) { background-color: var(--slate-900) }
      }
    }
  }
</style>
