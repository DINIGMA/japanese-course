<script setup lang="ts">
const {
  is = 'div',
  size = 'm',
} = defineProps<{
  is?: 'div' | 'section';
  size?: 's' | 'm' | 'l';
}>();
</script>

<template>
  <component
    :is="is"
    class="container"
    :class="`
      container_size_${size}
    `"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.container {
  margin: 0 auto;

  &_size {
    &_s {
      max-width: 1110px;
    }

    &_m {
      max-width: 1300px;
    }

    &_l {
      max-width: 1440px;
    }
  }
}
</style>
