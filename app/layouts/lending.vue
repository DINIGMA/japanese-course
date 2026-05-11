<script setup lang="ts">
</script>

<template>
  <div class="relative h-full p-5">
    <div class="max-w-470 mx-auto">
      <organisms-lending-header class="px-4" />
    </div>

    <main class="isolate mx-auto flex w-full flex-1 flex-col">
      <slot />
    </main>
  </div>
</template>
