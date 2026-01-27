<script setup>
import packageJson from '@/package.json'

defineOptions({ inheritAttrs: false })

const show = ref(false)

onMounted(() => {
  setTimeout(() => show.value = true, 100)
})
</script>

<template>
  <TilesBorderWrapper class="header-section">
    <div class="grid-cell">
      <ScaleTransition :duration="500" origin="center">
        <img
          v-if="show"
          class="logo"
          src="/logo.png"
          alt="nuxt-bezier"
          width="64"
          height="64"
        >
      </ScaleTransition>
    </div>

    <div class="grid-cell">
      <BlurTransition :duration="400" :delay="200">
        <h2 v-if="show">
          nuxt-bezier
        </h2>
      </BlurTransition>
    </div>

    <div class="grid-cell">
      <WipeTransition :duration="400" :delay="400" direction="top">
        <h3 v-if="show">
          {{ packageJson.version }}
        </h3>
      </WipeTransition>
    </div>
  </TilesBorderWrapper>
</template>

<style>
  .header-section {
    display: grid;
    grid-area: 1 / -2 / 2 / -1;
    grid-template-rows: 64px 2rem 1.5rem;
    gap: 1rem;
    place-items: center;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
    }

    h2,
    h3 {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    }
  }

  .grid-cell {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
