<template>
<main-headers></main-headers>
  <router-view/>
</template>

<script>
import MainHeaders from '@/components/includes/MainHeaders.vue';

export default {
  name : 'App',
  components: {

    MainHeaders
  }
}
</script>

<style lang="scss">
* {
padding: 0px;
margin: 0px;
background: $black;
}
</style>
