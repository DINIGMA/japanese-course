<script setup lang="ts">
definePageMeta({
  layout: 'empty',
});
</script>

<template>
  <div
    :class="[
      'h-screen flex relative px-5',
      'mobile:px-4',
    ]"
  >
    <auth-screens-login />
  </div>
</template>
