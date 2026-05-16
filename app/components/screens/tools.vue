<script setup lang="ts">

</script>

<template>
  <wrappers-container is="section" size="l">
    <h5
      :class="[
        'font-bold text-[48px]/[1.2em] text-center',
        'tablet:text-[32px]',
        'mobile:text-[28px]',
      ]"
    >
      Всё, что вам нужно
    </h5>
    <p
      :class="[
        'font-medium text-[20px]/[1.2em] text-center text-text-3 mt-3',
        'tablet:text-[18px] tablet:mt-2',
        'mobile:text-[16px] mobile:mt-1',
      ]"
    >
      Комплексная платформа, разработанная для того, чтобы помочь вам пройти путь от новичка до свободного владения языком.
    </p>

    <div
      :class="[
        'grid grid-cols-3 gap-10 mt-10',
        'tablet:gap-5 tablet:grid-cols-2 tablet:mt-8',
        'mobile:gap-4 mobile:grid-cols-1 mobile:mt-7',
      ]"
    >
      <article
        :class="[
          'bg-base-white rounded-2xl shadow-xl flex flex-col items-start px-7 h-70 py-9',
          'tablet:h-auto tablet:px-5 tablet:py-7',
        ]"
      >
        <div
          :class="[
            'size-12 flex items-center justify-center bg-surface-brand-primary rounded-2xl',
            'tablet:size-10',
          ]"
        >
          <u-icon
            name="i-lucide-brain"
            :class="[
              'size-6 text-icon-brand-primary',
              'tablet:size-5',
            ]"
          />
        </div>
        <h5
          :class="[
            'h35-s mt-6',
            'tablet:b1-s tablet:mt-4',
          ]"
        >
          Умные карточки
        </h5>
        <p
          :class="[
            'b1-r text-text-2 mt-4',
            'tablet:c1-r tablet:mt-2',
          ]"
        >
          Алгоритмы интервального повторения адаптируются к вашему темпу обучения, помогая вам эффективно запоминать словарный запас.
        </p>
      </article>
      <article
        :class="[
          'bg-base-white rounded-2xl shadow-xl flex flex-col items-start px-7 h-70 py-9',
          'tablet:h-auto tablet:px-5 tablet:py-7',
        ]"
      >
        <div
          :class="[
            'size-12 flex items-center justify-center bg-surface-brand-primary rounded-2xl',
            'tablet:size-10',
          ]"
        >
          <u-icon
            name="i-lucide-book"
            :class="[
              'size-6 text-icon-brand-primary',
              'tablet:size-5',
            ]"
          />
        </div>
        <h5
          :class="[
            'h35-s mt-6',
            'tablet:b1-s tablet:mt-4',
          ]"
        >
          Практика кандзи
        </h5>
        <p
          :class="[
            'b1-r text-text-2 mt-4',
            'tablet:c1-r tablet:mt-2',
          ]"
        >
          Освойте порядок написания и чтения букв с помощью интерактивных инструментов для практики и мнемонических приемов.
        </p>
      </article>
      <article
        :class="[
          'bg-base-white rounded-2xl shadow-xl flex flex-col items-start px-7 h-70 py-9',
          'tablet:h-auto tablet:px-5 tablet:py-7',
        ]"
      >
        <div
          :class="[
            'size-12 flex items-center justify-center bg-surface-brand-primary rounded-2xl',
            'tablet:size-10',
          ]"
        >
          <u-icon
            name="i-lucide-trending-up"
            :class="[
              'size-6 text-icon-brand-primary',
              'tablet:size-5',
            ]"
          />
        </div>
        <h5
          :class="[
            'h35-s mt-6',
            'tablet:b1-s tablet:mt-4',
          ]"
        >
          Отслеживание прогресса
        </h5>
        <p
          :class="[
            'b1-r text-text-2 mt-4',
            'tablet:c1-r tablet:mt-2',
          ]"
        >
          Визуализируйте свой путь с помощью подробной аналитики, отслеживания результатов и празднования важных событий.
        </p>
      </article>
    </div>
  </wrappers-container>
</template>
