import VueRouter from 'vue-router'

import home from './components/tabbar/home.vue'
import shopcar from './components/tabbar/shopcar.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import foodlist from './components/food/foodlist.vue'
import foodinfo from './components/food/foodinfo.vue'


var router = new VueRouter({
    routes:[    {path:'/',component:home},
                {path:'/home',component:home},
                {path:'/shopcar',component:shopcar},
                {path:'/member',component:member},
                {path:'/search',component:search},
                {path:'/home/foodlist',component:foodlist},
                {path:'/home/foodlist/foodinfo',component:foodinfo,name:'foodinfo'}
               
            ],
    linkActiveClass:'mui-active',
    
});
//暴露router ,main里面的实例需要引用
export default router
