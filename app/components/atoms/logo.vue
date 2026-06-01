<script setup lang="ts">
const { size = 'l' } = defineProps<{
  size?: 's' | 'm' | 'l';
}>();

const sizes = {
  s: {
    circle: 'size-8 text-sm',
    title: 'text-base',
  },
  m: {
    circle: 'size-10 text-base',
    title: 'text-xl',
  },
  l: {
    circle: 'size-12 text-lg',
    title: 'text-2xl',
  },
};
</script>

<template>
  <div class="flex items-center select-none gap-2">
    <div
      class="rounded-full flex items-center justify-center bg-accent-primary text-base-white shrink-0"
      :class="sizes[size].circle"
    >
      日
    </div>

    <h1
      class="font-bold text-base-black truncate"
      :class="sizes[size].title"
    >
      KanjiGo
    </h1>
  </div>
</template>
