<template>
    <div>
        <input type="file" @change="writeSrc">
        <div @click="search">search</div>
        <img :src="fileSrc">
        <div v-for="item in resultList">
            <img :src="item.objURL">
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                fileSrc: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2933773599,3484489584&fm=58',
                resultList: []
            }
        },
        methods:{
            writeSrc(event){
                let reader = new FileReader();
                let _this = this;
                reader.onload = function (evt) {
                    _this.fileSrc = evt.target.result;
                    console.log( _this.fileSrc)
                };
                reader.readAsDataURL(event.target.files[0]);
            },
            search(){
                this.$http.get('http://image.baidu.com/n/similar?queryImageUrl='
                        + encodeURIComponent(this.fileSrc) +
                        '&querySign=2698471219,1497188653&word=&querytype=0&t=1497861478344&rn=60&sort=&fr=pc&pn=0')
                        .then( (res) => {
                    this.resultList = res.data.data;
                })
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    body {
        #app {
            h1{
                color: red;
            }
        }
    }
</style>