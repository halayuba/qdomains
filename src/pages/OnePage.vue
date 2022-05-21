<template>
  <q-page padding>
    <pre>{{ title }}</pre>

    <q-input
      v-model="title"
    ></q-input>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

  const title = ref('One Page')
</script>
