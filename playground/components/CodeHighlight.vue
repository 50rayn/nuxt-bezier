<script setup lang="ts">
import { createHighlighterCore } from 'shiki/core'
import { createOnigurumaEngine } from 'shiki/engine/oniguruma'

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
})

const highlighter = await createHighlighterCore({
  themes: [
    import('shiki/themes/material-theme-lighter.mjs'),
    import('shiki/themes/material-theme-palenight.mjs'),
    import('shiki/themes/material-theme.mjs'),
  ],
  langs: [
    import('shiki/langs/javascript.mjs'),
    import('shiki/langs/shellscript.mjs'),
    import('shiki/langs/vue.mjs'),
  ],
  engine: createOnigurumaEngine(import('shiki/wasm')),
})

const html = computed(() => highlighter.codeToHtml(props.code, {
  lang: props.language,
  themes: {
    default: 'material-theme',
    light: 'material-theme-lighter',
    dark: 'material-theme-palenight',
  },
}))

function copyTransition() {
  navigator.clipboard.writeText(props.code)
}
</script>

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

<style>
  .code-highlight {
    position: relative;
    border-color: var(--slate-200);
    border-style: solid;
    border-width: 1px;
    border-radius: .375rem;

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
        border-radius: .375rem;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .shiki,
    .shiki span {
      /* Optional, if you also want font styles */
      font-style: var(--shiki-dark-font-style) !important;
      font-weight: var(--shiki-dark-font-weight) !important;
      color: var(--shiki-dark) !important;
      text-decoration: var(--shiki-dark-text-decoration) !important;
      background-color: var(--shiki-dark-bg) !important;
    }
  }
</style>
