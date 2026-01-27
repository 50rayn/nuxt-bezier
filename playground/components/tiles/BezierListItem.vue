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

const items = ref([1, 2, 3])
let nextId = 4
let timer

function shuffle() {
  const shuffled = [...items.value].sort(() => Math.random() - 0.5)
  items.value = shuffled
}

function addItem() {
  const pos = Math.floor(Math.random() * (items.value.length + 1))
  items.value.splice(pos, 0, nextId++)
}

function removeItem() {
  if (items.value.length > 1) {
    const pos = Math.floor(Math.random() * items.value.length)
    items.value.splice(pos, 1)
  }
}

function randomAction() {
  const actions = [shuffle, addItem, removeItem]
  const action = actions[Math.floor(Math.random() * actions.length)]
  action()
}

// Auto-animate
watch(items, () => {
  clearTimeout(timer)
  timer = setTimeout(randomAction, 3_000)
}, { immediate: true })

function copyTransition() {
  const transitionTemplate = `<${props.name} tag="ul"></${props.name}>`
  navigator.clipboard.writeText(transitionTemplate)
}
</script>

<template>
  <TilesBorderWrapper class="interactive-section">
    <div class="header">
      <button
        class="transition-name"
        @click="randomAction"
      >
        {{ props.name }}
      </button>

      <copy-button
        class="copy-code"
        @copy="copyTransition"
      />
    </div>

    <div class="transition-wrapper">
      <component
        :is="props.comp"
        tag="div"
        class="list-container"
      >
        <div
          v-for="item in items"
          :key="item"
          class="list-item"
        >
          {{ item }}
        </div>
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

      .list-container {
        display: flex;
        gap: .5rem;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        margin-top: 3rem;
      }

      .list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        font-weight: 600;
        color: var(--slate-700);
        background-color: var(--slate-200);
        border-radius: .375rem;

        @media (prefers-color-scheme: dark) {
          color: var(--slate-200);
          background-color: var(--slate-800);
        }
      }
    }
  }
</style>
