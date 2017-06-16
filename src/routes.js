/**
 * Created by ym on 2017/6/16.
 */
module.exports = {
    routes: [{
        path: '/',
        component:  require('./components/main')
    }, {
        path: '/not-found',
        component: require('./components/not-found')
    }]
}
