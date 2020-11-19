import Vue from 'vue'
import Router from 'vue-router'
// 懒加载
const Home = () => import('../pages/home/Home')
const Category = () => import('../pages/category/Category')
const Cart = () => import('../pages/cart/Cart')
const Me = () => import('../pages/me/Me')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      // 指定的组件
      component:Home
    },
    {
      path: '/category',
      component:Category
    },
    {
      path: '/cart',
      component:Cart
    },
    {
      path: '/me',
      component:Me
    }
  ],
  mode:'history'
})
