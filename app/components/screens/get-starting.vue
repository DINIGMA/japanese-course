<script setup lang="ts">

</script>

<template>
  <wrappers-container is="section" size="l">
    <article
      :class="[
        'px-20 pt-20 pb-10 bg-base-white rounded-2xl shadow-2xl w-200 mx-auto flex flex-col items-center',
        'tablet:w-full tablet:px-10 tablet:pt-10 tablet:pb-5',
      ]"
    >
      <h4
        :class="[
          'font-bold text-[32px]/[1.1em] text-center',
          'tablet:text-[24px]',
        ]"
      >
        Начните свой путь сегодня!
      </h4>
      <p
        :class="[
          'font-medium text-[18px]/[1.1em] text-center text-text-2 mt-5',
          'tablet:text-[16px]',
        ]"
      >
        Присоединяйтесь к нашей системе и начните изучать японский язык уже сегодня.
      </p>
      <u-button
        :size="adaptiveValue({ d: 'xl', t: 'lg' })"
        class="rounded-full mt-7"
        href="/login"
      >
        Начать бесплатно!
      </u-button>
    </article>
  </wrappers-container>
</template>
