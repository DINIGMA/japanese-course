<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});

const { user } = useAuth();
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
    <p v-if="user">{{ user }}</p>
  </div>
</template>
