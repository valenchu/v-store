import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsPage from '@/views/products/ProductsPage.vue'
import CategoriesPage from '@/views/categories/CategoriesPage.vue'
import ProductsForCategoriesPage from '@/views/products/ProductsForCategoriesPage.vue'
import DetailPageProducts from '@/views/products/DetailPageProducts.vue'

const routes = [
  {
    path: 'v-store/',
    name: 'home',
    component: HomeView
     // eslint-disable-next-line
  },
  {
    path: 'v-store/products',
    name: 'products',
    component: ProductsPage
     // eslint-disable-next-line
  },
  {
    path: 'v-store/categories',
    component: CategoriesPage,
     // eslint-disable-next-line,
     children:[
      { 
      path: ':category',
      name: 'categories',
      component: ProductsForCategoriesPage
      },
      {
        path:'v-store/product-detail/:id',
        name:'detail-prodcuts',
        component:DetailPageProducts
      }
     ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
