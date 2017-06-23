<template>
    <div>
        <y-header title="搜索结果" :back-button="true" @back-click="goBack"></y-header>
        <iframe id="y-iframe" :src="searchUrl" width="100%" :height="iframeHeight" frameborder="0"></iframe>
    </div>
</template>
<script>
    import YHeader from 'components/y-header'
    import antiAd from '../common/anti-ad'
    export default{
        components: {
            YHeader
        },
        data(){
            return {
                searchUrl: 'http://www.baidu.com/s?rn=10&ie=utf-8&wd=' + this.$route.params.searchKey +'&pn=1&cl=1',
                iframeHeight: ''
            }
        },
        mounted(){
            let headHeight = document.getElementsByClassName('y-header')[0].clientHeight;
            let tabHeight = document.getElementsByClassName('weui-tabbar')[0].clientHeight;
            this.iframeHeight = Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight
            ) - headHeight - tabHeight + 'px';
            let iframe = document.querySelector('#y-iframe');
            iframe.onload = ()=>{
                if(!iframe.contentDocument.getElementById('y-script')){
                    antiAd(iframe.contentDocument)
                }
            }
        },
        methods: {
            goBack(){
                window.history.go(-1)
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    body {
    }
</style>