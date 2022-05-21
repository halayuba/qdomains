<template>
  <q-dialog
    v-model="props.showFlag"
  >
    <q-card
      class="full-width"
      style="max-width: 450px"
    >
      <q-toolbar>
        <q-toolbar-title>Create User</q-toolbar-title>

        <q-btn
          flat
          round
          v-close-popup
          icon="close"
          size="sm"
          @click.prevent="closeDialog"          
        ></q-btn>
      </q-toolbar>

      <q-card-section>
        <q-input filled class="q-mb-md" label="Name" type="text"
          v-model="form.name"
        ></q-input>
        <q-input filled class="q-mb-md" label="Email"
          v-model="form.email"
        ></q-input>
      </q-card-section>

      <q-btn class="full-width" color="primary" label="Save"
        @click.prevent="createUser"
      ></q-btn>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'

  const emit = defineEmits()

  const props = defineProps({
    showFlag:{
      type: Boolean,
      required: true
    },
  })

  const form = ref({
    email: '',
    name: ''
  })

  const createUser = async() => {
    await console.log("Create User")
    emit('closeDialog')
  }

  const closeDialog = () => {
    emit('closeDialog')
  }
</script>

<style lang="scss" scoped>

</style>
