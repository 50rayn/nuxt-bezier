<template>
  <div class="tile-wrapper">
    <slot name="default" />
  </div>
</template>

<style>
  .tile-wrapper {
    height: 16rem;
    padding: 1rem;
    overflow: hidden;
    color: var(--slate-800);
    user-select: none;
    border-color: var(--slate-200);
    border-style: solid;
    border-width: 1px;
    border-radius: .375rem;

    @media (prefers-color-scheme: dark) {
      color: var(--slate-200);
      border-color: var(--slate-800);
    }
  }
</style>
