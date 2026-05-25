<script setup>
const isOpen = ref(true);

const navItems = [
  {
    label: 'Dashboard',
    icon: 'i-lucide-house',
    to: '/',
  },
  {
    label: 'Settings',
    icon: 'i-lucide-settings',
    to: '/',
  },
  {
    label: 'Profile',
    icon: 'i-lucide-user',
    to: '/',
  },
];

defineShortcuts({
  o: () => (isOpen.value = !isOpen.value),
});
</script>

<template>
  <div class="flex h-svh">
    <u-sidebar
      v-model:open="isOpen"
      title="My App"
      collapsible="icon"
      close
      close-icon
      variant="sidebar"
      rail
    >
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

    <main class="flex-1 min-h-0">
      <header class="flex items-center gap-3 px-4 h-16 border-b border-default">
        <UButton
          icon="i-lucide-panel-left"
          color="neutral"
          variant="ghost"
          @click="isOpen = !isOpen"
        />
        <slot name="header" />
      </header>

      <div class="p-6">
        <slot />
      </div>
    </main>
  </div>
</template>
