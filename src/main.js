//引入Vue,和路由,并挂载
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入vue-resource,使用get,post请求
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

//导入主要App模板
import App from './App.vue'
import router from './router.js'

// 导入mui的样式文件
import './lib/mui/css/mui.min.css'
import './lib//mui/fonts/mui.ttf'
import './lib/mui/css//app.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import './lib/mui/css/icons-extra.css'



//引入css文件
import "mint-ui/lib/style.min.css"

//引入头部组件
import { Header } from 'mint-ui'
Vue.component(Header.name,Header);

//引入幻灯片组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var vm = new Vue({
    el:'#app',
    //上来直接渲染App.vue
    render:c=>c(App),
    router:router,

    },
);