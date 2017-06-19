<template>
    <div>
        <router-view></router-view>
        <div>
            <h1>{{message}}</h1>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                message: 'My fa'
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    body {
    }
</style>