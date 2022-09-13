<template>
    <div class="cell grid-x grid-margin-x">
        <div class="cell small-6 medium-4 large-3"
        v-for="produc in products"
        :key="produc.id">
            <v-card-products
            :img='produc.main_image'
            :name='produc.name'
            :price='parseFloat(produc.price)'
            :rute="{}"
            >    
            </v-card-products>
        </div>
    </div>
</template>

<script>
import apiProducts from '@/api/products'
import VCardProducts from '@/components/base/VCardProducts.vue';

    export default {
        name: 'TopProducts',
        components:{
                VCardProducts
        },
        data() {
            return {
                products:[] 
            }
        },
        methods:{
            chargeProduct(){
                apiProducts.topProducts().then(
                    (response) => {
                        this.products = response.data.results
                    }
                )
            }
        },
        beforeMount(){
            this.chargeProduct();
            console.log(this.products)
        }
    }
</script>

<style lang="scss" scoped>

</style>