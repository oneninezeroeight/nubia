<template>
    <div>
        <Header :toggle=0></Header>
        <Footer :offset=1></Footer>
    </div>
</template>
<script>
import Header from "../../header/header.vue";
// import Search from "";
// import Panel from "";
import Footer from "../../footer/footer.vue"
export default {
    components:{
        Header,
        Footer
    }
}
</script>