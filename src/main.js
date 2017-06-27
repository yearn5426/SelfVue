/**
 * Created by ym on 2017/6/14.
 */

import Vue from 'vue';
import vueApp from './App';
import VueRouter from 'vue-router';
import router from './routes';
require('./style/main.scss');

import './common/common'

Vue.use(VueRouter);

Vue.config.debug = true;
// Vue.config.delimiters = ['${', '}'];  // 把默认的{{ }} 改成ES6的模板字符串 ${ }
Vue.config.devtools = true;

new Vue({
    el: '#app',
    router,
    render: (h) => h(vueApp)
});

// var app = {
// // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//     },
// // Bind Event Listeners
// //
// // Bind any events that are required on startup. Common events are:
// // 'load', 'deviceready', 'offline', and 'online'.
//     bindEvents: function() {
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//     },
// // deviceready Event Handler
// //
// // The scope of 'this' is the event. In order to call the 'receivedEvent'
// // function, we must explicitly call 'app.receivedEvent(...);'
//     onDeviceReady: function() {
//         appRouter.start(App, 'app')
//         window.navigator.splashscreen.hide()
//     },
// // Update DOM on a Received Event
//     receivedEvent: function(id) {
//         var parentElement = document.getElementById(id);
//         var listeningElement = parentElement.querySelector('.listening');
//         var receivedElement = parentElement.querySelector('.received');
//         listeningElement.setAttribute('style', 'display:none;');
//         receivedElement.setAttribute('style', 'display:block;');
//         console.log('Received Event: ' + id);
//     }
// };
// app.initialize();