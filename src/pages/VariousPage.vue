<template>
  <q-page padding>

    <!-- Resize Observer -->
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

    <!-- MENU -->
    <PageHeader title="Q Menu"
      @click="showSection('qmenu')"
    />
    <div class="q-px-lg q-gutter-lg"
      v-if="section === 'qmenu'"
    >
      <q-btn color="primary" label="Basic Menu">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn
        color="grey"
        unelevated
        label="file"
        style="width: 200px"
      >
        <q-menu fit>
          <q-list>
            <q-item clickable>
              <q-item-section>
                New
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>
                Preferences
              </q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right"></q-icon>
              </q-item-section>
              <q-menu anchor="top end" self="top start">
                <q-list>
                  <q-item clickable>
                    <q-item-section>
                      Option 1
                    </q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>
                      Option 2
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-item>
            <q-item clickable>
              <q-item-section>
                Save As
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn
        round
        icon="person"
        dense
        color="primary"
        unelevated
      >
        <q-menu auto-close>
          <q-list>
            <q-item clickable>
              <q-item-section>
                Profile
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>
                Dashbaord
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>
                Logout
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-card style="width: 150px; height: 150px">
        <q-menu auto-close touch-position contextmenu>
          <q-list>
            <q-item>
              <q-item-section>
                Copy
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                Download
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-card>
    </div>

  </q-page>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import PageHeader from 'components/misc/PageHeader.vue'

// import QResizeObserver from 'components/various/QResizeObserver.vue'
// import QMenu from 'components/various/QMenu.vue'

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

  const section = ref('')
  const showSection = (sec) => {
    section.value = section.value === sec ? '' : sec
  }

</script>

<style lang="sass" scoped>
.container
  transition: width .3s, height .3s
</style>
