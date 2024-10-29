<template>
  <tiles-wrapper class="interactive-section">
    <button
      class="transition-name"
      @click="toggleShow"
    >
      {{ props.name }}
    </button>

    <copy-button
      class="copy-code"
      @copy="copyTransition"
    />

    <div class="transition-wrapper">
      <component
        :is="props.comp"
        @before-enter="inProgress = true"
        @before-leave="inProgress = true"
        @after-enter="inProgress = false"
        @after-leave="inProgress = false"
      >
        <div
          v-if="show"
          class="transition-content"
        />
      </component>
    </div>
  </tiles-wrapper>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  comp: {
    type: Object,
    required: true
  }
})

const show = ref(true)
const inProgress = ref(false)
let timer

watch(() => show.value, (newVal) => {
  clearTimeout(timer)

  if (!newVal) {
    timer = setTimeout(() => show.value = true, 3_000)
  }
})

function toggleShow () {
  if (inProgress.value === true) return

  show.value = !show.value
}

function copyTransition () {
  const transitionTemplate = `<${props.name}><${props.name}/>`

  navigator.clipboard.writeText(transitionTemplate);
}
</script>

<style>
.interactive-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
    transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 150ms;
  }

  button.transition-name {
    position: absolute;
    inset: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    background-color: transparent;
    background-image: none;
    border: 0;
    color: inherit;

    &::before,
    &::after {
      padding-inline: 5px;
      font-size: 1.25rem;
      color: var(--green-500);
      opacity: 0;
      transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 150ms;

      @media (prefers-color-scheme: dark) { color: var(--green-400) }
    }

    &::before { content: '<' }
    &::after { content: ' />' }
  }

  .transition-wrapper {
    height: 100%;
    width: 100%;

    .transition-content {
      height: inherit;
      width: inherit;
      background-color: var(--slate-200);
      border-radius: 0.375rem;

      @media (prefers-color-scheme: dark) { background-color: var(--slate-900) }
    }
  }
}
</style>
