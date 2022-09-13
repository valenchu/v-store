<template>
    <div class="grid-x">
        <product-detail></product-detail>
    </div>
</template>

<script>
    import ProductDetail from '@/components/products/ProductDetail.vue';
    export default {
        name: 'DetailPageProducts',
        components:{
            ProductDetail
        }
    }
</script>

<style lang="scss" scoped>

</style>