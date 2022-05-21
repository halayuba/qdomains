<template>
  <q-page padding>
    <q-btn color="primary" push label="Set Random Size"
      @click="setRandomSize"
    />
    <div class="q-mt-md">
      <div class="row full-width bg-green q-pa-md"
        :style="style"
      >
        <q-card style="width: 100px" class="flex justify-center items-center">
          <q-badge
            v-if="report"
          >
            width: {{ report.width }}
          </q-badge>
        </q-card>

        <q-space />

        <q-card style="width: 100px" class="flex justify-center items-center">
          <q-badge
            v-if="report"
          >
            height: {{ report.height }}
          </q-badge>
        </q-card>

        <q-resize-observer @resize="onResize" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

  const style = ref({ width: '200px', height: '200px' })
  const report = ref(null)
  const onResize = (size) => {
    report.value = size
  }
  const setRandomSize = () => {
    style.value = {
      width: Math.floor(100 + Math.random() * 200) + 'px',
      height: Math.floor(100 + Math.random() * 200) + 'px'
    }
  }

</script>

<style lang="sass" scoped>
.container
  transition: width .3s, height .3s
</style>
