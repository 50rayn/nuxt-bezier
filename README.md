# Nuxt Bezier

[![NPM version](https://img.shields.io/npm/v/nuxt-bezier.svg?style=flat)](https://npmjs.com/package/nuxt-bezier)
[![NPM downloads](https://img.shields.io/npm/dm/nuxt-bezier.svg?style=flat)](https://npmjs.com/package/nuxt-bezier)

This module integrates the [@noction/vue-bezier](https://github.com/Noction/vue-bezier) component with Nuxt 3.

### [Demo](https://50rayn.github.io/nuxt-bezier/)

## Install

```bash
npm install nuxt-bezier
```

## Usage

### Install

For integration is enough to add it into your `nuxt.config.ts`:

```typescript
export default {
  modules: [
    'nuxt-bezier'
  ]
}
```

It will also import the necessary `styles` automatically.

### Config

For configuration, use `nuxtBezier` key. There you can configure `prefix` and `components` options. Both of them are optional.

- _prefix_ - the value to prepend to the _nuxtBezier_ components
- _components_ - specific transition components which should be mounted. By default, [all](https://github.com/Noction/vue-bezier#list-of-available-transitions) of them are added. 

Configuration example: 

```typescript
export default {
  nuxtBezier: {
    prefix: 'Prefix',
    components: ['FadeTransition']
  }
}
```

### Appliance

Now, you're ready to use the transition components in your app. Here is a basic example.

```vue
<template>
    <fade-transition>
        <p v-show="show">Fade transition</p>
    </fade-transition>
</template>

<script setup>
const show = ref(true)
</script>
```

## Reference

For more information about all available [Props](https://github.com/Noction/vue-bezier#props), please check the [vue-bezier](https://github.com/Noction/vue-bezier) module, since this one only a wrapper for its integration in Nuxt3.

## License

MIT © [50rayn](https://github.com/50rayn)
