import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Pagamentos from '@/views/Pagamentos.vue'
import HistoricoSolicitacoes from '@/views/HistoricoSolicitacoes.vue'
import Configuracoes from '@/views/Configuracoes.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pagamentos',
      name: 'Pagamentos',
      component: Pagamentos
    },
    {
      path: '/historico-solicitacoes',
      name: 'HistoricoSolicitacoes',
      component: HistoricoSolicitacoes
    },
    {
      path: '/configuracoes',
      name: 'Configuracoes',
      component: Configuracoes
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})