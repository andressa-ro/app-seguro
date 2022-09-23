<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="login()">
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <p class="text-h5 text-center">Login</p>
        <q-input label="Email" v-model="form.email"></q-input>
        <q-input label="Senha" v-model="form.password" type="password"></q-input>
        <div class="full-width q-pd-md">
          <q-btn
            label="Login"
            color="primary"
            outlined
            rounded
            size="md"
            @click="login()"
            class="full-width"
          />
        </div>
        <div class="full-width q-pd-md">
          <q-btn
            label="Cadastre-se"
            flat
            class="full-width"
            size="md"
            @click="$router.replace('/cadastre-se')"
          />
      </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { useUserStore } from 'src/stores/user-store'
import { defineComponent, ref } from 'vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LoginPage',

  setup () {
    const $q = useQuasar()
    const form = ref({
      email: '',
      password: ''
    })

    const userStore = useUserStore()
    const router = useRouter()

    function login () {
      api.post('/api/v1/login', form.value)
        .then((response) => {
          userStore.setToken(response.data.token)
          userStore.setUser(response.data.user)
          router.push({
            name: 'cotacoes'
          })
        })
        .catch((error) => {
          if (error.response.status === 400) {
            $q.notify({
              color: 'negative',
              position: 'top',
              message: error.response.data,
              icon: 'report_problem'
            })
          } else {
            $q.notify({
              color: 'negative',
              position: 'top',
              message: 'Falha ao comunicar com o servidor.',
              icon: 'report_problem'
            })
          }
        })
    }

    return {
      form, login
    }
  }
})

</script>
