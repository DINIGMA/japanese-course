<script setup lang="ts">
const { user } = useAuth();
</script>

<template>
  <header>
    <div class="flex items-center justify-between">
      <atoms-logo />

      <client-only>
        <u-button
          :href="!!user ? '/dashboard' : '/login'"
          color="neutral"
          variant="outline"
          size="lg"
          :icon="!!user ? '' : 'i-heroicons-user'"
          :trailing-icon="!!user ? 'i-heroicons-arrow-right' : ''"
        >
          {{ !!user ? 'Дашборд' : 'Войти' }}
        </u-button>
      </client-only>
    </div>
  </header>
</template>
