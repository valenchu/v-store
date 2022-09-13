<template>
  <div class="banner">
    <img class="banner__img" src="../../assets/bannerCatalog.jpg" alt="" />
    <h1 class="banner__title">Welcome to my Store</h1>
    <div class="banner__copy">
      <p class="banner__copy__text">
        In this small web app i will be able see a product list and practice
        with vue router, cicle of life of the component and data charge the
        server
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss" scoped>
.banner {
  border: 1px solid;
  text-align: center;
  background: $black;
  &__img {
    width: 100%;
    height: 300px;
    @include minScreen($extra-small-screen) {
      height: 300px;
    }
    @include minScreen($medium-screen) {
      height: 500px;
    }
    @include minScreen($large-screen) {
      height: 600px;
    }
    @include minScreen($extra-large-screen) {
      height: 1024px;
    }
  }
  &__title {
    font-family: $font-title;
    color: $light-blue;
  }
  &__copy {
    padding: 1em;
    background: $dark-blue;
    @include minScreen($medium-screen) {
      margin: 2em;
    }
    @include minScreen($large-screen) {
      margin-left: 8em;
      margin-right: 8em;
    }
    &__text {
      font-size: 12px;
      @include minScreen($medium-screen) {
        font-size: 16px;
      }
      font-family: $font-subtitle;
      color: $light-blue;
    }
  }
}
</style>