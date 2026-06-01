<script setup>
const isOpen = ref(true);

const navItems = [
  {
    label: 'Дашборд',
    icon: 'i-lucide-layout-dashboard',
    to: '/dashboard',
  },
  {
    label: 'Словарь',
    icon: 'i-lucide-book-text',
    to: '/vocabulary',
  },
  {
    label: 'Профиль',
    icon: 'i-lucide-user',
    to: '/profile',
  },
];

defineShortcuts({
  o: () => (isOpen.value = !isOpen.value),
});
</script>

<template>
  <div class="flex h-svh overflow-hidden">
    <u-sidebar
      v-model:open="isOpen"
      collapsible="icon"
      close
      close-icon
      variant="sidebar"
      rail
    >
      <template #header="{ state, close }">
        <div class="flex items-center justify-between w-full py-5">
          <atoms-logo :size="adaptiveValue({ d: 'm', t: 's' })" />

          <u-icon
            v-if="state === 'expanded'"
            name="i-lucide-x"
            class="size-6 tablet:size-5 cursor-pointer hover:text-text-2"
            @click="close"
          />
        </div>
      </template>

      <u-navigation-menu
        orientation="vertical"
        :items="navItems"
        class="w-full"
      />

      <template #footer>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-medium truncate">John Doe</p>
          <p class="text-xs text-muted truncate">john@example.com</p>
        </div>
      </template>
    </u-sidebar>

    <div class="flex flex-col flex-1 min-h-0">
      <header class="flex bg-base-white items-center gap-3 px-4 h-16 border-b border-default">
        <u-button
          icon="i-lucide-panel-left"
          color="neutral"
          variant="ghost"
          @click="isOpen = !isOpen"
        />
        <slot name="header" />
      </header>

      <main class="flex-1 min-h-0 overflow-y-auto p-6">
        <slot />
      </main>
    </div>
  </div>
</template>
