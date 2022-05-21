<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn push color="white" text-color="primary" :label="title">

    </q-btn>
  </div>
</template>

<script setup>
  const props = defineProps({
    title:{
      type: String,
      required: true
    },
  })
</script>
