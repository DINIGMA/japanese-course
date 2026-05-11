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
    <u-card
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

      <u-form
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
          <u-form-field name="name" label="Как вас зовут?">
            <u-input
              v-model="state.name"
              class="w-full"
              placeholder="Введи имя"
              icon="i-lucide-sun"
            />
          </u-form-field>

          <u-form-field
            name="email"
            label="Email"
          >
            <u-input
              v-model="state.email"
              class="w-full"
              placeholder="your@email.com"
              icon="i-lucide-mail"
            />
          </u-form-field>

          <u-form-field name="password" label="Пароль">
            <u-input
              v-model="state.password"
              class="w-full"
              type="password"
              placeholder="********"
              icon="i-heroicons-lock-closed"
            />
          </u-form-field>

          <u-form-field name="confirmPassword" label="Подтвердите пароль">
            <UInput
              v-model="state.confirmPassword"
              type="password"
              placeholder="********"
              icon="i-heroicons-check-badge"
            />
          </u-form-field>

          <u-form-field name="level" label="Ваш уровень японского">
            <u-select
              v-model="state.level"
              :items="[
                { label: '🌱 Совсем не знаю', value: 'beginner' },
                { label: '📖 Знаю хирагану/катакану', value: 'intermediate' },
                { label: '🎯 Читаю простые иероглифы', value: 'advanced' },
              ]"
              placeholder="Выберите уровень"
            />
          </u-form-field>

          <u-checkbox
            label="Я согласен с правилами сообщества и буду учиться каждый день"
          />

          <u-button
            type="submit"
            color="primary"
            block
            size="md"
            class="mt-3"
            :loading="loading"
          >
            Начать путешествие ✨
          </u-button>
        </div>

        <p class="text-center b2-m text-gray-600 mt-4">
          Уже есть аккаунт?
          <nuxt-link to="/login" class="inline-block text-brand-600 hover:text-brand-700 font-medium text-accent-primary">Войти</nuxt-link>
        </p>
      </u-form>

      <div class="mt-6 text-center text-xs text-gray-400">
        <p class="ha7-m">毎日少しずつ — <span class="b2-m">Майнити сукозудзу — Каждый день понемногу</span></p>
      </div>
    </u-card>
  </div>
</template>
