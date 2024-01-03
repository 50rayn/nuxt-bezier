<template>
  <div class="page-wrapper container">
    <FadeTransition
      :group="true"
      class="list-wrapper"
    >
      <TilesInstallation />

      <TilesConfiguration />

      <TilesHeader />


      <template
        v-for="name in transitionNames"
        :key="name"
      >
        <TilesBezier
          :name="name"
          :comp="transitionList[name]"
        />
      </template>
    </FadeTransition>
  </div>
</template>

<script setup>
const transitionList = {
  FadeTransition: resolveComponent('FadeTransition'),
  ZoomCenterTransition: resolveComponent('ZoomCenterTransition'),
  ZoomXTransition: resolveComponent('ZoomXTransition'),
  ZoomYTransition: resolveComponent('ZoomYTransition'),
  SlideXLeftTransition: resolveComponent('SlideXLeftTransition'),
  SlideXRightTransition: resolveComponent('SlideXRightTransition'),
  SlideYUpTransition: resolveComponent('SlideYUpTransition'),
  SlideYDownTransition: resolveComponent('SlideYDownTransition'),
  ScaleTransition: resolveComponent('ScaleTransition'),
  CollapseTransition: resolveComponent('CollapseTransition'),
}

const transitionNames = ref(Object.keys(transitionList))
</script>

<style>
.container {
  width: 100%;

  @media (min-width: 640px) { max-width: 640px; }   /* sm */
  @media (min-width: 768px) { max-width: 768px; }   /* md */
  @media (min-width: 1024px) { max-width: 1024px; } /* lg */
  @media (min-width: 1280px) { max-width: 1280px; } /* xl */
  @media (min-width: 1536px) { max-width: 1536px; } /* 2xl */
}

.page-wrapper {
  margin: 0 auto;
  padding: 1rem 2rem;

  @media (min-width: 640px) { padding-block: 1.5rem; }
  @media (min-width: 1024px) { padding-block: 2rem; }

  .list-wrapper {
    display: grid;
    gap: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.5rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 2rem;
    }

    @media (min-width: 1536px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 2.5rem;
    }
  }
}
</style>
