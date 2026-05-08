<script setup lang="ts">
import { object, string, type InferType, ref as yupRef } from 'yup';
import type { FormSubmitEvent } from '@nuxt/ui';

const state = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  level: 'beginner',
});

const { register, loading } = useAuth();

const schema = object({
  name: string().required('Введите имя').min(3, 'Минимум 3 символа'),
  email: string().required('Email обязателен').email('Введите корректный email'),
  password: string().required('Введите пароль').min(8, 'Пароль должен быть минимум 8 символов'),
  confirmPassword: string()
    .required('Подтвердите пароль')
    .oneOf([yupRef('password')], 'Пароли не совпадают'),
  level: string(),
});

async function onSubmit(event: FormSubmitEvent<InferType<typeof schema>>) {
  try {
    await register({
      email: event.data.email,
      password: event.data.password,
      options: {
        data: {
          name: event.data.name,
          level: event.data.level || 'beginner',
        },
      },
    });

    await navigateTo('/');
  }
  catch (err) {
    console.log(err);
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
          <UFormField name="name" label="Как вас зовут?">
            <UInput
              v-model="state.name"
              class="w-full"
              placeholder="Введи имя"
              icon="i-lucide-sun"
            />
          </UFormField>

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

          <UFormField name="confirmPassword" label="Подтвердите пароль">
            <UInput
              v-model="state.confirmPassword"
              type="password"
              placeholder="********"
              icon="i-heroicons-check-badge"
            />
          </UFormField>

          <UFormField name="level" label="Ваш уровень японского">
            <USelect
              v-model="state.level"
              :items="[
                { label: '🌱 Совсем не знаю', value: 'beginner' },
                { label: '📖 Знаю хирагану/катакану', value: 'intermediate' },
                { label: '🎯 Читаю простые иероглифы', value: 'advanced' },
              ]"
              placeholder="Выберите уровень"
            />
          </UFormField>

          <UCheckbox
            label="Я согласен с правилами сообщества и буду учиться каждый день"
            :ui="{ label: 'text-xs text-gray-600', root: 'items-center!' }"
          />
        </div>

        <UButton
          type="submit"
          color="primary"
          block
          size="lg"
          class="mt-4"
          :loading="loading"
        >
          Начать путешествие ✨
        </UButton>

        <p class="text-center b2-m text-gray-600 mt-4">
          Уже есть аккаунт?
          <nuxt-link to="/login" class="inline-block text-brand-600 hover:text-brand-700 font-medium text-accent-primary">Войти</nuxt-link>
        </p>
      </UForm>

      <div class="mt-6 text-center text-xs text-gray-400">
        <p class="ha7-m">毎日少しずつ — <span class="b2-m">Майнити сукозудзу — Каждый день понемногу</span></p>
      </div>
    </UCard>
  </div>
</template>
