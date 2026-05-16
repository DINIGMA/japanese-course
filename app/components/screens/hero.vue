<script setup lang="ts">
const { isMobile } = useDevice();
</script>

<template>
  <section class="px-15 tablet:p-0">
    <div
      :class="[
        'flex items-center w-fit',
        'tablet:items-start',
        'mobile:grid mobile:grid-cols-1',
      ]"
    >
      <div
        :class="[
          'mr-10 flex flex-col grow-0 max-w-260',
          'tablet:mr-8 tablet:pt-10',
          'mobile:mr-0 mobile:pt-0 mobile:items-center mobile:justify-center',
        ]"
      >
        <h2
          :class="[
            'text-[64px]/[1.1em] font-bold',
            'desktop-s:text-[52px]',
            'tablet:text-[32px]',
            'mobile:text-center mobile:text-[26px]',
          ]"
        >
          Освойте японский язык путем практики
        </h2>

        <div v-if="!isMobile">
          <p
            :class="[
              'text-[24px]/[1.3em] font-medium text-text-3 mt-7 max-w-3/4',
              'desktop-s:max-w-full',
              'tablet:text-[18px] tablet:mt-5',
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
              :size="adaptiveValue({ d: 'xl', t: 'lg' })"
              href="/register"
            >
              Начать изучение
            </u-button>
            <u-button
              class="rounded-full"
              color="neutral"
              variant="outline"
              :size="adaptiveValue({ d: 'xl', t: 'lg' })"
              href="/login"
            >
              Войти
            </u-button>
          </div>
        </div>
      </div>

      <!-- Card -->
      <article
        :class="[
          'w-160 py-10 bg-base-white rounded-2xl shadow-2xl shrink-0',
          'tablet:w-100 tablet:py-8',
          'mobile:w-full mobile:mt-8 mobile:py-6',
        ]"
      >
        <div
          :class="[
            'px-10 flex items-center justify-between',
            'tablet:px-5',
            'mobile:px-4 mobile:grid mobile:grid-cols-1',
          ]"
        >
          <h3 class="h3-s tablet:h5-s">Практика на сегодня</h3>
          <div
            :class="[
              'flex items-center py-2 px-2.5 bg-surface-brand-primary text-accent-primary rounded-full',
              'mobile:px-1.5 mobile:py-1.5 mobile:w-fit mobile:mt-2',
            ]"
          >
            <u-icon
              name="i-lucide-flame"
              :class="[
                'size-6 shrink-0 mr-2',
                'tablet:size-5',
                'mobile:mr-1',
              ]"
            />
            <span class="h5-s tablet:c1-s">Серия из 7 дней</span>
          </div>
        </div>

        <div class="h-px w-full bg-neutral-100 my-5" />

        <div class="px-10 tablet:px-5 mobile:px-4">
          <div
            :class="[
              'bg-neutral-50 rounded-2xl shadow-xl flex flex-col justify-center items-center p-10',
              'tablet:p-7',
            ]"
          >
            <div class="bg-base-white rounded-full px-3 py-2">
              <p class="b2-s text-text-3 mobile:c1-s">Словарный запас · Уровень N4</p>
            </div>
            <p
              :class="[
                'mt-5 text-text-brand-primary font-noto text-[82px]',
                'tablet:text-[64px] tablet:mt-3',
                'mobile:text-[48px]',
              ]"
            >
              学ぶ
            </p>
            <span
              :class="[
                'h4-s mt-3',
                'mobile:h5-s mobile:mt-2',
              ]"
            >
              manabu
            </span>
            <span
              :class="[
                'h5-s text-text-2 mt-3',
                'mobile:b1-s mobile:mt-2',
              ]"
            >учиться, изучать</span>
          </div>
        </div>

        <div
          :class="[
            'px-10 grid grid-cols-3 gap-2 mt-10',
            'tablet:px-5 tablet:mt-5 tablet:grid-cols-2',
            'mobile:px-4 mobile:mt-4 mobile:grid-cols-1',
          ]"
        >
          <div class="flex flex-col items-start justify-center p-4 bg-blue-100 border border-blue-200 rounded-2xl">
            <div class="flex items-center justify-center">
              <u-icon name="i-lucide-book" class="mr-1 text-blue-500 shrink-0" />
              <span class="c1-m text-text-3">Слов выучено</span>
            </div>
            <span
              :class="[
                'text-[32px] font-bold mt-3',
                'tablet:text-[24px]',
              ]"
            >320</span>
            <div class="flex items-center justify-center text-blue-500 mt-3">
              <u-icon name="i-lucide-trending-up" class="mr-2 shrink-0" />
              <span class="c2-s">+5 на этой неделе</span>
            </div>
          </div>
          <div class="flex flex-col items-start justify-center p-4 bg-surface-brand-primary border border-red-100 rounded-2xl">
            <p class="c1-m text-text-3">漢字 Кандзи</p>
            <span
              :class="[
                'text-[32px] font-bold mt-3',
                'tablet:text-[24px]',
              ]"
            >87</span>
            <div class="flex items-center justify-center text-text-brand-primary mt-3">
              <u-icon name="i-lucide-trending-up" class="mr-2 shrink-0" />
              <span class="c2-s">+7 на этой неделе</span>
            </div>
          </div>
          <div class="flex flex-col items-start justify-center p-4 bg-neutral-50 border border-neutral-100 rounded-2xl">
            <div class="flex items-center justify-center">
              <u-icon name="i-lucide-award" class="mr-1 text-text-1 shrink-0" />
              <span class="c1-m text-text-3">Текущий уровень</span>
            </div>
            <span
              :class="[
                'text-[32px] font-bold mt-3',
                'tablet:text-[24px]',
              ]"
            >N4</span>
            <p class="c2-s mt-3 text-text-1">
              Средний
            </p>
          </div>
        </div>

        <div
          :class="[
            'px-10 mt-7',
            'tablet:px-5 tablet:mt-5',
            'mobile:px-4 mobile:mt-4',
          ]"
        >
          <div class="flex justify-between items-center">
            <p class="b2-m text-text-3">Ежедневный прогресс</p>
            <span class="b2-m text-text-1">15 / 20 слов</span>
          </div>

          <div class="h-4 mt-4 bg-neutral-50 rounded-full w-full border border-neutral-100 relative z-1">
            <div class="absolute z-10 top-0 left-0 w-2/3 h-full bg-accent-primary rounded-full" />
          </div>
        </div>
      </article>

      <div v-if="isMobile">
        <p class="text-[16px]/[1.3em] font-medium text-text-3 mt-8 text-center">
          Развивайте беглость речи с помощью умных карточек, упражнений по иероглифам и персонализированных учебных планов, разработанных для реального общения.
        </p>
        <div
          class="mt-5 grid grid-cols-2 gap-2 mx-auto w-fit"
        >
          <u-button
            class="rounded-full"
            color="primary"
            variant="solid"
            size="lg"
            href="/register"
          >
            Начать изучение
          </u-button>
          <u-button
            class="rounded-full"
            color="neutral"
            variant="outline"
            size="lg"
            href="/login"
          >
            Войти
          </u-button>
        </div>
      </div>
    </div>
  </section>
</template>
