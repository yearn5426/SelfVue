<template>
    <div>
        <y-header :title="'搜索'" :back-button="false"></y-header>
        <div class="search-body">
            <y-input v-model="searchKey" @value-change="valueChange"></y-input>
            <div class="click-btn" @click="search">search</div>
        </div>
        <div @click="spider">spider</div>
        <div v-for="item in resultList">
            <img :src="item.objURL">
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import YHeader from 'components/y-header'
    import YInput from 'components/y-input'

    function unescapeStr(str) {
        return unescape(str.replace(/&#x/g,'%u').replace(/;/g,''));
    }

    function getContent(str, category) {
        str = unescapeStr(str);
        let tempObj = {};
        if ( category == 'title'){
            let ow = str.indexOf('<i class="c-text c-text-public c-gap-left-small">官网</i>');
            if( ow != -1 ){
                str = str.slice(0, ow);
                tempObj.isOW = true;
            }
        }
        tempObj[category] = str.replace(/\<[^(em)].+?\>/g,  (word)=> {
            return word == '</em>' ? word : '';
        });
        return tempObj
    }

    export default{
        components: {
            YHeader,
            YInput
        },
        data(){
            return {
                resultList: [],
                searchKey: ''
            }
        },
        methods:{
            search(){
                if (this.searchKey.trim() ){
                    this.$http.get('https://www.baidu.com/s?ie=UTF-8&wd=' + encodeURIComponent(this.searchKey))
                            .then(res=>{
                                let $ = this.$cheerio.load(res.data);
                                let resultBody = $('#results .result.c-result');
                                let resultList = Array.from(resultBody).map((item, index)=>{
                                    let cheerioItem = $(item);
                                    let href;
                                    let body;
                                    let title;

                                    title = $(cheerioItem.find('.c-title.c-gap-top-small')[0]).html() || $(cheerioItem.find('.c-font-medium.c-color ')[0]).html();
                                    let hasBody = $(cheerioItem.find('.c-abstract')[0]).html() || $(cheerioItem.find('.c-line-clamp3 ')[0]).html() || $(cheerioItem.find('.c-line-clamp4 ')[0]).html();
                                    let hasList = $(cheerioItem.find('.wa-realtime-list'))[0];
                                    let isOW = false;
                                    if ( hasList ){
                                        href = [];
                                        let list = $($(hasList).find(".c-gap-top-small.c-line-bottom"));
                                        href = Array.from(list).map(listItem=>{
                                            let cheerioListItem =$(listItem);
                                            let itemHref = $(cheerioListItem.find('a.c-blocka'))[0].attribs.href;
                                            let titleBody = $(cheerioListItem.find('.c-font-large'))[0];
                                            let itemTitle = getContent($(titleBody).html(), 'title').title;
                                            return {
                                                itemTitle,
                                                itemHref
                                            }
                                        });
                                    } else {
                                        href = $(cheerioItem.find('.c-container a.c-blocka'))[0].attribs.href;
                                        let tempObj = getContent(title, 'title');
                                        title = tempObj.title;
                                        isOW = tempObj.isOW;
                                    }

                                    if( hasBody ){
                                        body = getContent(hasBody, 'content').content;
                                    }
                                    return {
                                        title,
                                        href,
                                        body,
                                        isOW
                                    };
                                });
                                this.$router.push({
                                    name: 'search-result-new',
                                    params: {
                                        resultList
                                    }
                                })
                            })
                } else {

                }
            },
            writeSrc(){

            },
            spider(){

            },
            valueChange(val){
                console.log(this.searchKey);
            }

        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    body {
        .search-body{
            width: 80%;
            margin:0 auto;
            margin-top: 30%;
            display: flex;
            flex-direction: row;
        }
        .click-btn{
            background: #0092da;
            color: #fff;
            height: 2rem;
            display: inline-block;
            line-height: 2rem;
            vertical-align: middle;
            padding:0 .25rem;
        }
    }
</style>