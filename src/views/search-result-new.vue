<template>
    <div>
        <y-header :title="'搜索结果'" :back-button="true"></y-header>
        <div v-for="result in resultList" class="result-body">
            <p v-html="result.title" class="result-title"></p>
            <p v-html="result.content"></p>
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
        methods:{}
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .result-body {
        .result-title{
            em{
                color: red;
            }
        }
    }
</style>