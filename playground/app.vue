<script setup>
const transitionList = {
  BlurTransition: resolveComponent('BlurTransition'),
  ClipPathTransition: resolveComponent('ClipPathTransition'),
  DissolveTransition: resolveComponent('DissolveTransition'),
  FadeSlideTransition: resolveComponent('FadeSlideTransition'),
  PushTransition: resolveComponent('PushTransition'),
  RotateTransition: resolveComponent('RotateTransition'),
  ScaleTransition: resolveComponent('ScaleTransition'),
  WipeTransition: resolveComponent('WipeTransition'),
  ZoomTransition: resolveComponent('ZoomTransition'),
}

const transitionNames = ref(Object.keys(transitionList))
</script>

<template>
  <div class="page-wrapper container">
    <DissolveListTransition tag="div" class="list-wrapper">
      <TilesInstallationCmd key="installation" />

      <TilesConfigurationEx key="configuration" />

      <TilesHeaderInfo key="header" />

      <TilesBezierItem
        v-for="name in transitionNames"
        :key="name"
        :name="name"
        :comp="transitionList[name]"
      />
    </DissolveListTransition>
  </div>
</template>

<style>
  .container {
    width: 100%;

    @media (width >= 640px) { max-width: 640px; }   /* sm */

    @media (width >= 768px) { max-width: 768px; }   /* md */

    @media (width >= 1024px) { max-width: 1024px; } /* lg */

    @media (width >= 1280px) { max-width: 1280px; } /* xl */

    @media (width >= 1536px) { max-width: 1536px; } /* 2xl */
  }

  .page-wrapper {
    padding: 1rem 2rem;
    margin: 0 auto;

    @media (width >= 640px) { padding-block: 1.5rem; }

    @media (width >= 1024px) { padding-block: 2rem; }

    .list-wrapper {
      display: grid;
      gap: 1rem;

      @media (width >= 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
      }

      @media (width >= 1024px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 2rem;
      }

      @media (width >= 1536px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 2.5rem;
      }
    }
  }
</style>
