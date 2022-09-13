<template>
    <div class="products">
        <img :src="img" class="products__img">
        <router-link :to="rute" class="products__name">{{ name }}</router-link>
        <p class="products__price">
            {{ price }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'VCardProducts',
        props: {
            img: String,
            name: String,
            price: Number,
            rute: Object
        }
    }
</script>

<style lang="scss" scoped>

.products{
    border: 1px solid;
    margin: 5px;
    background: $dark-light-blue;
    &__img{
        width: 100%;
        height: 120px;
        margin-bottom: 10px;
    @include minScreen($medium-screen) {
      height: 150px;
    }
    @include minScreen($large-screen) {
      height: 200px;
    }
    @include minScreen($extra-large-screen) {
      height: 300px;
    }
    }
    &__name{
        font-family: $font-subtitle;
        color: $black;
        font-weight: bold;
        display:block;
        text-decoration: none;
        padding-left: 10px;
        margin-bottom: 10px;
        text-transform: capitalize;
    }
    &__price{
        font-size: 20px;
        font-weight: bold;
        color: $dark-light-blue;
        padding-left: 10px;
        margin-bottom: 10px;
    }
}

</style>