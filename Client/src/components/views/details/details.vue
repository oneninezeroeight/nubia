<template>
    <div>详情页</div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            data:{}
        }
    },
    methods: {
        getData(){
            axios.get('http://localhost:3000/finddata',{
                params:{
                    cuteid:this.$route.params.cateid,
                    goodid:this.$route.params.goodid
                }
            }).then(res=>{
                console.log(res.data);
            })
        }
    },
    mounted () {
        this.getData()
    }
}
</script>