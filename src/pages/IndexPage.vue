<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="secondary" icon-right="add" label="Nova cotação" @click="$router.replace('/nova-cotacao')" />
    </div>
    <div class="q-pa-md">
      <q-table
        class="my-sticky-header-table"
        color="primary"
        title="Minhas Cotações"
        :rows="cotacoes"
        :columns="columns"
        :loading="loading"
        row-key="name"
        flat
        bordered
      >
        <template v-slot:loading>
          <q-inner-loading showing color="primary" />
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { onMounted, ref } from 'vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'
import { useUserStore } from 'src/stores/user-store'

const cotacoes = ref([])
const columns = [
  {
    name: 'id',
    required: false,
    align: 'left',
    visible: false,
    label: 'ID',
    field: 'id',
    sortable: true
  },
  {
    name: 'valor_do_bem',
    required: true,
    align: 'left',
    label: 'Valor do bem',
    field: 'valor_do_bem',
    sortable: true
  },
  {
    name: 'valor_total_seguro',
    required: true,
    align: 'left',
    label: 'Valor total seguro',
    field: 'valor_total_seguro',
    sortable: true
  },
  {
    name: 'quantidade_parcelas',
    required: true,
    align: 'left',
    label: 'Quantidade parcelas',
    field: 'quantidade_parcelas',
    sortable: true
  },
  {
    name: 'usuario_id',
    required: false,
    visible: false
  },
  {
    name: 'valor_parcela_seguro',
    required: true,
    align: 'left',
    label: 'Valor parcela',
    field: 'valor_parcela_seguro',
    sortable: true
  },
  {
    name: 'createdAt',
    required: true,
    visible: false
  },
  {
    name: 'updatedAt',
    required: true,
    visible: false
  }
]

export default {
  setup () {
    const $q = useQuasar()
    const userStore = useUserStore()
    const token = userStore.getToken
    const user = userStore.getUser
    const loading = ref(false)
    onMounted(() => {
      getColecoes()
    })

    const getColecoes = async () => {
      try {
        loading.value = true
        console.log(token)
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        }
        console.log(user)
        const { data } = await api.get('/api/v1/cotacao/' + user.id, config)
        cotacoes.value = data
        loading.value = false
      } catch (error) {
        console.log(error)
        loading.value = false
        $q.notify({
          color: 'negative',
          position: 'top',
          message: 'Erro ao obter cotações salvas :(',
          icon: 'report_problem'
        })
      }
    }
    return {
      columns,
      loading,
      cotacoes
    }
  }
}
</script>
