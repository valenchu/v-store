<template>
  <div class="cell">
    <ul class="list">
      <li class="list__item" v-for="color in liColor" :key="color.id">
        <a
          href="#"
          class="list__item__color"
          :style="{ background: color.value }"
        ></a>
      </li>
    </ul>
  </div>
</template>

<script>
import apiColor from "@/api/color";

export default {
  name: "TheListColor",
  data() {
    return {
      liColor: [],
    };
  },
  methods: {
    getColors() {
      apiColor.listColor().then((response) => {
        this.liColor = response.data;
      });
    },
  },
  beforeMount() {
    this.getColors();
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 10px;
  &__item {
    display: block;
    margin-right: 3px;
    &__color {
      display: block;
      border: 1px solid $dark-blue;
      width: 30px;
      height: 30px;
      text-decoration: none;
    }
  }
}
</style>