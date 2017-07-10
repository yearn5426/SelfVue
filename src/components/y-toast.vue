<template>
    <div class="y-toast">
        <div class="mask" v-show="isShowMask && show"></div>
        <transition :name="currentTransition">
            <div class="toast" v-show="show" :class="toastClass">
                <span class="toast-content">{{content}}</span>
            </div>
        </transition>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        name: 'yToast',
        data(){
            return {
                show: false
            }
        },
        props: {
            value: Boolean,
            content: {
                type: String,
                default: ''
            },
            position: {
                type: String,
                default: 'bottom'
            },
            transition: String,
            isShowMask: {
                type: Boolean,
                default: false
            }
        },
        created(){
            if (this.value) {
                this.show = true
            }
        },
        computed: {
            currentTransition () {
                if (this.transition == 'no-transition'){
                    return;
                }
                if (this.transition) {
                    return this.transition
                }
                if (this.position === 'top') {
                    return 'vux-slide-from-top'
                }
                if (this.position === 'bottom') {
                    return 'vux-slide-from-bottom'
                }
                return 'vux-fade'
            },
            toastClass () {
                return {
                    'toast-top': this.position === 'top',
                    'toast-bottom': this.position === 'bottom',
                    'toast-middle': this.position !== 'top'&& this.position !== 'bottom'
                }
            }
        },
        watch: {
            show(val){
                if ( val ){
                    this.$emit('on-show');
                    clearTimeout(this.timeout);
                    this.timeout = setTimeout(()=>{
                        this.show = false;
                        this.$emit('on-hide');
                    }, 1500)
                }
            },
            value(val){
                this.show = val;
            }
        }

    }
</script>
<style rel="stylesheet/scss" lang="scss">
.y-toast{
    font-size: 1rem;
    .mask{
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(174, 174, 174, 0.5);
    }
    .toast-top{
        top: 15vh;
    }
    .toast-bottom{
        top: auto;
        bottom: 15vh;
    }
    .toast-middle{
        top: 50%;
        transform: translateX(50%) translateY(50%);
    }
    .vux-slide-from-top-enter, .vux-slide-from-top-leave-active {
        opacity: 0;
        transform: translateX(-50%) translateY(-100%)!important;
    }
    .vux-slide-from-bottom-enter, .vux-slide-from-bottom-leave-active {
        opacity: 0;
        transform: translateX(-50%) translateY(100%)!important;
    }
    .vux-slide-from-top-enter-active,
    .vux-slide-from-top-leave-active,
    .vux-slide-from-bottom-enter-active,
    .vux-slide-from-bottom-leave-active {
        transition: all 300ms cubic-bezier(.36,.66,.04,1);
    }
    .toast {
        margin: 0;
        position: fixed;
        left: 50%;
        width: 150vw;
        transform: translateX(-50%);
        text-align: center;
        background-color: transparent;
        z-index: 1001;
    }
    .toast-content {
        display: inline-block;
        margin: 0 auto;
        background-color: rgba(68,68,68,.8);
        color: #fff;
        padding: .2rem 1.5rem;
        border-radius: 4rem;
        text-align: justify;
        font-size: .9375rem;
        max-width: 70vw;
    }
}
</style>