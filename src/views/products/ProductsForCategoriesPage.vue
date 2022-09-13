<template>
    <div>
        <products-for-categories></products-for-categories>
</div>
</template>

<script>
    import ProductsForCategories from '@/components/products/ProductsForCategories.vue';
    export default {
        name: 'ProductsForCategoriesPage',
        components:{
            ProductsForCategories
        }
    }
</script>

<style lang="scss" scoped>

</style>