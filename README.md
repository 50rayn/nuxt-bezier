# Nuxt Bezier

[![NPM version](https://img.shields.io/npm/v/nuxt-bezier.svg?style=flat)](https://npmjs.com/package/nuxt-bezier)
[![NPM downloads](https://img.shields.io/npm/dm/nuxt-bezier.svg?style=flat)](https://npmjs.com/package/nuxt-bezier)

This module integrates [@noction/vue-bezier](https://github.com/Noction/vue-bezier) v2 transition components with Nuxt.

### [Demo](https://50rayn.github.io/nuxt-bezier/)

## Install

```bash
npx nuxi@latest module add nuxt-bezier
```

## Usage

Add the module to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['nuxt-bezier']
})
```

The module automatically imports all transition components and styles.

### Available Components

**Single Element Transitions:**
- `BlurTransition`
- `ClipPathTransition`
- `DissolveTransition`
- `FadeSlideTransition`
- `PushTransition`
- `RotateTransition`
- `ScaleTransition`
- `WipeTransition`
- `ZoomTransition`

**List Transitions:**
- `DissolveListTransition`
- `ScaleListTransition`

### Config

Use the `nuxtBezier` key to configure the module:

```typescript
export default defineNuxtConfig({
  nuxtBezier: {
    prefix: 'My' // Optional: prefix for component names (e.g., MyDissolveTransition)
  }
})
```

### Example

```vue
<template>
  <DissolveTransition>
    <div v-if="show">Content with dissolve effect</div>
  </DissolveTransition>
</template>

<script setup>
const show = ref(true)
</script>
```

## Reference

For more information about props and usage, check the [vue-bezier](https://github.com/Noction/vue-bezier) documentation.

## License

MIT © [50rayn](https://github.com/50rayn)
