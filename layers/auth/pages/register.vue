<script setup lang="ts">
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '@nuxt/ui';

const state = reactive({
  email: '',
  password: '',
});

const toast = useToast();

const schema = object({
  email: string().required().email('Какая то ошибка'),
  password: string().required(),
});

type TSchema = InferType<typeof schema>;

async function onSubmit(event: FormSubmitEvent<TSchema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' });
  console.log(event.data);
}
</script>

<template>
  <div class="h-screen flex relative px-5 mobile:px-4">
    <div class="flex-1 flex items-center justify-center">
      <u-form
        :validate-on="[]"
        class="flex flex-col items-center justify-center w-120 mobile:w-full px-5 py-4 bg-surface-brand-secondary shadow-xl rounded-xl"
        :schema="schema"
        :state="state"
        :on-submit="onSubmit"
      >
        <u-form-field
          name="email"
          label="Email"
          class="w-full"
        >
          <u-input v-model="state.email" class="w-full" />
        </u-form-field>

        <u-form-field
          name="password"
          label="Password"
          class="w-full"
        >
          <u-input
            v-model="state.password"
            type="password"
            class="w-full"
          />
        </u-form-field>

        <u-button
          class="mt-4"
          type="submit"
          color="primary"
        >
          Создать аккаунт
        </u-button>
      </u-form>
    </div>
  </div>
</template>
