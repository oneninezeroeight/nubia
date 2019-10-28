<template>
    <div>
        <Header :toggle=0></Header>
        <div class="nav_left">
            <ul>
                <li class="active"></li>
            </ul>
        </div>
        <div class="page-index">
            <div class="list_category2">
                <a href="">
                    <i></i>
                    <p></p>
                    <i></i>
                </a>
                <ul>
                    <li>
                        <a href="">
                            <img src="" alt="">
                        </a>
                    </li>
                </ul>
                <p class="check_more">
                    <a href="">查看更多</a>
                </p>
            </div>
        </div>
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
<style scoped>
.search{
    background: white;
}
</style>