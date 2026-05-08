<script setup lang="ts">
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '@nuxt/ui';

const toast = useToast();

const { login, loading } = useAuth();

const state = reactive({
  email: '',
  password: '',
});

const schema = object({
  email: string()
    .required('Email обязателен')
    .email('Введите корректный email'),

  password: string()
    .required('Введите пароль'),
});

async function onSubmit(
  event: FormSubmitEvent<InferType<typeof schema>>,
) {
  try {
    await login({
      email: event.data.email,
      password: event.data.password,
    });

    await navigateTo('/');
  }
  catch (e: any) {
    toast.add({
      title: 'Ошибка входа',
      description: e.message,
      color: 'error',
    });
  }
}
</script>

<template>
  <div class="flex-1 flex items-center justify-center">
    <UCard
      :class="[
        'w-120 shadow-2xl',
        'mobile:w-full',
      ]"
    >
      <div class="text-center mb-6">
        <div class="text-5xl">🗾</div>
        <h1 class="text-4xl font-bold text-brand-800 mt-1.5">KanjiGo</h1>
        <p class="b2-r text-gray-600 mt-1.5">Один иероглиф в день - и мир открывается</p>
      </div>

      <UForm
        :validate-on="[]"
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <div class="px-4 space-y-2">
          <UFormField
            name="email"
            label="Email"
          >
            <UInput
              v-model="state.email"
              class="w-full"
              placeholder="your@email.com"
              icon="i-lucide-sun"
            />
          </UFormField>

          <UFormField name="password" label="Пароль">
            <UInput
              v-model="state.password"
              class="w-full"
              type="password"
              placeholder="********"
              icon="i-heroicons-lock-closed"
            />
          </UFormField>
        </div>

        <UButton
          type="submit"
          color="primary"
          block
          size="lg"
          class="mt-4"
          :loading="loading"
        >
          Войти
        </UButton>

        <p class="text-center b2-m text-gray-600 mt-4">
          Нету аккаунта?
          <nuxt-link to="/register" class="inline-block text-brand-600 hover:text-brand-700 font-medium text-accent-primary">Зарегистрироваться</nuxt-link>
        </p>
      </UForm>

      <div class="mt-6 text-center text-xs text-gray-400">
        <p class="ha7-m">毎日少しずつ — <span class="b2-m">Майнити сукозудзу — Каждый день понемногу</span></p>
      </div>
    </UCard>
  </div>
</template>
