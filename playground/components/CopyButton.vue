<script setup lang="ts">
const checked = ref(false)

const emit = defineEmits(['copy'])

function onCopy () {
  if (checked.value === true) return

  emit('copy')

  checked.value = true
  setTimeout(() => checked.value = false, 3_000)
}
</script>

<template>
  <button
    class="copy-btn"
    :class="{checked}"
    @click="onCopy"
  >
    <span />
  </button>
</template>

<style>
button.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  color: var(--slate-500);
  background-color: transparent;
  background-image: none;
  border: 0;
  cursor: pointer;

  &:hover { color: var(--green-500) }

  @media (prefers-color-scheme: dark) {
    color: var(--slate-300);

    &:hover { color: var(--green-400) }
  }

  span {
    display: inline-block;
    background-color: currentColor;
    width: 1em;
    height: 1em;
    mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTI0IDB2MjRIMFYwek0xMi41OTMgMjMuMjU4bC0uMDExLjAwMmwtLjA3MS4wMzVsLS4wMi4wMDRsLS4wMTQtLjAwNGwtLjA3MS0uMDM1Yy0uMDEtLjAwNC0uMDE5LS4wMDEtLjAyNC4wMDVsLS4wMDQuMDFsLS4wMTcuNDI4bC4wMDUuMDJsLjAxLjAxM2wuMTA0LjA3NGwuMDE1LjAwNGwuMDEyLS4wMDRsLjEwNC0uMDc0bC4wMTItLjAxNmwuMDA0LS4wMTdsLS4wMTctLjQyN2MtLjAwMi0uMDEtLjAwOS0uMDE3LS4wMTctLjAxOG0uMjY1LS4xMTNsLS4wMTMuMDAybC0uMTg1LjA5M2wtLjAxLjAxbC0uMDAzLjAxMWwuMDE4LjQzbC4wMDUuMDEybC4wMDguMDA3bC4yMDEuMDkzYy4wMTIuMDA0LjAyMyAwIC4wMjktLjAwOGwuMDA0LS4wMTRsLS4wMzQtLjYxNGMtLjAwMy0uMDEyLS4wMS0uMDItLjAyLS4wMjJtLS43MTUuMDAyYS4wMjMuMDIzIDAgMCAwLS4wMjcuMDA2bC0uMDA2LjAxNGwtLjAzNC42MTRjMCAuMDEyLjAwNy4wMi4wMTcuMDI0bC4wMTUtLjAwMmwuMjAxLS4wOTNsLjAxLS4wMDhsLjAwNC0uMDExbC4wMTctLjQzbC0uMDAzLS4wMTJsLS4wMS0uMDF6Ii8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNOSAyYTIgMiAwIDAgMC0yIDJ2MmgyVjRoMTF2MTFoLTJ2MmgyYTIgMiAwIDAgMCAyLTJWNGEyIDIgMCAwIDAtMi0yek00IDdhMiAyIDAgMCAwLTIgMnYxMWEyIDIgMCAwIDAgMiAyaDExYTIgMiAwIDAgMCAyLTJWOWEyIDIgMCAwIDAtMi0yem0wIDJoMTF2MTFINHoiLz48L2c+PC9zdmc+);
  }

  &.checked span {
    mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTlMMjEgN2wtMS40MS0xLjQxeiIvPjwvc3ZnPg==);
  }
}
</style>
