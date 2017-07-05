<template>
    <div class="y-header">
        <div class="y-header-left" @click="backClick">
            <i class="icon ion-ios-arrow-left" v-if="backButton"></i>
            <slot name="left-content"></slot>
        </div>
        <div class="y-header-title">
            <span>{{title}}</span>
        </div>
        <div class="y-header-right">
            <slot name="right-content"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'yHeader',
        props: {
            title: {
                type: String,
                default: 'Title'
            },
            backButton: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            backClick(){
                window.history.go(-1);
                this.$emit('back-click')
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .y-header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 5px 15px;
        background: #00a8f9;
        color: #fff;
        .icon {
            font-size: 1.5rem;
        }
        .y-header-title span{
            vertical-align: sub;
        }
        .y-header-left, .y-header-right{
            min-width: 20px;
        }
        div{
            height: 2rem;
        }
    }
</style>