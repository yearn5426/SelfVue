<template>
    <div class="app-nav-view">
        <view-box>
            <router-view class="router-view"></router-view>
            <tabbar>
                <tabbar-item @on-item-click="goTo(item.routeName)" v-for="item in tabList" :key="item.name">
                    <i slot="icon" class="icon" :class="item.icon"></i>
                    <span slot="label">{{item.name}}</span>
                </tabbar-item>
            </tabbar>
        </view-box>
    </div>
</template>
<script>

    import { Tabbar, TabbarItem, ViewBox  } from 'vux'

    export default {
        components: {
            Tabbar,
            TabbarItem,
            ViewBox
        },
        data(){
            return {
                message: 'My fa',
                imgSrc: require('./img/avatar.min.jpg'),
                tabList: [{
                    name: '搜索',
                    routeName: 'main',
                    icon: 'ion-ios-search'
                }, {
                    name: '识图',
                    routeName: 'main',
                    icon: 'ion-ios-film-outline'
                }, {
                    name: '其他',
                    routeName: 'main',
                    icon: 'ion-ios-color-filter-outline'
                }]
            }
        },
        methods: {
            goTo(pathName){
                console.log(pathName)
            }
        },
        watch: {
            selectedTab(val){
                console.log(val);
            }
        }

    }
</script>
<style lang="scss" rel="stylesheet/scss">
    html, body {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }
    body {
        background: #F1F6F9;
        margin: 0;
        padding: 0;
        .app-nav-view{
            height: 100%;
            .router-view{
                width: 100vw;
                transition: all .5s cubic-bezier(.55,0,.1,1);
            }
            .weui-tabbar{
                height: 3.5rem;
                a {
                    height: calc(3.5rem - 5px);
                    .weui-tabbar__label{
                        margin: 0;
                    }
                }
            }
        }


    }
</style>