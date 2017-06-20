/**
 * Created by ym on 2017/6/16.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Main =  resolve => {
    require.ensure(['./views/main'], () => {
        resolve(require("./views/main"));
    });
};

const NotFound =  resolve => {
    require.ensure(['./views/not-found'], () => {
        resolve(require("./views/not-found"));
    });
};

const routes = [
    {
        path: '/',
        name: 'main',
        meta: {
            title: '首页',
            keepAlive: true
        },
        component: Main
    },
    {
        path: '/not-found',
        name: 'not-found',
        meta: {
            title: '无数据',
            keepAlive: true
        },
        component: NotFound
    }
]

let router = new VueRouter({
    routes
});

router.afterEach( route =>{
    let title = route.meta.title;
    document.title = title;
});

export default router;