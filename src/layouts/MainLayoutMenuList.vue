<template>
  <q-list>
    <q-item>
      <q-item-section>
        <q-item-label class="text-h6">
          Dashboard
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-item
      v-for="item, index in menuItems"
      :key="index"
      :to="item.to"
      dense
    >
      <q-item-section>
        {{ item.label }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
import menuItems from './menuItems'

</script>
