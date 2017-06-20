/**
 * Created by ym on 2017/6/19.
 */

import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$http = axios;

const FastClick = require('fastclick');
FastClick.attach(document.body);