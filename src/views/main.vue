<template>
    <div>
        <y-header :title="'搜索'" :back-button="true"></y-header>
        <input type="text" @change="writeSrc" v-model="searchKey">
        <div @click="search">search</div>
        <div v-for="item in resultList">
            <img :src="item.objURL">
        </div>
    </div>
</template>
<script>
    import YHeader from 'components/y-header'

    export default{
        components: {
            YHeader
        },
        data(){
            return {
                resultList: [],
                searchKey: ''
            }
        },
        methods:{
            search(){
                this.$router.push({
                    name: 'search-result',
                    params: {
                        searchKey: this.searchKey
                    }
                })
            },
            writeSrc(){

            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    body {

    }
</style>