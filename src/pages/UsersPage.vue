<template>
  <q-page padding>
    <q-item class="q-mb-md">
      <q-item-section></q-item-section>
      <q-item-section side>
        <q-btn
          round
          color="primary"
          icon="add"
          @click="showFlag = true"
        ></q-btn>
      </q-item-section>
    </q-item>
    <q-table :rows="data" :columns="columns">
      <template #body-cell-name="props">
        <q-td :props="props">
          <q-input borderless
            v-model="props.row.name"
            :loading="false"
          ></q-input>
        </q-td>
      </template>

      <template #body-cell-is_admin="props">
        <q-td :props="props">
          <q-chip
            :color="props.row.is_admin ? 'positive' : ''"
          >
            {{ props.row.is_admin }}
          </q-chip>
        </q-td>
      </template>
    </q-table>

    <Dialog
      :showFlag="showFlag"
      @closeDialog="showFlag = false"
    />

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import users from 'assets/data/users'
import Dialog from 'components/users/Dialog.vue'

  const showFlag = ref(false)

  const data = ref(users)

  const columns = [
    {
      field: 'id',
      name: 'id',
      align: 'left',
      label: 'ID'
    },
    {
      field: 'name',
      name: 'name',
      align: 'left',
      label: 'Name'
    },
    {
      field: 'email',
      name: 'email',
      align: 'left',
      label: 'Email'
    },
    {
      field: 'is_admin',
      name: 'is_admin',
      align: 'left',
      label: 'Admin'
    }
  ]

</script>
