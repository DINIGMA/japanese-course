<script setup lang="ts">
definePageMeta({
  layout: 'lending',
});
</script>

<template>
  <div>
    <screens-hero />

    <screens-tools
      :class="[
        'mt-30!',
        'tablet:mt-20!',
      ]"
    />

    <screens-get-starting
      :class="[
        'mt-30!',
        'tablet:mt-20!',
      ]"
    />
  </div>
</template>
