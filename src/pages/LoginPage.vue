<template>
  <q-page class="flex flex-center" padding>
    <q-card class="full-width" style="max-width: 400px;">
      <q-card-section class="text-h4 text-weight-bold text-center">Login</q-card-section>
      <q-card-section>
        <q-input filled class="q-mb-md" label="Email"
          v-model="form.email"
        ></q-input>
        <q-input filled class="q-mb-md" label="Password" type="password"
          v-model="form.password"
        ></q-input>
      </q-card-section>
      <q-btn class="full-width" color="primary" label="login"
        @click.prevent="login"
      ></q-btn>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

  const form = ref({
    email: '',
    password: ''
  })

  const login = () => {
    console.log("LOGIN")
  }
</script>
