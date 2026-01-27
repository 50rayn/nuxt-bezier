<script setup>
const show = ref(true)
</script>

<template>
  <div>
    <!-- Test that prefixed components work -->
    <MyDissolveTransition>
      <div v-if="show">
        Prefixed appear
      </div>
    </MyDissolveTransition>

    <MyScaleListTransition tag="ul">
      <li key="a">Prefixed list item</li>
    </MyScaleListTransition>
  </div>
</template>