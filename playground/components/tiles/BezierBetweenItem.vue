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

const showA = ref(true)
let timer

watch(() => showA.value, (newVal) => {
  clearTimeout(timer)

  if (!newVal) {
    timer = setTimeout(() => showA.value = !showA.value, 3_000)
  }
})

function copyTransition() {
  const transitionTemplate = `<${props.name} mode="out-in"></${props.name}>`

  navigator.clipboard.writeText(transitionTemplate)
}
</script>

<template>
  <TilesBorderWrapper class="interactive-section">
    <div class="header">
      <button
        class="transition-name"
        @click="showA = !showA"
      >
        {{ props.name }}
      </button>

      <copy-button
        class="copy-code"
        @copy="copyTransition"
      />
    </div>

    <div class="transition-wrapper">
      <component :is="props.comp" mode="out-in">
        <div
          v-if="showA"
          key="a"
          class="transition-content content-a"
        />
        <div
          v-else
          key="b"
          class="transition-content content-b"
        />
      </component>
    </div>
  </TilesBorderWrapper>
</template>

<style>
  .interactive-section {
    display: flex;
    flex-direction: column;
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

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .copy-code {
      opacity: 0;
      transition: opacity cubic-bezier(.4, 0, .2, 1) .15s;
    }

    button.transition-name {
      display: flex;
      align-items: center;
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
      flex: 1;
      width: 100%;

      .transition-content {
        width: 100%;
        height: 100%;
        border-radius: .375rem;
      }

      .content-a {
        background-color: var(--slate-200);

        @media (prefers-color-scheme: dark) { background-color: var(--slate-900) }
      }

      .content-b {
        background-color: var(--green-200);

        @media (prefers-color-scheme: dark) { background-color: var(--green-900) }
      }
    }
  }
</style>
