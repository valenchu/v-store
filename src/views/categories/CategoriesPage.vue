<template>
  <div class="grid-container">
    <div class="grid-x grid-margin">
      <div class="cell small-12 medium-2 large-3">
        <the-list-categories></the-list-categories>
      </div>
      <div class="cell small-12 medium-10 large-9">
        <the-list-color></the-list-color>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TheListCategories from '@/components/categories/TheListCategories.vue';
import TheListColor from '@/components/categories/TheListColor.vue';

export default {
  name: "CategoriesPage",
  components:  {
    TheListCategories,
    TheListColor
  }
};
</script>

<style lang="scss" scoped>
</style>