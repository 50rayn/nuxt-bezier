<template>
  <div class="tile-wrapper">
    <slot name="default" />
  </div>
</template>

<style>
.tile-wrapper {
  height: 16rem;
  padding: 1rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.375rem;
  border-color: var(--slate-200);
  overflow: hidden;
  color: var(--slate-800);
  user-select: none;

  @media (prefers-color-scheme: dark) {
    color: var(--slate-200);
    border-color: var(--slate-800);
  }
}
</style>
