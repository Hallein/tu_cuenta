import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Bills from './views/Bills/Bills.vue'
import NewBill from './views/NewBill/NewBill.vue'
import BillDetail from './views/BillDetail/BillDetail.vue'
import NewProduct from './views/NewProduct/NewProduct.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/registro',
			name: 'signup',
			component: SignUp
		},
		{
			path: '/',
			name: 'home',
			component: Home,
			children: [
				{ path: '', name: 'bills', component: Bills },
				{ path: 'nueva-cuenta', name: 'new-bill', component: NewBill },
				{ path: 'cuenta/:id', name: 'bill-detail', component: BillDetail },
				{ path: 'cuenta/:id/agregar-producto', name: 'new-product', component: NewProduct },
			]
		},
	]
})


export default router;