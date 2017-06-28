/**
 * Created by ym on 2017/6/28.
 */
import axios from 'axios';
import fs from 'fs';
import  cheerio from 'cheerio';

let http = axios;

let tempUrl = 'http://image.baidu.com/n/similar?queryImageUrl='
    + encodeURIComponent('https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2933773599,3484489584&fm=58') +
    '&querySign=2698471219,1497188653&word=&querytype=0&t=1497861478344&rn=60&sort=&fr=pc&pn=0'

let Spider = {
    fetchPage(x){
        http.get(x).then(res=>{
            let html = '';
            let titles= [];
            let data = res.data;
            data.setEncoding('utf-8');
            data.on('data', chunk=>{
                html += chunk;
            });
            data.on('end', ()=>{
                let $ = cheerio.load(html);
                let resultBody = $('#sourceCard .clearfix');

            })

        })
    },
};

export default Spider