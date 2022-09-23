
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'cotacoes', component: () => import('pages/IndexPage.vue') },
      { path: 'nova-cotacao', name: 'nova-cotacao', component: () => import('pages/NovaCotacaoPage.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/LoginPage.vue') }
    ]
  },
  {
    path: '/cadastre-se',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'cadastre-se', component: () => import('pages/CadastroUsuarioPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
