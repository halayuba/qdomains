<template>
  <div>
    <PageHeader title="Q Resize Observer" 
      @click="showSection('qresizeobserver')"
    />

    <div class="q-px-lg"
      v-if="section === 'qresizeobserver'"
    >
      <q-btn color="primary" push label="Set Random Size"
        @click="setRandomSize"
      />
      <div class="q-mt-md">
        <div class="row full-width bg-green q-pa-md" 
          :style="style"
        >
          <q-card style="width: 100px" class="flex justify-center items-center">
            <q-badge v-if="report">width: {{ report.width }}</q-badge>
          </q-card>
          <q-space />
          <q-card style="width: 100px" class="flex justify-center items-center">
            <q-badge v-if="report">height: {{ report.height }}</q-badge>
          </q-card>
          <q-resize-observer @resize="onResize" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from 'components/misc/PageHeader.vue'
import { ref } from 'vue'

  const title = ref('Q Resize Observer')
  const style = ref({ width: '200px', height: '200px' })
  const report = ref(null)
  const onResize = size => {
    report.value = size
  }
  const setRandomSize = () => {
    style.value = {
      width: Math.floor(100 + Math.random() * 200) + 'px',
      height: Math.floor(100 + Math.random() * 200) + 'px'
    }
  }

  const section = ref('')
  const showSection = (sec) => {
    section.value = section.value === sec ? '' : sec 
  }
</script>

<style lang="sass" scoped>
.container
  transition: width .3s, height .3s
</style>