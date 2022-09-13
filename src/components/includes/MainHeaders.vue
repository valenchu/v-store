<template>
  <div class="header">
    <router-link :to="{ name: 'home' }" class="header__logo">My cataloge</router-link>
    <ul class="header__menu">
      <li class="header__menu__item">
        <router-link :to="{ name: 'products' }" class="header__menu_item__link"> Products </router-link>
      </li>
      <li class="header__menu__item">
        <router-link :to="{ name: 'categories', params: {'category':' '} }" class="header__menu_item__link">
          Categories
        </router-link>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainHeaders",
};
</script>

<style lang="scss" scoped>
.header {
  background: $black;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @include minScreen($small-screen) {
    justify-content: space-between;
  }
  @include minScreen($large-screen) {
    justify-content: space-between;
    padding: 1em;
  }
  &__logo {
    color: $light-blue;
    font-family: $font-title;
    font-size: 26px;
    text-decoration: none;
    @include minScreen($large-screen) {
      justify-content: space-between;
      font-size: 30px;
    }
  }
  &__menu {
    display: none;
    @include minScreen($extra-small-screen) {
      
      display: grid;
      grid-template-columns: auto auto;
      list-style: none;
      margin: 0px;
      padding: 0px;
      &__item {
        margin: 5px;
        &__link {
          padding: 5px 10px;
          text-decoration: none;
          color: $dark-light-blue;
          font-family: $font-subtitle;
          font-weight: bold;
          
        }
      }
      
    }
  }
}
</style>