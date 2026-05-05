<script setup lang="ts">
import { ru } from '@nuxt/ui/locale';
</script>

<template>
  <UApp :locale="ru" :tooltip="{ delayDuration: 100 }">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </UApp>
</template>
