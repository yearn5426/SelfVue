<template>
    <div>
        <y-header :title="'搜索结果'" :back-button="true"></y-header>
        <div v-for="result in resultList" class="result-body">
            <p v-html="result.title" class="result-title" @click="goDetail(result.href)"></p>
            <p v-html="result.body" v-if="result.body" class="result-content" @click="goDetail(result.href)"></p>
            <p v-if="(typeof result.href) == 'object'" class="href-list"
               v-for="item in result.href" v-html="item.itemTitle"
               @click="goDetail(item.itemHref)"></p>
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
                resultList: this.$route.params.resultList
            }
        },
        methods:{
            goDetail(href){
                (typeof href).toLowerCase() == 'object' || window.open(href, '_blank');
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .result-body {
        margin: .5rem .625rem;
        border: 1px solid #d6dbdf;
        background: white;
        padding: .25rem .625rem;
        border-bottom-right-radius: 1.5rem;
        box-shadow: #d6dbdf 1px 1px 1px 1px;
        .result-title{
            margin: .4rem 0;
            border-left: 4px solid #0092da;
            line-height: 1rem;
            height: 1rem;
            overflow: hidden;
            padding-left: .4rem;
            em{
                color: red;
            }
        }
        .result-content{
            max-height: 4.5rem;
            line-height: 1.5rem;
            overflow:  hidden;
            font-size: .8rem;
        }
        .href-list{
            padding: .4rem;
            &:last-child{
                border-bottom: 0;
            }
            em{
                color: red;
            }
        }
    }
</style>