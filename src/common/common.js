/**
 * Created by ym on 2017/6/19.
 */

import Vue from 'vue';
import axios from 'axios';
import fs from 'fs';
import cheerio from 'cheerio';

Vue.prototype.$fs = fs;
Vue.prototype.$http = axios;
Vue.prototype.$cheerio = cheerio;

const FastClick = require('fastclick');
FastClick.attach(document.body);