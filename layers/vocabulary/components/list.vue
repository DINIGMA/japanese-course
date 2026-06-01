<script setup lang="ts">

</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <vocabulary-card
      v-for="(item, idx) in 10"
      :key="idx"
      state="none"
    />
  </div>
</template>
