<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Learn Quasar
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/one" label="Page One" />
        <q-route-tab to="/login" label="Log in" />
        <q-route-tab to="/WhatsApp" label="WhatsApp" />
        <q-space />
        <q-route-tab>
          <q-btn
            round
            icon="person"
            dense
            color="info"
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
        </q-route-tab>

      </q-tabs>

    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <MainLayoutMenuList />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import MainLayoutMenuList from './MainLayoutMenuList.vue'

  const leftDrawerOpen = ref(false)

  const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }

</script>
