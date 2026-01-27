<script setup>
// Appear: single element transitions (v-if/v-show)
const appearTransitions = {
  DissolveTransition: resolveComponent('DissolveTransition'),
  PushTransition: resolveComponent('PushTransition'),
  FadeSlideTransition: resolveComponent('FadeSlideTransition'),
  BlurTransition: resolveComponent('BlurTransition'),
  ScaleTransition: resolveComponent('ScaleTransition'),
}

// Between: switching elements (v-if/v-else with mode)
const betweenTransitions = {
  DissolveTransition: resolveComponent('DissolveTransition'),
  PushTransition: resolveComponent('PushTransition'),
  FadeSlideTransition: resolveComponent('FadeSlideTransition'),
  BlurTransition: resolveComponent('BlurTransition'),
  ScaleTransition: resolveComponent('ScaleTransition'),
  ZoomTransition: resolveComponent('ZoomTransition'),
  WipeTransition: resolveComponent('WipeTransition'),
  RotateTransition: resolveComponent('RotateTransition'),
  ClipPathTransition: resolveComponent('ClipPathTransition'),
}

// List: TransitionGroup for v-for
const listTransitions = {
  DissolveListTransition: resolveComponent('DissolveListTransition'),
  ScaleListTransition: resolveComponent('ScaleListTransition'),
}
</script>

<template>
  <div class="page-wrapper container">
    <DissolveListTransition tag="div" class="content">
      <TilesInstallationCmd key="installation" />
      <TilesConfigurationEx key="configuration" />
      <TilesHeaderInfo key="header" />
    </DissolveListTransition>

    <!-- Appear Transitions -->
    <section key="appear-section" class="section">
      <h2 class="section-title">
        Appear
      </h2>
      <p class="section-desc">
        Single element transitions with v-if/v-show
      </p>
      <div class="grid-wrapper">
        <TilesBezierItem
          v-for="(comp, name) in appearTransitions"
          :key="`appear-${name}`"
          :name="name"
          :comp="comp"
        />
      </div>
    </section>

    <!-- Between Transitions -->
    <section key="between-section" class="section">
      <h2 class="section-title">
        Between
      </h2>
      <p class="section-desc">
        Switching elements with v-if/v-else and mode
      </p>
      <div class="grid-wrapper">
        <TilesBezierBetweenItem
          v-for="(comp, name) in betweenTransitions"
          :key="`between-${name}`"
          :name="name"
          :comp="comp"
        />
      </div>
    </section>

    <!-- List Transitions -->
    <section key="list-section" class="section">
      <h2 class="section-title">
        List
      </h2>
      <p class="section-desc">
        TransitionGroup for v-for lists
      </p>
      <div class="grid-wrapper">
        <TilesBezierListItem
          v-for="(comp, name) in listTransitions"
          :key="`list-${name}`"
          :name="name"
          :comp="comp"
        />
      </div>
    </section>
  </div>
</template>

<style>
  .container {
    width: 100%;

    @media (width >= 640px) { max-width: 640px; }

    @media (width >= 768px) { max-width: 768px; }

    @media (width >= 1024px) { max-width: 1024px; }

    @media (width >= 1280px) { max-width: 1280px; }

    @media (width >= 1536px) { max-width: 1536px; }
  }

  .page-wrapper {
    padding: 1rem 2rem;
    margin: 0 auto;

    @media (width >= 640px) { padding-block: 1.5rem; }

    @media (width >= 1024px) { padding-block: 2rem; }
  }

  .content {
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;

    @media (width >= 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.5rem;
    }

    @media (width >= 1024px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 2rem;
    }
  }

  .section {
    margin-bottom: 3rem;

    .section-title {
      margin: 0 0 .5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--slate-800);

      @media (prefers-color-scheme: dark) { color: var(--slate-200); }
    }

    .section-desc {
      margin: 0 0 1.5rem;
      font-size: .875rem;
      color: var(--slate-600);

      @media (prefers-color-scheme: dark) { color: var(--slate-400); }
    }
  }

  .grid-wrapper {
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
</style>
