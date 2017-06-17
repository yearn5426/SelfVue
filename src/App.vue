<template>
    <div>
        <!--<router-view></router-view>-->
        <div>
            <h1>{{message}}</h1>
        </div>
    </div>
</template>
<script>
    export default{
        el: '#app',
        data(){
            return {
                message: 'My Vue'
            }
        }
    }
</script>
<style lang="sass" rel="stylesheet/scss">
    body {
        background: red;
        #app {
            h1{
                color: red;
            }
        }
    }
</style>