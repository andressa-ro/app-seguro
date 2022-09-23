<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="cotar">
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <p class="text-h5 text-center">Informe os dados do bem que deseja cotar o seguro</p>
        <q-input label="Descrição do bem" v-model="form.bem"></q-input>
        <q-input label="Valor do bem" v-model="form.valor_do_bem"></q-input>
        <q-input label="Parcelas" v-model="form.quantidade_parcelas"></q-input>
        <div class="full-width q-pd-md">
          <q-btn
            label="Fazer cotação"
            color="primary"
            outlined
            rounded
            @click="cotar"
            size="md"
            class="full-width"
          />
        </div>
      </div>
    </q-form>
    <div class="row justify-center" v-show="existeCotacao">
      <div class="col-md-4 col-sm-6 col-xs-10 q-my-lg">
        <q-card class="my-card">
          <q-card-section class="bg-info text-white">
            <div class="text-subtitle2">Bem: {{cotacaoAtual.bem}}</div>
            <div class="text-subtitle2">Valor do bem: {{cotacaoAtual.valor_do_bem}}</div>
            <div class="text-subtitle2">Valor total seguro: {{cotacaoAtual.valor_total_seguro}}</div>
            <div class="text-subtitle2">Quantidade parcelas: {{cotacaoAtual.quantidade_parcelas}}</div>
            <div class="text-subtitle2">Valor parcela seguro: {{cotacaoAtual.valor_parcela_seguro}}</div>
          </q-card-section>
          <q-separator />
          <q-card-actions align="right">
            <q-btn stack glossy color="accent" @click="salvarCotacao()">Salvar Cotação</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>

import { ref } from 'vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { useUserStore } from 'src/stores/user-store'

export default {
  setup () {
    const form = ref({
      bem: '',
      valor_do_bem: '',
      quantidade_parcelas: ''
    })

    const $q = useQuasar()
    const cotacaoAtual = ref([])
    const existeCotacao = ref(false)
    const cotacao = ref([])
    const userStore = useUserStore()
    const token = userStore.getToken
    const user = userStore.getUser
    const router = useRouter()

    function salvarCotacao () {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }

      api.post('/api/v1/cotacao/' + user.id, cotacaoAtual.value, config)
        .then(() => {
          $q.notify({
            color: 'success',
            position: 'top',
            message: 'Cotação salva',
            icon: 'success'
          })
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

    function cotar () {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
      api.post('/api/v1/cotacao/processamento', form.value, config)
        .then((response) => {
          cotacaoAtual.value = response.data
          existeCotacao.value = true
        })
        .catch(() => {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: 'Falha ao comunicar com o servidor.',
            icon: 'report_problem'
          })
        })
    }
    return {
      form, salvarCotacao, cotacaoAtual, cotacao, cotar, existeCotacao
    }
  }
}
</script>
