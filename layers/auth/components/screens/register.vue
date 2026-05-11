<script setup lang="ts">
import { registerSchema, type TRegisterSchema } from '@layers/auth/shared/schemas';
import type { FormSubmitEvent } from '@nuxt/ui';

const state = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  level: 'beginner',
});

const { register, loading } = useAuth();

async function onSubmit(event: FormSubmitEvent<TRegisterSchema>) {
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
        'tablet:w-100',
        'mobile:w-full',
      ]"
    >
      <div
        :class="[
          'text-center mb-6',
          'tablet:mb-4',
        ]"
      >
        <div
          :class="[
            'text-5xl',
            'tablet:text-4xl',
            'mobile:text-3xl',
          ]"
        >
          🗾
        </div>
        <h1
          :class="[
            'text-4xl font-bold text-brand-800 mt-1.5',
            'tablet:text-3xl tablet:mt-1',
            'mobile:text-2xl',
          ]"
        >
          KanjiGo
        </h1>
        <p
          :class="[
            'b2-r text-gray-600 mt-1.5',
            'tablet:c1-r',
          ]"
        >
          Один иероглиф в день - и мир открывается
        </p>
      </div>

      <UForm
        :validate-on="[]"
        :schema="registerSchema"
        :state="state"
        @submit="onSubmit"
      >
        <div
          :class="[
            'px-4 space-y-2',
            'mobile:px-2',
          ]"
        >
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
              icon="i-lucide-mail"
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
          />

          <UButton
            type="submit"
            color="primary"
            block
            size="lg"
            class="mt-3"
            :loading="loading"
          >
            Начать путешествие ✨
          </UButton>
        </div>

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
