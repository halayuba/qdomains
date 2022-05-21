<template>
  <q-page padding>
    <div class="flex justify-around">
      <q-card style="max-width: 300px" class="full-width cursor-pointer q-mt-md"
        v-for="item in inventory"
        :key="item.id"
      >
        <q-img
          :src="item.image"
        />

        <div class="q-pa-md">
          <span class="text-subtitle1 text-grey-9">{{ item.label }}</span>
        </div>

        <div class="q-px-md">
          <p class="text-caption text-grey-8">{{ item.description }}</p>
        </div>

        <div class="q-pa-sm">
          <q-chip
            v-for="cat, index in item.categories"
            :key="index"
          >
            {{ cat }}
          </q-chip>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import inventory from 'assets/data/inventory'


</script>
