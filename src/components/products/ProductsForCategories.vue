<template>
  <div class="cell grid-x grid-margin-x">
    <div
      class="cell small-6 medium-4 large-3"
      v-for="pro in productCat"
      :key="pro.id"
    >
      <v-card-products
        :img="pro.main_image"
        :name="pro.name"
        :price="parseFloat(pro.price)"
        :rute="{ name: 'detail-prodcuts', params: { id: pro.id } }"
      >
      </v-card-products>
    </div>
  </div>
</template>

<script>
import apiProducts from "@/api/products";
import VCardProducts from "@/components/base/VCardProducts.vue";
export default {
  name: "ProductsForCategoriesPage",
  components: {
    VCardProducts,
  },
  data() {
    return {
      productCat: [],
    };
  },
  watch: {
    "$route.params.category"() {
      this.getProductsForCategoríes();
    },
  },
  methods: {
    getProductsForCategoríes() {
      let filter = "category=" + this.$route.params.category;
      apiProducts.filterCategorie(filter).then((response) => {
        this.productCat = response.data.results;
      });
    },
  },
  beforeMount() {
    this.getProductsForCategoríes();
  },
};
</script>

<style lang="scss" scoped>
</style>