<template>
  <div class="code-highlight">
    <div
      v-if="$slots.header || props.filename"
      class="code-header"
    >
      <slot name="header">
        <span class="filename">{{ props.filename }}</span>
      </slot>
    </div>
    <copy-button
      class="copy-code"
      @copy="copyTransition"
    />
    <div
      class="code"
      v-html="html"
    />
  </div>
</template>

<script setup lang="ts">
import { getHighlighterCore } from 'shikiji/core'
import getWasm from 'shikiji/wasm'
import MaterialThemeLighter from 'shikiji/themes/material-theme-lighter.mjs'
import MaterialThemePalenight from 'shikiji/themes/material-theme-palenight.mjs'
import MaterialTheme from 'shikiji/themes/material-theme.mjs'

const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
})

const highlighter = await getHighlighterCore({
  themes: [MaterialThemeLighter, MaterialThemePalenight, MaterialTheme],
  langs: [
    import('shikiji/langs/javascript.mjs'),
    import('shikiji/langs/shellscript.mjs'),
    import('shikiji/langs/vue.mjs'),
  ],
  loadWasm: getWasm
})

const html = computed(() => highlighter.codeToHtml(props.code, {
  lang: props.language,
  themes: {
    default: 'material-theme',
    light: 'material-theme-lighter',
    dark: 'material-theme-palenight',
  }
}))

function copyTransition () {
  navigator.clipboard.writeText(props.code);
}
</script>

<style>
.code-highlight {
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.375rem;
  border-color: var(--slate-200);

  @media (prefers-color-scheme: dark) {
    border-color: var(--slate-800);
  }

  .code-header {
    padding: 1rem;

    .filename {
      color: var(--slate-800);

      @media (prefers-color-scheme: dark) {
        color: var(--slate-200);
      }
    }
  }

  .copy-code {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
  }

  .code {
    .shiki { margin: 0 }

    > * {
      padding: 1rem;
      border-radius: 0.375rem;
    }
  }
}

@media (prefers-color-scheme: dark) {
  .shiki,
  .shiki span {
    color: var(--shiki-dark) !important;
    background-color: var(--shiki-dark-bg) !important;
    /* Optional, if you also want font styles */
    font-style: var(--shiki-dark-font-style) !important;
    font-weight: var(--shiki-dark-font-weight) !important;
    text-decoration: var(--shiki-dark-text-decoration) !important;
  }
}
</style>
