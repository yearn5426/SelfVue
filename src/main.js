/**
 * Created by ym on 2017/6/14.
 */

import Vue from 'vue';
import app from './App';
import VueRouter from 'vue-router';
// import router from './routes';

Vue.use(VueRouter);

Vue.config.debug = true;
// Vue.config.delimiters = ['${', '}'];  // 把默认的{{ }} 改成ES6的模板字符串 ${ }
Vue.config.devtools = true;

let vueRouter = new VueRouter({
    routes: [{
        path: '/',
        component:  require('./components/main')
    }, {
        path: '/not-found',
        component: require('./components/not-found')
    }]
});

new Vue({
    el: '#app',
    render: (h) => h(app)
});