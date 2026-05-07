<script setup lang="ts">
const { fetch } = usePosts();

onMounted(fetch);
</script>

<template>
  <div>
    <UTooltip text="Open on GitHub">
      <UButton
        icon="i-lucide-rocket"
        size="md"
        color="primary"
        variant="solid"
      >
        Button
      </UButton>
      <UIcon name="i-lucide-lightbulb" class="size-5" />
    </UTooltip>
  </div>
</template>
