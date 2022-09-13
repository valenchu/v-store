<template>
  <div v-if="product" class="grid-x grid-margin-x product">
    <div class="cell small-12 medium-7">
      <img class="product__img" :src="product.main_image" />
      <div class="product__imgs">
        <img class="product__imgs__img" :src="product.second_image" />
        <img class="product__imgs__img" :src="product.third_image" />
      </div>
    </div>
    <div class="cell small-12 medium-5">
      <h3 class="product__title">{{ product.name }}</h3>
      <p class="product__categories">
        <span
          v-for="cate in product.category"
          :key="cate.id"
          class="product__categories__categorie"
        >
          {{ cate.name }}
        </span>
      </p>
      <h3 class="product__titlec">Colors</h3>
      <p class="product__colors">
        <span
          v-for="color in product.colors"
          :key="color.id"
          :style="{ background: color.value }"
          class="product__colors__color"
        >
        </span>
      </p>
      <p class="product__price">$ {{ product.price }}</p>
    </div>
    <div class="cell small-12">
      <p class="product__description" v-html="product.description">
      </p>
    </div>
  </div>
</template>

<script>
import apiProducts from "@/api/products";
export default {
  name: "ProductDetail",
  data() {
    return {
      product: null
    };
  },
  methods: {
    getProductById() {
      apiProducts.getProductsById(this.$route.params.id).then((response) => {
        if (response !== null) {
          this.product = response.data;
        }
      });
    },
  },
  beforeMount() {
    this.getProductById();
  },
};
</script>

<style lang="scss" scoped>
.product {
  
  &__img {
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    @include minScreen($medium-screen) {
      height: 300px;
    }
  }

  &__imgs {
    display: flex;
    justify-content: center;
    align-items: center;
    &__img {
      width: 100px;
      height: 100px;
      margin: 5px;
    }
  }

  &__title {
    font-family: $font-title;
    font-size: 28px;
    color: $dark-light-blue;
    margin-bottom: 1em;
    margin-top: 1em;
  }
  &__titlec{
    font-family: $font-title;
    font-size:20px;
    color: $dark-light-blue;
    margin-bottom: 1em;
    margin-top: 1em;
  }

  &__categories {
    border: 1px solid $dark-blue;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 1em;
    &__categorie {
      color: $light-blue;
      display: block;
      margin: 5px;
    }
  }
  &__colors {
    border: 1px solid $dark-blue;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 1em;
    display: flex;
    &__color {
      width: 30px;
      height: 30px;
      border: 1px solid $dark-blue;
      margin: 5px;
    }
  }
  &__price {
    font-size: 24px;
    color: $dark-light-blue;
    font-weight: bold;
    font-family: $font-subtitle;
  }
  &__description {
    margin-top: 1em;
  }
}
</style>