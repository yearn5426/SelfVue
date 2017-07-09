<template>
    <div class="y-input">
        <input type="text" :style="inputStyle" v-model="subValue"/>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'yInput',
        data(){
          return {
              subValue: this.value
          }
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            inputStyle: {
                type: Object,
                default: function(){
                    return {};
                }
            }
        },
        methods: {
        },
        watch: {
            subValue(val){
                this.$emit('value-change', val);
                this.$emit('input', val);
            },
            value(val){
                this.subValue = val;
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .y-input input{
        font-size: 1.2rem;
        border-radius: .25rem;
        height: calc(2rem - 4px);
        &:focus{
            border: 2px solid #0092da;
            box-shadow: #0092da 0 0 1px 1px;
        }
    }
</style>