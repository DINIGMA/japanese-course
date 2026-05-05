<script setup lang="ts">
const { fetch } = usePosts();

onMounted(fetch);
</script>

<template>
  <div>
    <UTooltip text="Open on GitHub">
      <UButton
        label="Open"
        color="neutral"
        variant="subtle"
      />
    </UTooltip>
  </div>
</template>
