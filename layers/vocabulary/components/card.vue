<script setup lang="ts">
defineProps<{
  state: 'added' | 'none';
}>();
</script>

<template>
  <article class="card flex flex-col bg-base-white rounded-3xl p-4 cursor-pointer">
    <div class="px-3 py-1 bg-blue-100 rounded-2xl w-fit">
      <span class="c1-s text-blue-500">N4</span>
    </div>
    <div class="mt-5">
      <h5 class="font-noto text-[48px]/[1.02em] text-accent-primary">食べる</h5>
      <p class="font-noto text-[17px]/[1.02em] font-semibold text-text-3 mt-4">たべる</p>
    </div>

    <p class="h5-s mt-5">Есть, питаться</p>

    <p class="b2-m text-text-3 mt-3">Глагол</p>

    <div class="h-px bg-surface-3 w-full my-5" />

    <u-button
      :leading-icon="state === 'added' ? 'i-lucide-check' : 'i-lucide-plus'"
      :variant="state === 'added' ? 'solid' : 'outline'"
      :color="state === 'added' ? 'secondary' : 'primary'"
    >
      {{ state === 'added' ? 'Добавлено' : 'Добавить' }}
    </u-button>
  </article>
</template>

<style scoped lang="scss">
.card {
  transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;

  will-change: transform;

  &:hover {
    box-shadow:
        0 20px 40px rgb(0 0 0 / 5%),
        0 8px 16px rgb(0 0 0 / 5%);
    transform: translateY(-3px);
  }
}
</style>
