import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '../pages/Index.vue'

const routes = [{
    path: "/",
    //redirect重定向
    //redirect: '/home', //下面必须有 path:'/home'
    //redirect:{
    //   name:'home'
    //}//命名路由
    redirect: (to) => {
        return {
            name: 'home'
        }
    }
},
{ 
    path: '/home', 
    name: 'home', 
    component: Index,
},
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})
//全局守卫
// router.beforeEach((to, from, next) => {
//     console.log(to);
//     console.log(from);
//     next() //通行证
// })
export default router