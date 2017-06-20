/**
 * Created by ym on 2017/6/14.
 */

import Vue from 'vue';
import app from './App';
import VueRouter from 'vue-router';
import router from './routes';


import './common/common'

Vue.use(VueRouter);

Vue.config.debug = true;
// Vue.config.delimiters = ['${', '}'];  // 把默认的{{ }} 改成ES6的模板字符串 ${ }
Vue.config.devtools = true;

new Vue({
    el: '#app',
    router,
    render: (h) => h(app)
});