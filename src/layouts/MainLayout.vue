<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="home" class="q-mr-sm" to="/" />
        <q-toolbar-title>
          Cotação Seguro
        </q-toolbar-title>
        <q-btn dense flat round icon="account_circle" size="lg" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item active clickable v-ripple @click="logout" >
              <q-item-section avatar>
                <q-icon name="logout"/>
              </q-item-section>

              <q-item-section>
                Logout
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <div class="absolute-top bg-indigo-1 q-pa-lg text-black" style="height: 100px">
          <div class="text-weight-bold">{{user.nome}}</div>
          <div>{{user.email}}</div>
          <div>{{user.telefone}}</div>
        </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { useUserStore } from 'src/stores/user-store'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const rightDrawerOpen = ref(false)
    const userStore = useUserStore()
    const user = userStore.getUser
    const router = useRouter()

    function logout () {
      router.push({
        name: 'login'
      })
    }

    return {
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
      user,
      logout
    }
  }
})
</script>
