<template>
    <div class="grid-container"><!--lib foundation-->
    <div class="grid-x grid-margin-x">
        <h1 class="cell title">List of products</h1>
        <top-products></top-products>
    </div>
    </div>
</template>

<script>
import TopProducts from '@/components/products/TopProducts.vue';
    export default {
        name: 'ProductsPage',
        components:{
            TopProducts,
        }
    }
</script>

<style lang="scss" scoped>
.title{
    font-family: $font-title;
    text-align: center;
    font-size: 20px;
    color: $dark-light-blue;
}

</style>