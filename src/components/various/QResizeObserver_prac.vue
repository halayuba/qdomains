<template>
  <div>
    <PageHeader :title="title" />
    <div class="q-mt-md">
      <div class="row full-width bg-blue q-pa-md" style="height: 100px">
        <q-resize-observer @resize="showResize" />
      </div>
    </div>
    <div class="q-mt-md">
      <div class="row full-width bg-green q-pa-md" style="height: 100px">
        <q-card style="width: 100px">TEST</q-card>
        <q-space />
        <q-card style="width: 100px">TEST</q-card>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from 'components/misc/PageHeader.vue'
import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'QResizeObserver',

    setup(){
      const title = ref('Q Resize Observer')
      const left = ref()
      const right = ref()
      const count = ref(0)

      const showResize = (dimenstions) => {
        console.log(dimenstions)
        left.value = count.value++
        right.value = count.value++
      }

      return{showResize, title, left, right, count}
    }
  })
</script>
