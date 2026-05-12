<script setup lang="ts">

</script>

<template>
  <section>
    <div class="flex items-center w-fit">
      <div class="mr-10 flex flex-col grow-0 max-w-260">
        <h2
          :class="[
            'text-[64px]/[1.1em] font-bold',
            'desktop-s:text-[52px]',
            'tablet:text-[48px]',
          ]"
        >
          Освойте японский язык путем практики
        </h2>
        <p
          :class="[
            'text-[24px]/[1.3em] font-medium text-text-3 mt-7 max-w-3/4',
            'desktop-s:max-w-full',
            'tablet:text-[20px] tablet:mt-5',
          ]"
        >
          Развивайте беглость речи с помощью умных карточек, упражнений по иероглифам и персонализированных учебных планов, разработанных для реального общения.
        </p>
        <div
          :class="[
            'mt-10 flex items-center w-fit',
            'tablet:mt-7',
          ]"
        >
          <u-button
            class="mr-2 rounded-full"
            color="primary"
            variant="solid"
            size="xl"
            href="/register"
          >
            Начать изучение
          </u-button>
          <u-button
            class="rounded-full"
            color="neutral"
            variant="outline"
            size="xl"
            href="/login"
          >
            Войти
          </u-button>
        </div>
      </div>

      <!-- Card -->
      <article class="w-160 py-10 bg-base-white rounded-xl shadow-2xl shrink-0">
        <div class="px-10 flex items-center justify-between">
          <h3 class="h3-s">Практика на сегодня</h3>
          <div class="flex items-center py-2 px-2.5 bg-surface-brand-primary text-accent-primary rounded-full">
            <u-icon name="i-lucide-flame" class="size-6 shrink-0 mr-2" />
            <span class="h5-s">Серия из 7 дней</span>
          </div>
        </div>

        <div class="h-0.25 w-full bg-neutral-100 my-5" />

        <div class="px-10">
          <div class="bg-neutral-50 rounded-2xl shadow-xl flex flex-col justify-center items-center p-10">
            <div class="bg-base-white rounded-full px-3 py-2">
              <p class="b2-s text-text-3">Словарный запас · Уровень N4</p>
            </div>
            <p class="mt-5 text-text-brand-primary font-noto text-[82px]">学ぶ</p>
            <span class="h4-s mt-3">manabu</span>
            <span class="h5-s text-text-2 mt-3">учиться, изучать</span>
          </div>
        </div>

        <div class="px-10 grid grid-cols-3 gap-2 mt-10">
          <div class="flex flex-col items-start justify-center p-4 bg-blue-100 border-1 border-blue-200 rounded-2xl">
            <div class="flex items-center justify-center">
              <u-icon name="i-lucide-book" class="mr-1 text-blue-500 shrink-0" />
              <span class="c1-m text-text-3">Слов выучено</span>
            </div>
            <span class="text-[32px] font-bold mt-3">320</span>
            <div class="flex items-center justify-center text-blue-500 mt-3">
              <u-icon name="i-lucide-trending-up" class="mr-2 shrink-0" />
              <span class="c2-s">+5 на этой неделе</span>
            </div>
          </div>
          <div class="flex flex-col items-start justify-center p-4 bg-surface-brand-primary border-1 border-red-100 rounded-2xl">
            <p class="c1-m text-text-3">漢字 Кандзи</p>
            <span class="text-[32px] font-bold mt-3">87</span>
            <div class="flex items-center justify-center text-text-brand-primary mt-3">
              <u-icon name="i-lucide-trending-up" class="mr-2 shrink-0" />
              <span class="c2-s">+7 на этой неделе</span>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center p-4 bg-neutral-50 border-1 border-neutral-100 rounded-2xl">
            <div class="flex items-center justify-center">
              <u-icon name="i-lucide-award" class="mr-1 text-text-1 shrink-0" />
              <span class="c1-m text-text-3">Текущий уровень</span>
            </div>
            <span class="text-[32px] font-bold mt-3">N4</span>
            <p class="c2-s mt-3 text-text-1">
              Средний
            </p>
          </div>
        </div>

        <div class="px-10 mt-7">
          <div class="flex justify-between items-center">
            <p class="b2-m text-text-3">Ежедневный прогресс</p>
            <span class="b2-m text-text-1">15 / 20 слов</span>
          </div>

          <div class="h-4 mt-4 bg-neutral-50 rounded-full w-full border-1 border-neutral-100 relative z-1">
            <div class="absolute z-10 top-0 left-0 w-2/3 h-full bg-accent-primary rounded-full" />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
