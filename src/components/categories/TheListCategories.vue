<template>
  <div class="cell grid-container">
    <ul class="list">
      <li
        v-for="listCat in listOfCategories"
        :key="listCat.id"
        class="list__item"
      >
        <router-link
          :to="{
            name: 'categories',
            params: { category: listCat.name_unique },
          }"
          class="list__item__link"
        >
          {{ listCat.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import apiCategories from "@/api/categories";
export default {
  name: "TheListCategories",
  data() {
    return {
      listOfCategories: [],
    };
  },
  methods: {
    chargeCategories() {
      apiCategories.categories().then((result) => {
        this.listOfCategories = result.data;
      });
    },
  },
  beforeMount() {
    this.chargeCategories();
  },
};
</script>

<style lang="scss" scoped>
.list {
  list-style: none;
  padding: 0px;
  margin: 0px;
  background: $black;
  &__item {
    display: block;
    &__link {
      display: block;
      padding: 10px;
      text-decoration: none;
      font-size: 15px;
      color: $dark-light-blue;
      font-family: $font-subtitle;
      &:hover {
        background: $dark-blue;
        color: $light-blue;
      }
    }
  }
}
</style>