<script setup>
const show = ref(true)
const activeTab = ref('tab1')
const items = ref(['item1', 'item2', 'item3'])
</script>

<template>
  <div>
    <!-- Appear: single element with v-if -->
    <section data-testid="appear">
      <DissolveTransition>
        <div v-if="show">
          Appear transition
        </div>
      </DissolveTransition>
    </section>

    <!-- Between: switching elements with v-if/v-else -->
    <section data-testid="between">
      <ScaleTransition mode="out-in">
        <div v-if="activeTab === 'tab1'" key="tab1">
          Tab 1 content
        </div>
        <div v-else key="tab2">
          Tab 2 content
        </div>
      </ScaleTransition>
    </section>

    <!-- List: multiple elements with v-for -->
    <section data-testid="list">
      <DissolveListTransition tag="ul">
        <li v-for="item in items" :key="item">
          {{ item }}
        </li>
      </DissolveListTransition>
    </section>
  </div>
</template>
