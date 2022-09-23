<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="register()">
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <p class="text-h5 text-center">Cadastre-se</p>
        <q-input
          label="Nome Completo"
          v-model="form.nome"
          lazy-rules :rules="[ val => val && val.length > 0 || 'campo obrigatório']"
        />
        <q-input
          label="Email"
          v-model="form.email"
          lazy-rules :rules="[ val => val && val.length > 0 || 'campo obrigatório']"
        />
        <q-input
          label="Telefone"
          v-model="form.telefone"
        />
        <q-input
          label="Senha"
          v-model="form.password"
          lazy-rules :rules="[ val => val && val.length > 0 || 'campo obrigatório']"
        />
        <div class="full-width q-pd-md">
          <q-btn
            label="Cadastrar"
            color="primary"
            outlined
            rounded
            size="md"
            class="full-width"
            @click="register()"
          />
        </div>
        <div class="full-width q-pd-md">
          <q-btn
            label="Já tem cadastro? Faça login aqui"
            flat
            class="full-width"
            size="md"
            href="/login"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'CadastroUsuarioPage',

  setup () {
    const $q = useQuasar()
    const form = ref({
      email: '',
      nome: '',
      telefone: '',
      password: ''
    })
    const router = useRouter()

    function register () {
      api.post('/api/v1/usuario', form.value)
        .then((response) => {
          $q.notify({
            color: 'positive',
            position: 'top',
            message: 'Cadastro realizado! Faça login',
            icon: 'succes'
          })
          router.push({
            name: 'login'
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
      form, register
    }
  }
})
</script>
