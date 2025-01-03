import { createRouter, createWebHistory } from 'vue-router'
import Transactions from '../pages/Transactions.vue';
import Home from '../pages/Home.vue';
import Wallet from '../pages/Wallet.vue';
import Crypto from '../pages/Crypto.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/transactions', component: Transactions },
  { path: '/wallet', component: Wallet },
  { path: '/crypto', component: Crypto },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;