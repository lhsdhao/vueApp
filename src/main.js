// console.log('ok');

import Vue from 'Vue'

import App from './App.vue'

import router from './router.js'

// 导入mui的样式文件
import './lib/mui/css/mui.min.css'
import './lib//mui/fonts/mui.ttf'


//按需导入mint-Ui组件
import "mint-ui/lib/style.min.css"

import { Header } from 'mint-ui'

Vue.component(Header.name,Header);



var vm = new Vue({
    el:'#app',
    render:c=>c(App)
    }
);