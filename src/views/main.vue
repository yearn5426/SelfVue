<template>
    <div>
        <y-header :title="'搜索'" :back-button="true"></y-header>
        <input type="text" @change="writeSrc" v-model="searchKey">
        <div @click="search">search</div>
        <div @click="spider">spider</div>
        <div v-for="item in resultList">
            <img :src="item.objURL">
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import YHeader from 'components/y-header'

    export default{
        components: {
            YHeader
        },
        data(){
            return {
                resultList: [],
                searchKey: '京东'
            }
        },
        methods:{
            search(){
//                this.$router.push({
//                    name: 'search-result',
//                    params: {
//                        searchKey: this.searchKey
//                    }
//                })
                this.$http.get('https://www.baidu.com/s?ie=UTF-8&wd=' + encodeURIComponent(this.searchKey))
                        .then(res=>{
                            let $ = this.$cheerio.load(res.data);
                            let resultBody = $('#results .result.c-result.c-clk-recommend');
                            let resultList = Array.from(resultBody).map((item, index)=>{
                                let title = $($(item).find('.c-title.c-gap-top-small')[0]).html() || $($(item).find('.c-font-medium.c-color ')[0]).html();
                                let href = $($(item).find('.c-container a.c-blocka'))[0].attribs.href;
                                let isOW = false;
                                title = unescape(title.replace(/&#x/g,'%u').replace(/;/g,''));
                                let ow = title.indexOf('<i class="c-text c-text-public c-gap-left-small">官网</i>');
                                if( ow != -1 ){
                                    title = title.slice(0, ow);
                                    isOW = true;
                                }
                                title = title.replace(/\<[^(em)].+?\>/g,  (word)=> {
                                    return word == '</em>' ? word : '';
                                });
                                return {
                                    title,
                                    href
                                };
                            })
                })
            },
            writeSrc(){

            },
            spider(){

            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    body {

    }
</style>