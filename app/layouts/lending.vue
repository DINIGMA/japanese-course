<script setup lang="ts">
</script>

<template>
  <div class="relative h-full p-5">
    <div class="max-w-470 mx-auto">
      <organisms-lending-header class="px-4 mobile:px-0" />
    </div>

    <main
      :class="[
        'isolate mx-auto flex w-full max-w-470 flex-1 flex-col mt-20',
        'tablet:mt-12',
        'mobile:mt-10',
      ]"
    >
      <slot />
    </main>
  </div>
</template>
