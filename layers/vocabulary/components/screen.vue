<script setup lang="ts">

</script>

<template>
  <div class="py-6">
    <!--    Header  -->
    <div class="flex justify-between items-center">
      <div>
        <h2 class="h1-b">Словарь</h2>
        <p class="h5-s text-text-2 mt-4">Пополняйте свой японский словарный запас по одному слову за раз.</p>
      </div>
      <div class="flex justify-center items-center">
        <div class="flex flex-col bg-base-white rounded-3xl shadow-md p-5">
          <div class="flex justify-center items-center mb-3">
            <u-icon name="i-lucide-book" class="mr-2" />
            <span class="c1-s text-text-3">Всего слов</span>
          </div>
          <span class="text-[34px]/[1.1em] font-bold">1212</span>
        </div>
        <div class="flex flex-col bg-primary rounded-3xl shadow-md p-5 ml-4">
          <div class="flex justify-center items-center mb-3 text-base-white">
            <u-icon name="i-lucide-book" class="mr-2" />
            <span class="c1-s">Мои слова</span>
          </div>
          <span class="text-[34px]/[1.1em] font-bold text-base-white">300</span>
        </div>
      </div>
    </div>

    <div class="h-px bg-surface-3 my-10 w-full" />
    <!--    Content -->

    <u-input
      icon="i-lucide-search"
      size="xl"
      variant="outline"
      placeholder="Поиск..."
      class="w-full"
      :ui="{
        base: 'rounded-full',
      }"
    />

    <vocabulary-list class="mt-10" />
  </div>
</template>
